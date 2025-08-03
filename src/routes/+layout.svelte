<script>
  import favicon from '$lib/assets/favicon.svg';
  import Menu from "$lib/components/site/menu.svelte";
  import Assemblage from "$lib/components/scene/Assemblage.svelte";
  import { sceneStore } from "$lib/stores/sceneStore";
  import { onMount } from 'svelte';

  let { children } = $props();

  onMount(() => {
    const computedStyle = getComputedStyle(document.documentElement);
    const particleColor = computedStyle.getPropertyValue('--c-fg').trim();
    sceneStore.update(store => ({ ...store, particleColor }));
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="scene-background">
  <Assemblage />
</div>

<div class="page-content-wrapper">
  <Menu/>
  <main class="main-content">
    {@render children?.()}
  </main>
</div>

<style is:global>
  /* Reset and base styles */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    height: 100vh;
    overflow: hidden; /* Prevent scrolling on html/body */
  }
  body {
    display: flex;
    flex-direction: column;
  }

  /* Scene background styles */
  .scene-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 0; /* Bottom layer */
    pointer-events: auto; /* Allow interaction with the scene */
  }

  /* Page content wrapper styles */
  .page-content-wrapper {
    position: fixed; /* Covers the entire viewport */
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1; /* Above the scene */
    display: flex;
    flex-direction: column;
    overflow-y: auto; /* Allow content to scroll */
    background-color: transparent; /* Allow scene to show through */
  }

  /* Main content area styles */
  .main-content {
    flex-grow: 1; /* Takes available space */
    overflow-y: auto; /* Allows content to scroll independently */
    /* No explicit pointer-events here, defaults to auto */
  }

  /* Theme colors (from previous versions) */
  @media (prefers-color-scheme: light) {
    :root {
      --color-theme0: #FFFFFF;
      --color-theme1: #3D3B8E;
      --color-theme2: #5E548E;
      --color-theme3: #9F86C0;
      --color-theme4: #FFB4A2;
      --color-theme5: #3D3B8E;
    }
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --color-theme0: #121212;
      --color-theme1: #A3A0F6;
      --color-theme2: #9B94F6;
      --color-theme3: #C1B8F9;
      --color-theme4: #FAD4D8;
      --color-theme5: #292659;
    }
  }
  :root {
    --c-bg: var(--color-theme0);
    --c-fg: var(--color-theme1);
    --c-a: var(--color-theme4);
    --s: 0.5rem;
  }
  :global {
    html {
      background-color: var(--c-bg);
      color: var(--c-fg);
    }
    a {
      color: var(--c-a);
    }
  }
</style>
