<script>
  import { sceneStore } from '../lib/stores/sceneStore';
  import { onMount, onDestroy } from 'svelte';
  let { data } = $props();
  const pageData = data.homePageData;

  onMount(() => {
    sceneStore.update(store => ({
      ...store,
      centralStructureTargetPosition: [0, 0, 0],
      centralStructureTargetRotation: [0, 0, 0],
      componentSpawnRate: 50,
      componentSpeed: 0.01,
      sceneState: 'mesh',
      cameraPosition: [0, 0, 10],
      cameraLookAt: [0, 0, 0],
      colorAnimationEnabled: true,
      particleAnimationSpeed: 0.8
    }));
  });

  onDestroy(() => {
    // Optionally reset to a default or neutral state when leaving the page
    // Or do nothing if the next page will set its own values
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

