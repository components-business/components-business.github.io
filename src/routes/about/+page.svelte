<script>
  import { sceneStore } from '../../lib/stores/sceneStore'
  import { onMount, onDestroy } from 'svelte'

  onMount(() => {
    sceneStore.set({
      centralStructureTargetPosition: [0, 0, 0],
      centralStructureTargetRotation: [0, Math.PI / 2, 0],
      componentSpawnRate: 5,
      componentSpeed: 0.1,
      sceneState: 'sphere',
      cameraPosition: [0, 0, 0.1], // Inside view
      cameraLookAt: [0, 0, 0]
    })
  })

  onDestroy(() => {
    // Optionally reset to a default or neutral state when leaving the page
  })
</script>

<h1>About</h1>
