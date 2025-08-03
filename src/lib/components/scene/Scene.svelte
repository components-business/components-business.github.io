<script>
  import { T, useTask } from '@threlte/core'
  
  import { onMount } from 'svelte'
  import { tweened } from 'svelte/motion'
  import { sceneStore } from '../../stores/sceneStore'
  import { cubicOut } from 'svelte/easing'

  let centralStructureRotationY = 0
  let componentData = []
  const numComponents = 100 // A fixed number of components for the mesh/sphere

  // Tweened stores for smooth transitions
  const tweenedCentralStructureTargetPosition = tweened([0, 0, 0], { duration: 1000, easing: cubicOut })
  const tweenedCentralStructureTargetRotation = tweened([0, 0, 0], { duration: 1000, easing: cubicOut })
  const tweenedCameraPosition = tweened([0, 0, 10], { duration: 1000, easing: cubicOut })
  const tweenedCameraLookAt = tweened([0, 0, 0], { duration: 1000, easing: cubicOut })

  // Reactive declarations for scene properties from the store
  let sceneState

  $: {
    tweenedCentralStructureTargetPosition.set($sceneStore.centralStructureTargetPosition)
    tweenedCentralStructureTargetRotation.set($sceneStore.centralStructureTargetRotation)
    sceneState = $sceneStore.sceneState
    tweenedCameraPosition.set($sceneStore.cameraPosition)
    tweenedCameraLookAt.set($sceneStore.cameraLookAt)
  }

  // Function to calculate target positions for mesh state
  const getMeshTargetPosition = (index) => {
    const gridSize = Math.ceil(Math.cbrt(numComponents))
    const x = (index % gridSize) - (gridSize - 1) / 2
    const y = (Math.floor(index / gridSize) % gridSize) - (gridSize - 1) / 2
    const z = Math.floor(index / (gridSize * gridSize)) - (gridSize - 1) / 2
    return [x * 0.5, y * 0.5, z * 0.5] // Scale down for better fit
  }

  // Function to calculate target positions for sphere state
  const getSphereTargetPosition = (index) => {
    const phi = Math.acos(-1 + (2 * index) / numComponents)
    const theta = Math.sqrt(numComponents * Math.PI) * phi
    const radius = 3 // Radius of the sphere
    const x = radius * Math.cos(theta) * Math.sin(phi)
    const y = radius * Math.sin(theta) * Math.sin(phi)
    const z = radius * Math.cos(phi)
    return [x, y, z]
  }

  // Function to calculate target positions for scatter state
  const getScatterTargetPosition = () => {
    const range = 60; // Define the range for scattering
    return [
      (Math.random() - 0.5) * range,
      (Math.random() - 0.5) * range,
      (Math.random() - 0.5) * range
    ];
  }

  // Initialize components
  onMount(() => {
    for (let i = 0; i < numComponents; i++) {
      componentData.push({
        id: i,
        x: (Math.random() - 0.5) * 10,
        y: (Math.random() - 0.5) * 10,
        z: (Math.random() - 0.5) * 10,
        tweenedPosition: tweened([0, 0, 0], { duration: 1000, easing: cubicOut })
      })
    }
  })

  let lightRotationAngle = 0;
  let lightPosition = [5, 5, 5]; // Initial position

  useTask((delta) => {
    // Rotate central structure (or the entire group of components)
    centralStructureRotationY += delta * 0.1

    // Rotate the light
    lightRotationAngle += delta * 0.5; // Adjust speed as needed
    const radius = 10; // Distance from center
    lightPosition = [
      radius * Math.sin(lightRotationAngle),
      5, // Keep y constant or vary as needed
      radius * Math.cos(lightRotationAngle)
    ];

    componentData = componentData.map((component, index) => {
      let targetPosition
      if (sceneState === 'mesh') {
        targetPosition = getMeshTargetPosition(index)
      } else if (sceneState === 'sphere') {
        targetPosition = getSphereTargetPosition(index)
      } else if (sceneState === 'scatter') {
        targetPosition = getScatterTargetPosition()
      } else {
        targetPosition = [0, 0, 0] // Default to center if state is unknown
      }

      component.tweenedPosition.set(targetPosition)

      // Update component's actual position from its tweened store
      component.tweenedPosition.subscribe(pos => {
        component.x = pos[0]
        component.y = pos[1]
        component.z = pos[2]
      })()

      return component
    })
  })
</script>

<T.PerspectiveCamera makeDefault position={$tweenedCameraPosition} lookAt={$tweenedCameraLookAt}>
  
</T.PerspectiveCamera>

<T.AmbientLight intensity={0.5} />
<!-- Rotating Directional Light -->
<T.DirectionalLight
  position={lightPosition}
  intensity={1}
  castShadow={true}
>
  <T.OrthographicCamera
    slot="shadow-camera"
    args={[-10, 10, 10, -10, 0.1, 50]}
  />
</T.DirectionalLight>

<!-- Components -->
<T.Group
  position={$tweenedCentralStructureTargetPosition}
  rotation.y={$tweenedCentralStructureTargetRotation[1] + centralStructureRotationY}
  rotation.x={$tweenedCentralStructureTargetRotation[0]}
  rotation.z={$tweenedCentralStructureTargetRotation[2]}
>
  {#each componentData as component (component.id)}
    <T.Mesh position={[component.x, component.y, component.z]} castShadow={true} receiveShadow={true}>
      <T.BoxGeometry args={[0.1, 0.1, 0.1]} />
      <T.MeshStandardMaterial color={$sceneStore.particleColor} />
    </T.Mesh>
  {/each}
</T.Group>