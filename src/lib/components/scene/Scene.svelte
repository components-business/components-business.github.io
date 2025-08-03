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

  // Function to calculate target positions for pricing state (tiered arrangement)
  const getPricingTargetPosition = (index) => {
    const tier = Math.floor(index / 33); // 3 tiers with ~33 components each
    const tierIndex = index % 33;
    const tierHeight = (tier - 1) * 2; // Spread tiers vertically
    const radius = 2 + tier * 0.5; // Each tier has different radius
    
    const angle = (tierIndex / 33) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = tierHeight + Math.sin(tierIndex * 0.5) * 0.3; // Add some wave motion
    
    return [x, y, z];
  }

  // Initialize components
  onMount(() => {
    for (let i = 0; i < numComponents; i++) {
      componentData.push({
        id: i,
        x: (Math.random() - 0.5) * 10,
        y: (Math.random() - 0.5) * 10,
        z: (Math.random() - 0.5) * 10,
        tweenedPosition: tweened([0, 0, 0], { duration: 1000, easing: cubicOut }),
        colorIndex: Math.floor(Math.random() * 6), // Random color index
        colorChangeTimer: Math.random() * 5000, // Random timer for color changes
        baseScale: 0.8 + Math.random() * 0.4, // Random base scale between 0.8-1.2
        pulseOffset: Math.random() * Math.PI * 2 // Random pulse timing offset
      })
    }
  })

  let lightRotationAngle = 0;
  let lightPosition = [5, 5, 5]; // Initial position
  let time = 0;
  let scrollBasedAngle = 0;
  let lightIntensity = 1;

  // Helper function to get current color for a component
  const getCurrentColor = (component) => {
    if (!$sceneStore.particleColors || $sceneStore.particleColors.length === 0) {
      return $sceneStore.particleColor;
    }
    return $sceneStore.particleColors[component.colorIndex] || $sceneStore.particleColor;
  };

  useTask((delta) => {
    time += delta;
    
    // Rotate central structure (or the entire group of components)
    centralStructureRotationY += delta * 0.1

    // Calculate light rotation based on scroll or time
    if ($sceneStore.scrollBasedLighting) {
      // Use scroll position for light rotation (smooth interpolation)
      scrollBasedAngle = ($sceneStore.scrollY * 0.01) % (Math.PI * 2);
      lightRotationAngle = scrollBasedAngle;
      
      // Vary light intensity based on scroll position
      lightIntensity = 0.8 + Math.sin($sceneStore.scrollY * 0.005) * 0.3;
    } else {
      // Default time-based rotation
      lightRotationAngle += delta * 0.5;
      lightIntensity = 1;
    }

    const radius = 10; // Distance from center
    const lightHeight = 5 + Math.sin(lightRotationAngle * 0.5) * 2; // Vary height slightly
    lightPosition = [
      radius * Math.sin(lightRotationAngle),
      lightHeight,
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
      } else if (sceneState === 'pricing') {
        targetPosition = getPricingTargetPosition(index)
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

      // Update color animation timer
      if ($sceneStore.colorAnimationEnabled && $sceneStore.particleColors?.length > 0) {
        component.colorChangeTimer -= delta * 1000 * $sceneStore.particleAnimationSpeed;
        if (component.colorChangeTimer <= 0) {
          component.colorIndex = Math.floor(Math.random() * $sceneStore.particleColors.length);
          component.colorChangeTimer = 2000 + Math.random() * 3000; // 2-5 seconds
        }
      }

      // Calculate pulsing scale
      const pulseScale = 1 + Math.sin(time * 2 + component.pulseOffset) * 0.1;
      component.currentScale = component.baseScale * pulseScale;

      return component
    })
  })
</script>

<T.PerspectiveCamera makeDefault position={$tweenedCameraPosition} lookAt={$tweenedCameraLookAt}>
  
</T.PerspectiveCamera>

<T.AmbientLight intensity={0.5} />
<!-- Scroll-controlled Directional Light -->
<T.DirectionalLight
  position={lightPosition}
  intensity={lightIntensity}
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
    <T.Mesh 
      position={[component.x, component.y, component.z]} 
      scale={[component.currentScale || component.baseScale || 1, component.currentScale || component.baseScale || 1, component.currentScale || component.baseScale || 1]}
      castShadow={true} 
      receiveShadow={true}
    >
      <T.BoxGeometry args={[0.1, 0.1, 0.1]} />
      <T.MeshStandardMaterial 
        color={getCurrentColor(component)}
        emissive={getCurrentColor(component)}
        emissiveIntensity={0.1}
      />
    </T.Mesh>
  {/each}
</T.Group>