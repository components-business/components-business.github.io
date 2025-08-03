<script>
  import settings from "$lib/content/settings.json"
  import { sceneStore } from '../lib/stores/sceneStore'
  import { onMount, onDestroy } from 'svelte'

  onMount(() => {
    sceneStore.set({
      centralStructureTargetPosition: [0, 0, 0],
      centralStructureTargetRotation: [0, 0, 0],
      componentSpawnRate: 10,
      componentSpeed: 0.05,
      sceneState: 'mesh',
      cameraPosition: [0, 0, 10], // Outside view
      cameraLookAt: [0, 0, 0]
    })
  })

  onDestroy(() => {
    // Optionally reset to a default or neutral state when leaving the page
    // Or do nothing if the next page will set its own values
  })
</script>

<h1>Welcome to {settings.title}</h1>

