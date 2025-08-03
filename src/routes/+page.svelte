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

<!-- Hero Section -->
<div class="hero-section">
  <h1 class="page-title">{pageData.title}</h1>
  <div class="hero-card">
    <p class="hero-subtitle">{pageData.blocks[0]?.content}</p>
    <div class="cta-buttons">
      <a href="/pricing" class="cta-primary">View Pricing</a>
      <a href="/contact" class="cta-secondary">Get Started</a>
    </div>
  </div>
</div>

<!-- Feature Cards -->
<div class="features-grid">
  {#each pageData.blocks.slice(1) as block, index}
    <div class="feature-card" style="animation-delay: {(index + 1) * 0.2}s">
      <div class="feature-icon">
        {#if index === 0}
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7v10c0 5.55 3.84 9.95 9 11 5.16-1.05 9-5.45 9-11V7l-10-5z"/>
          </svg>
        {:else if index === 1}
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        {:else if index === 2}
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
          </svg>
        {:else}
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v2H8V2c0-.55-.45-1-1-1s-1 .45-1 1v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
          </svg>
        {/if}
      </div>
      <p>{block.content}</p>
    </div>
  {/each}
</div>

<style>
  .hero-section {
    margin-bottom: calc(var(--s) * 4);
    width: 100%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 var(--s);
  }

  .page-title {
    font-size: clamp(2rem, 6vw, 3.5rem);
    font-weight: 800;
    color: var(--c-fg);
    text-align: center;
    margin-bottom: calc(var(--s) * 2);
    text-shadow: var(--text-shadow);
    background: linear-gradient(135deg, var(--c-fg), var(--c-particle-accent4));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
    opacity: 0;
    transform: translateY(30px);
    animation: titleAppear 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    animation-delay: 0.1s;
  }

  .hero-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--border-radius-lg);
    padding: calc(var(--s) * 3);
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    text-align: center;
    
    opacity: 0;
    transform: scale(0.95) translateY(30px);
    animation: heroAppear 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    animation-delay: 0.2s;
  }

  .hero-subtitle {
    font-size: 1.1rem;
    color: var(--color-theme3);
    margin-bottom: calc(var(--s) * 2);
    line-height: 1.6;
  }

  .cta-buttons {
    display: flex;
    gap: var(--s);
    justify-content: center;
    margin-top: calc(var(--s) * 2);
    flex-wrap: wrap;
  }

  .cta-primary, .cta-secondary {
    padding: calc(var(--s) * 0.875) calc(var(--s) * 1.5);
    border-radius: var(--border-radius);
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    transition: all var(--animation-speed-fast) var(--animation-ease);
    cursor: pointer;
  }

  .cta-primary {
    background: linear-gradient(135deg, var(--c-particle-accent4), var(--c-particle-accent2));
    color: white;
    border: none;
  }

  .cta-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(16, 185, 129, 0.4);
  }

  .cta-secondary {
    background: rgba(255, 255, 255, 0.1);
    color: var(--c-fg);
    border: 2px solid var(--c-particle-accent4);
  }

  .cta-secondary:hover {
    background: var(--c-particle-accent4);
    color: white;
    transform: translateY(-2px);
  }

  .features-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: calc(var(--s) * 1.5);
    margin-top: calc(var(--s) * 2);
    width: 100%;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 var(--s);
  }

  @media (min-width: 600px) {
    .features-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: calc(var(--s) * 2);
    }
  }

  @media (min-width: 768px) {
    .cta-buttons {
      flex-wrap: nowrap;
    }
  }

  @media (min-width: 1000px) {
    .features-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: calc(var(--s) * 2.5);
    }
  }

  .feature-card {
    background: rgba(255, 255, 255, 0.01);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: var(--border-radius);
    padding: calc(var(--s) * 1.5);
    backdrop-filter: blur(6px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: all var(--animation-speed-fast) var(--animation-ease);
    
    opacity: 0;
    transform: translateY(20px);
    animation: featureAppear 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }

  .feature-card:hover,
  .feature-card:focus,
  .feature-card:active {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(12px);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.18);
    transform: translateY(-2px);
  }

  .feature-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.6), rgba(234, 88, 12, 0.6));
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto var(--s); /* Centered horizontally */
    color: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .feature-icon svg {
    width: 24px;
    height: 24px;
  }

  .feature-card p {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.6;
    animation: none; /* Override global p animation */
    opacity: 1;
    transform: none;
  }

  @keyframes heroAppear {
    0% {
      opacity: 0;
      transform: scale(0.95) translateY(30px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  @keyframes featureAppear {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes titleAppear {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>

