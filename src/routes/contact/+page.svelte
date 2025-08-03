<script>
  import { sceneStore } from '../../lib/stores/sceneStore'
  import { onMount, onDestroy } from 'svelte'

  onMount(() => {
    sceneStore.set({
      centralStructureTargetPosition: [0, 0, 0],
      centralStructureTargetRotation: [0, 0, 0],
      componentSpawnRate: 0.1,
      componentSpeed: 5.0,
      sceneState: 'scatter',
      cameraPosition: [0, 0, 100],
      cameraLookAt: [0, 0, 0]
    })
  })

  onDestroy(() => {
    // Optionally reset to a default or neutral state when leaving the page
  })
</script>

<h1>Contact</h1>
