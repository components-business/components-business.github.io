<script>
  import favicon from '$lib/assets/favicon.svg';
  import Menu from "$lib/components/site/menu.svelte";
  import Assemblage from "$lib/components/scene/Assemblage.svelte";
  import { sceneStore } from "$lib/stores/sceneStore";
  import { onMount } from 'svelte';

  let { children, data } = $props();

  onMount(() => {
    const computedStyle = getComputedStyle(document.documentElement);
    const particleColor = computedStyle.getPropertyValue('--c-fg').trim();
    
    // Extract all particle colors for randomization
    const particleColors = [
      computedStyle.getPropertyValue('--c-particle-primary').trim(),
      computedStyle.getPropertyValue('--c-particle-accent1').trim(),
      computedStyle.getPropertyValue('--c-particle-accent2').trim(),
      computedStyle.getPropertyValue('--c-particle-accent3').trim(),
      computedStyle.getPropertyValue('--c-particle-accent4').trim(),
      computedStyle.getPropertyValue('--c-particle-accent5').trim()
    ];
    
    sceneStore.update(store => ({ 
      ...store, 
      particleColor,
      particleColors 
    }));

    // Track scroll position for light rotation
    const handleScroll = () => {
      sceneStore.update(store => ({
        ...store,
        scrollY: window.scrollY
      }));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="scene-background">
  <Assemblage />
</div>

<div class="menu-wrapper">
  <Menu/>
</div>

<div class="page-content-wrapper">
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
    min-height: 100vh;
    font-size: 16px; /* Base font size for rem calculations */
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: var(--c-bg);
    color: var(--c-fg);
  }
  
  /* Mobile-first responsive breakpoints */
  @media (max-width: 360px) {
    html {
      font-size: 13px; /* Extra small mobile */
    }
  }
  
  @media (min-width: 361px) and (max-width: 480px) {
    html {
      font-size: 14px; /* Small mobile */
    }
  }
  
  @media (min-width: 481px) and (max-width: 768px) {
    html {
      font-size: 15px; /* Large mobile/small tablet */
    }
  }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    html {
      font-size: 16px; /* Tablet */
    }
  }
  
  @media (min-width: 1025px) and (max-width: 1440px) {
    html {
      font-size: 17px; /* Desktop */
    }
  }
  
  @media (min-width: 1441px) {
    html {
      font-size: 18px; /* Large desktop */
    }
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

  /* Sticky menu container */
  .menu-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: transparent;
    padding: var(--s);
    display: flex;
    justify-content: center;
  }

  /* Page content wrapper styles */
  .page-content-wrapper {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* breadk overflow axis Y */
    /* justify-content: center; */
    background-color: transparent;
    min-height: 100vh;
    padding-top: 80px; /* Fixed height for menu */
    padding-bottom: calc(var(--s) * 2);
  }

  /* Main content area styles - Mobile First */
  .main-content {
    padding: calc(var(--s) * 1);
    background: transparent;
    border-radius: 0;
    box-shadow: none;
    backdrop-filter: none;
    border: none;
    width: 100%;
    max-width: 98vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex: 1; /* Take available space */
    
    /* Smooth entrance animation */
    opacity: 0;
    transform: scale(0.95) translateY(20px);
    animation: contentAppear 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    animation-delay: 0.1s;
  }
  
  /* Small mobile styles */
  @media (min-width: 361px) {
    .main-content {
      padding: calc(var(--s) * 1.2);
      max-width: 96vw;
    }
  }
  
  /* Large mobile styles */
  @media (min-width: 481px) {
    .menu-wrapper {
      padding: calc(var(--s) * 1.2);
    }
    
    .page-content-wrapper {
      padding: calc(var(--s) * 2) calc(var(--s) * 1.2);
    }
    
    .main-content {
      padding: calc(var(--s) * 1.5);
      max-width: 94vw;
    }
  }
  
  /* Tablet styles */
  @media (min-width: 769px) {
    .menu-wrapper {
      padding: calc(var(--s) * 1.5);
    }
    
    .page-content-wrapper {
      padding: calc(var(--s) * 3) calc(var(--s) * 1.5);
    }
    
    .main-content {
      padding: calc(var(--s) * 2);
      max-width: 92vw;
    }
  }
  
  /* Desktop styles */
  @media (min-width: 1025px) {
    .menu-wrapper {
      padding: calc(var(--s) * 2);
    }
    
    .page-content-wrapper {
      padding: calc(var(--s) * 4) calc(var(--s) * 2);
    }
    
    .main-content {
      padding: calc(var(--s) * 3);
      max-width: 88vw;
    }
  }
  
  /* Large desktop styles */
  @media (min-width: 1441px) {
    .main-content {
      max-width: 1400px;
    }
  }

  /* Professional Dynamic Color Scheme */
  @media (prefers-color-scheme: light) {
    :root {
      --color-theme0: #F8FAFC;
      --color-theme1: #0F172A;
      --color-theme2: #1E293B;
      --color-theme3: #475569;
      --color-theme4: #1D4ED8;
      --color-theme5: #F1F5F9;
      --color-accent1: #DC2626;
      --color-accent2: #EA580C;
      --color-accent3: #CA8A04;
      --color-accent4: #059669;
      --color-accent5: #0284C7;
      --color-surface: rgba(255, 255, 255, 0.85);
      --color-surface-hover: rgba(248, 250, 252, 0.9);
      --color-surface-glass: rgba(255, 255, 255, 0.08);
      --color-menu-bg: rgba(248, 250, 252, 0.9);
      --shadow-color: rgba(0, 0, 0, 0.15);
      --text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      --border-glass: rgba(0, 0, 0, 0.1);
    }
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --color-theme0: #0A0A0A;
      --color-theme1: #FFFFFF;
      --color-theme2: #F1F5F9;
      --color-theme3: #CBD5E1;
      --color-theme4: #3B82F6;
      --color-theme5: #111827;
      --color-accent1: #EF4444;
      --color-accent2: #F59E0B;
      --color-accent3: #EAB308;
      --color-accent4: #10B981;
      --color-accent5: #06B6D4;
      --color-surface: rgba(17, 24, 39, 0.85);
      --color-surface-hover: rgba(31, 41, 55, 0.9);
      --color-surface-glass: rgba(17, 24, 39, 0.15);
      --color-menu-bg: rgba(10, 10, 10, 0.9);
      --shadow-color: rgba(0, 0, 0, 0.8);
      --text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
      --border-glass: rgba(255, 255, 255, 0.1);
    }
  }
  :root {
    --c-bg: var(--color-theme0);
    --c-fg: var(--color-theme1);
    --c-a: var(--color-theme4);
    --c-bg--svg: var(--color-theme3);
    --c-surface: var(--color-surface);
    --c-surface-hover: var(--color-surface-hover);
    --c-surface-glass: var(--color-surface-glass);
    --c-menu-bg: var(--color-menu-bg);
    --c-shadow: var(--shadow-color);
    --c-text-shadow: var(--text-shadow);
    --c-border-glass: var(--border-glass);
    --c-particle-primary: var(--color-theme4);
    --c-particle-accent1: var(--color-accent1);
    --c-particle-accent2: var(--color-accent2);
    --c-particle-accent3: var(--color-accent3);
    --c-particle-accent4: var(--color-accent4);
    --c-particle-accent5: var(--color-accent5);
    --s: 0.5rem;
    --border-radius: 8px;
    --border-radius-sm: 4px;
    --border-radius-lg: 12px;
    
    /* Animation variables */
    --animation-speed-slow: 3s;
    --animation-speed-medium: 1.5s;
    --animation-speed-fast: 0.8s;
    --animation-ease: cubic-bezier(0.4, 0, 0.2, 1);
    --animation-ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  :global {
    html {
      background-color: var(--c-bg);
      color: var(--c-fg);
      transition: background-color var(--animation-speed-medium) var(--animation-ease),
                  color var(--animation-speed-medium) var(--animation-ease);
    }
    a {
      color: var(--c-particle-accent4);
      transition: color var(--animation-speed-fast) var(--animation-ease);
    }
    a:hover {
      color: var(--color-accent2);
      transition: color 0.2s var(--animation-ease);
    }
    img {
      width: auto;
      max-width: 100%;
      display: block;
      margin: 0 auto;
    }
    img[src^="data:image/svg+xml;base64,"] {
      max-width: 4rem;
      background-color: var(--c-bg--svg);
      border-radius: var(--s);
      transition: background-color var(--animation-speed-medium) var(--animation-ease);
      margin: var(--s) auto;
    }
    
    /* Page content animations - Mobile First Typography */
    h1 {
      opacity: 0;
      transform: translateY(20px);
      animation: fadeInUp var(--animation-speed-medium) var(--animation-ease) forwards;
      animation-delay: 0.2s;
      font-size: 1.8rem; /* Mobile first */
      font-weight: 700;
      color: var(--c-fg);
      text-shadow: var(--text-shadow);
      margin-bottom: var(--s);
      line-height: 1.2;
      text-align: center;
    }
    
    p {
      opacity: 0;
      transform: translateY(15px);
      animation: fadeInUp var(--animation-speed-medium) var(--animation-ease) forwards;
      animation-delay: 0.4s;
      line-height: 1.6;
      margin-bottom: var(--s);
      font-size: 0.95rem; /* Mobile first */
      text-shadow: var(--text-shadow);
      color: var(--c-fg);
      text-align: center;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
    
    /* Tablet typography */
    @media (min-width: 768px) {
      h1 {
        font-size: 2.2rem;
        margin-bottom: calc(var(--s) * 1.5);
        line-height: 1.1;
      }
      
      p {
        font-size: 1rem;
        line-height: 1.7;
        text-align: left; /* Allow left alignment on larger screens */
        max-width: 700px;
      }
    }
    
    /* Desktop typography */
    @media (min-width: 1024px) {
      h1 {
        font-size: 2.5rem;
        margin-bottom: calc(var(--s) * 2);
      }
      
      p {
        font-size: 1.1rem;
        max-width: 800px;
      }
    }
    /* Staggered animation for multiple elements */
    p:nth-child(even) {
      animation-delay: 0.6s;
    }
    p:nth-child(3n) {
      animation-delay: 0.8s;
    }
  }
  
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes contentAppear {
    0% {
      opacity: 0;
      transform: scale(0.95) translateY(20px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
</style>
