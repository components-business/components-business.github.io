<script>
	import favicon from '$lib/assets/favicon.svg';
  import Menu from "$lib/components/site/menu.svelte"

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Menu/>

{@render children?.()}

<style is:global>
  *, *::before, *::after {
	  box-sizing: border-box;
  }
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
