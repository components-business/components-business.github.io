<script>
  import { sceneStore } from '../../lib/stores/sceneStore';
  import { onMount, onDestroy } from 'svelte';
  let { data } = $props();
  const pageData = data.aboutPageData;

  onMount(() => {
    sceneStore.update(store => ({
      ...store,
      centralStructureTargetPosition: [0, 0, 0],
      centralStructureTargetRotation: [0, 0, 0],
      componentSpawnRate: 10,
      componentSpeed: 0.05,
      sceneState: 'sphere',
      cameraPosition: [0, 0, 7],
      cameraLookAt: [0, 0, 0],
      colorAnimationEnabled: true,
      particleAnimationSpeed: 1.2
    }));
  });

  onDestroy(() => {
    // Optionally reset to a default or neutral state when leaving the page
  });
</script>

<!-- About Header -->
<div class="about-header">
  <h1 class="page-title">{pageData.title}</h1>
  <div class="intro-card">
    <p class="intro-text">{pageData.blocks[0]?.content}</p>
  </div>
</div>

<!-- Company Values Grid -->
<div class="values-section">
  <h2>Our Values</h2>
  <div class="values-grid">
    {#each pageData.blocks.slice(1) as block, index}
      <div class="value-card" style="animation-delay: {(index + 1) * 0.15}s">
        <div class="value-header">
          <div class="value-icon">
            {#if index === 0}
              <!-- Mission icon -->
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V19C3 20.1 3.9 21 5 21H11V19H5V3H13V9H21Z"/>
              </svg>
            {:else if index === 1}
              <!-- Expertise icon -->
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"/>
              </svg>
            {:else if index === 2}
              <!-- Results icon -->
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16,11V3H8V9H2V21H22V11H16M10,5H14V11H16V19H20V13H18V11H16V19H8V13H6V19H4V11H8V9H10V5Z"/>
              </svg>
            {:else}
              <!-- Partnership icon -->
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16,4C18.21,4 20,5.79 20,8C20,10.21 18.21,12 16,12A4,4 0 0,1 12,8A4,4 0 0,1 16,4M16,14C18.67,14 24,15.33 24,18V20H8V18C8,15.33 13.33,14 16,14M8,4C10.21,4 12,5.79 12,8C12,10.21 10.21,12 8,12A4,4 0 0,1 4,8A4,4 0 0,1 8,4M8,14C10.67,14 16,15.33 16,18V20H0V18C0,15.33 5.33,14 8,14Z"/>
              </svg>
            {/if}
          </div>
          <h3 class="value-title">
            {#if index === 0}
              Our Mission
            {:else if index === 1}
              Elite Expertise
            {:else if index === 2}
              Proven Results
            {:else}
              True Partnership
            {/if}
          </h3>
        </div>
        <p class="value-description">{block.content}</p>
      </div>
    {/each}
  </div>
</div>

<style>
  .about-header {
    text-align: center;
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

  .intro-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--border-radius-lg);
    padding: calc(var(--s) * 2);
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    margin-top: calc(var(--s) * 2);
    
    opacity: 0;
    transform: scale(0.95) translateY(20px);
    animation: introAppear 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    animation-delay: 0.3s;
  }

  .intro-text {
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--color-theme3);
    margin: 0;
    animation: none; /* Override global p animation */
    opacity: 1;
    transform: none;
  }

  .values-section {
    margin-top: calc(var(--s) * 3);
    width: 100%;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 var(--s);
  }

  .values-section h2 {
    text-align: center;
    font-size: clamp(1.5rem, 4vw, 2.2rem);
    font-weight: 700;
    color: var(--c-fg);
    margin-bottom: calc(var(--s) * 3);
    text-shadow: var(--text-shadow);
    
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    animation-delay: 0.5s;
  }

  .values-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: calc(var(--s) * 1.5);
    width: 100%;
  }

  @media (min-width: 600px) {
    .values-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: calc(var(--s) * 2);
    }
  }

  @media (min-width: 1200px) {
    .values-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: calc(var(--s) * 2.5);
      max-width: 1000px;
      margin: 0 auto;
    }
  }

  .value-card {
    background: rgba(255, 255, 255, 0.01);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: var(--border-radius);
    padding: calc(var(--s) * 2);
    backdrop-filter: blur(6px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: all var(--animation-speed-fast) var(--animation-ease);
    position: relative;
    
    opacity: 0;
    transform: translateY(30px);
    animation: valueAppear 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }

  .value-card:hover,
  .value-card:focus,
  .value-card:active {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(12px);
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.18);
    transform: translateY(-2px);
  }

  .value-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--c-particle-accent4), var(--c-particle-accent2));
    border-radius: var(--border-radius) var(--border-radius) 0 0;
  }

  .value-header {
    display: flex;
    align-items: center;
    margin-bottom: var(--s);
  }

  .value-icon {
    width: 56px;
    height: 56px;
    background: var(--c-bg);
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: var(--s);
    color: rgba(255, 255, 255, 0.85);
    box-shadow: 0 3px 8px var(--c-theme1);
    border: 1px solid var(--c-border);
    svg {
      fill: var(--c-fg);
    }
  }

  .value-icon svg {
    width: 28px;
    height: 28px;
  }

  .value-title {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--c-fg);
    margin: 0;
    text-shadow: var(--text-shadow);
  }

  .value-description {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--color-theme3);
    margin: 0;
    text-shadow: var(--text-shadow);
    animation: none; /* Override global p animation */
    opacity: 1;
    transform: none;
  }

  @keyframes introAppear {
    0% {
      opacity: 0;
      transform: scale(0.95) translateY(20px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  @keyframes valueAppear {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInUp {
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
