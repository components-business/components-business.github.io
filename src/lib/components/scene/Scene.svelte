<script>
  import { T, useTask } from '@threlte/core'
  import { OrbitControls } from '@threlte/extras'
  import { onMount } from 'svelte'

  let centralStructureRotationY = 0
  let componentData = []

  const generateNewComponent = () => {
    const spawnDistance = 15 // How far from center components spawn
    const angle = Math.random() * Math.PI * 2
    const x = Math.cos(angle) * spawnDistance * (Math.random() * 0.5 + 0.5)
    const y = (Math.random() - 0.5) * spawnDistance
    const z = Math.sin(angle) * spawnDistance * (Math.random() * 0.5 + 0.5)

    return {
      id: Math.random(), // Unique ID for {#each} block
      x: x,
      y: y,
      z: z,
      targetX: (Math.random() - 0.5) * 2, // Target near center
      targetY: (Math.random() - 0.5) * 2,
      targetZ: (Math.random() - 0.5) * 2,
      speed: Math.random() * 0.05 + 0.02, // Random speed
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      attached: false
    }
  }

  // Initialize some floating components
  onMount(() => {
    for (let i = 0; i < 10; i++) {
      componentData.push(generateNewComponent())
    }
  })

  useTask((delta) => {
    // Rotate central structure
    centralStructureRotationY += delta * 0.1

    // Update component positions and handle attachment
    componentData = componentData.filter(component => {
      if (component.attached) return false // Remove attached components

      const dx = component.targetX - component.x
      const dy = component.targetY - component.y
      const dz = component.targetZ - component.z
      const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

      if (distance < 0.1) {
        // Component has reached its target, consider it attached
        // For now, we just remove it and generate a new one
        // In a more complex scene, it would become part of the central structure
        componentData.push(generateNewComponent())
        return false // Remove current component
      } else {
        // Move towards target
        component.x += dx * component.speed * delta
        component.y += dy * component.speed * delta
        component.z += dz * component.speed * delta
        return true // Keep component
      }
    })
  })
</script>

<T.PerspectiveCamera makeDefault position={[0, 0, 10]}>
  <OrbitControls />
</T.PerspectiveCamera>

<T.AmbientLight intensity={0.5} />
<T.DirectionalLight position={[5, 5, 5]} />

<!-- Central Structure -->
<T.Group rotation.y={centralStructureRotationY}>
  <T.Mesh position={[0, 0, 0]}>
    <T.BoxGeometry args={[1, 1, 1]} />
    <T.MeshStandardMaterial color="#cccccc" />
  </T.Mesh>
  <T.Mesh position={[1.5, 0, 0]}>
    <T.BoxGeometry args={[0.5, 0.5, 0.5]} />
    <T.MeshStandardMaterial color="#aaaaaa" />
  </T.Mesh>
  <T.Mesh position={[-1.5, 0, 0]}>
    <T.BoxGeometry args={[0.5, 0.5, 0.5]} />
    <T.MeshStandardMaterial color="#aaaaaa" />
  </T.Mesh>
  <T.Mesh position={[0, 1.5, 0]}>
    <T.BoxGeometry args={[0.5, 0.5, 0.5]} />
    <T.MeshStandardMaterial color="#aaaaaa" />
  </T.Mesh>
  <T.Mesh position={[0, -1.5, 0]}>
    <T.BoxGeometry args={[0.5, 0.5, 0.5]} />
    <T.MeshStandardMaterial color="#aaaaaa" />
  </T.Mesh>
</T.Group>

<!-- Floating Components -->
{#each componentData as component (component.id)}
  <T.Mesh position={[component.x, component.y, component.z]}>
    <T.BoxGeometry args={[0.3, 0.3, 0.3]} />
    <T.MeshStandardMaterial color={component.color} />
  </T.Mesh>
{/each}
