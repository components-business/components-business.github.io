<script>
  import { sceneStore } from '../../lib/stores/sceneStore';
  import { onMount, onDestroy } from 'svelte';
  let { data } = $props();
  const pageData = data.contactPageData;

  onMount(() => {
    sceneStore.update(store => ({
      ...store,
      centralStructureTargetPosition: [0, 0, 0],
      centralStructureTargetRotation: [0, 0, 0],
      componentSpawnRate: 0.1,
      componentSpeed: 5.0,
      sceneState: 'scatter',
      cameraPosition: [0, 0, 15],
      cameraLookAt: [0, 0, 0],
      colorAnimationEnabled: true,
      particleAnimationSpeed: 2.0
    }));
  });

  onDestroy(() => {
    // Optionally reset to a default or neutral state when leaving the page
  });
</script>

<h1>{pageData.title}</h1>
{#each pageData.blocks as block}
  {#if block.type === 'text'}
    <p>{block.content}</p>
  {:else if block.type === 'image'}
    <img src={block.src} alt={block.alt} />
  {/if}
{/each}
