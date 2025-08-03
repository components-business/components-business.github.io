<script>
  import { sceneStore } from '../../lib/stores/sceneStore';
  import { onMount, onDestroy } from 'svelte';
  let { data } = $props();
  const pageData = data.pricingPageData;

  onMount(() => {
    sceneStore.update(store => ({
      ...store,
      centralStructureTargetPosition: [0, 0, 0],
      centralStructureTargetRotation: [0, 0, 0],
      componentSpawnRate: 30,
      componentSpeed: 0.03,
      sceneState: 'pricing',
      cameraPosition: [0, 0, 12],
      cameraLookAt: [0, 0, 0],
      colorAnimationEnabled: true,
      particleAnimationSpeed: 1.5
    }));
  });

  onDestroy(() => {
    // Reset to default state when leaving the page
  });
</script>

<div class="pricing-container">
  <header class="pricing-header">
    <h1>{pageData.title}</h1>
    <p class="subtitle">{pageData.subtitle}</p>
  </header>

  <div class="pricing-grid">
    {#each pageData.plans as plan, index}
      <div class="pricing-card" class:highlighted={plan.highlight}>
        {#if plan.highlight}
          <div class="popular-badge">Most Popular</div>
        {/if}
        
        <div class="plan-header">
          <h3 class="plan-name">{plan.name}</h3>
          <div class="plan-price">
            <span class="price">{plan.price}</span>
            <span class="period">{plan.period}</span>
          </div>
          <p class="plan-description">{plan.description}</p>
        </div>

        <ul class="features-list">
          {#each plan.features as feature}
            <li class="feature-item">
              <svg class="check-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              {feature}
            </li>
          {/each}
        </ul>

        <button class="cta-button" class:primary={plan.highlight}>
          {plan.cta}
        </button>
      </div>
    {/each}
  </div>

  <section class="cta-section">
    <div class="cta-card">
      <h2>Questions About Our Plans?</h2>
      <p>Our team is here to help you choose the perfect subscription plan for your needs.</p>
      <div class="cta-buttons">
        <a href="/faq" class="cta-primary">View FAQ</a>
        <a href="/contact" class="cta-secondary">Contact Us</a>
      </div>
    </div>
  </section>
</div>

<style>
  .pricing-container {
    width: 100%;
    max-width: none;
    margin: 0;
    padding: 0;
    
    /* Smooth entrance animation */
    opacity: 0;
    transform: scale(0.96) translateY(30px);
    animation: pricingAppear 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    animation-delay: 0.1s;
  }
  

  .pricing-header {
    text-align: center;
    margin-bottom: calc(var(--s) * 4);
  }

  .subtitle {
    font-size: 1.2rem;
    color: var(--color-theme3);
    margin-top: calc(var(--s) * -1);
    font-weight: 400;
    text-shadow: var(--text-shadow);
  }

  .pricing-grid {
    display: grid;
    grid-template-columns: 1fr; /* Mobile first - single column */
    gap: calc(var(--s) * 1.5);
    margin-bottom: calc(var(--s) * 4);
    width: 100%;
    max-width: 100%;
  }
  
  /* Tablet layout */
  @media (min-width: 768px) {
    .pricing-grid {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: calc(var(--s) * 1.5);
      margin-bottom: calc(var(--s) * 4);
    }
  }
  
  /* Desktop layout */
  @media (min-width: 1024px) {
    .pricing-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: calc(var(--s) * 2);
      margin-bottom: calc(var(--s) * 6);
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .pricing-card {
    background: var(--c-surface-glass);
    border: 1px solid var(--c-border-glass);
    border-radius: var(--border-radius);
    padding: var(--s);
    position: relative;
    transition: all var(--animation-speed-fast) var(--animation-ease);
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 20px var(--c-shadow);
  }
  
  /* Tablet card styles */
  @media (min-width: 768px) {
    .pricing-card {
      padding: calc(var(--s) * 1.5);
      border-radius: var(--border-radius-lg);
      backdrop-filter: blur(12px);
      box-shadow: 0 6px 24px var(--c-shadow);
    }
  }
  
  /* Desktop card styles */
  @media (min-width: 1024px) {
    .pricing-card {
      padding: calc(var(--s) * 2);
      backdrop-filter: blur(15px);
      box-shadow: 0 8px 32px var(--c-shadow);
    }
  }

  .pricing-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    border-color: var(--c-particle-accent2);
  }

  .pricing-card.highlighted {
    border: 2px solid var(--c-particle-accent4);
    box-shadow: 0 8px 32px var(--c-shadow);
  }

  .pricing-card.highlighted:hover {
    transform: translateY(-8px);
  }
  
  /* Desktop highlighted card scaling */
  @media (min-width: 1024px) {
    .pricing-card.highlighted {
      transform: scale(1.05);
      box-shadow: 0 16px 48px var(--c-shadow);
    }

    .pricing-card.highlighted:hover {
      transform: scale(1.05) translateY(-8px);
    }
  }

  .popular-badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, var(--c-particle-accent4), var(--c-particle-accent2));
    color: white;
    padding: calc(var(--s) * 0.5) var(--s);
    border-radius: var(--border-radius);
    font-size: 0.875rem;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .plan-header {
    text-align: center;
    margin-bottom: calc(var(--s) * 2);
  }

  .plan-name {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: calc(var(--s) * 0.5);
    color: var(--c-fg);
    text-shadow: var(--text-shadow);
  }

  .plan-price {
    margin-bottom: var(--s);
  }

  .price {
    font-size: 3rem;
    font-weight: 800;
    color: var(--c-particle-accent4);
    text-shadow: var(--text-shadow);
  }

  .period {
    font-size: 1rem;
    color: var(--color-theme3);
    margin-left: 0.25rem;
    text-shadow: var(--text-shadow);
  }

  .plan-description {
    color: var(--color-theme3);
    line-height: 1.5;
    margin: 0;
    text-shadow: var(--text-shadow);
  }

  .features-list {
    list-style: none;
    padding: 0;
    margin: 0 0 calc(var(--s) * 2) 0;
  }

  .feature-item {
    display: flex;
    text-align: left;
    align-items: center;
    padding: calc(var(--s) * 0.5) 0;
    color: var(--c-fg);
    font-size: 0.95rem;
    text-shadow: var(--text-shadow);
  }

  .check-icon {
    width: 20px;
    height: 20px;
    color: var(--c-particle-accent4);
    margin-right: calc(var(--s) * 0.75);
    flex-shrink: 0;
  }

  .cta-button {
    width: 100%;
    padding: calc(var(--s) * 0.875) var(--s);
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid var(--c-particle-accent4);
    color: var(--c-particle-accent4);
    border-radius: var(--border-radius);
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all var(--animation-speed-fast) var(--animation-ease);
  }

  .cta-button:hover {
    background: var(--c-particle-accent4);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }

  .cta-button.primary {
    background: linear-gradient(135deg, var(--c-particle-accent4), var(--c-particle-accent2));
    color: white;
    border-color: transparent;
  }

  .cta-button.primary:hover {
    background: linear-gradient(135deg, var(--c-particle-accent2), var(--c-particle-accent4));
    transform: translateY(-2px);
  }

  .cta-section {
    margin-top: calc(var(--s) * 6);
    width: 100%;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 var(--s);
  }

  .cta-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--border-radius-lg);
    padding: calc(var(--s) * 3);
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    text-align: center;
    
    opacity: 0;
    transform: scale(0.95) translateY(30px);
    animation: ctaAppear 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    animation-delay: 1.0s;
  }

  .cta-card h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--c-fg);
    margin-bottom: var(--s);
    text-shadow: var(--text-shadow);
  }

  .cta-card p {
    font-size: 1rem;
    color: var(--color-theme3);
    margin-bottom: calc(var(--s) * 2);
    line-height: 1.6;
  }

  .cta-buttons {
    display: flex;
    gap: var(--s);
    justify-content: center;
    flex-wrap: wrap;
  }

  .cta-primary, .cta-secondary {
    padding: calc(var(--s) * 0.875) calc(var(--s) * 1.5);
    border-radius: var(--border-radius);
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    transition: all var(--animation-speed-fast) var(--animation-ease);
  }

  .cta-primary {
    background: linear-gradient(135deg, var(--c-particle-accent4), var(--c-particle-accent2));
    color: white;
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

  /* Staggered card animations */
  .pricing-card {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
    animation: cardAppear 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }
  
  .pricing-card:nth-child(1) { animation-delay: 0.3s; }
  .pricing-card:nth-child(2) { animation-delay: 0.4s; }
  .pricing-card:nth-child(3) { animation-delay: 0.5s; }
  
  .faq-item {
    opacity: 0;
    transform: translateY(15px);
    animation: fadeInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }
  
  .faq-item:nth-child(1) { animation-delay: 0.7s; }
  .faq-item:nth-child(2) { animation-delay: 0.8s; }
  .faq-item:nth-child(3) { animation-delay: 0.9s; }
  .faq-item:nth-child(4) { animation-delay: 1.0s; }

  /* Animation keyframes */
  @keyframes pricingAppear {
    0% {
      opacity: 0;
      transform: scale(0.96) translateY(30px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
  
  @keyframes cardAppear {
    0% {
      opacity: 0;
      transform: scale(0.95) translateY(20px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
  
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(15px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes ctaAppear {
    0% {
      opacity: 0;
      transform: scale(0.95) translateY(30px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .pricing-grid {
      grid-template-columns: 1fr;
    }
    
    .pricing-card.highlighted {
      transform: none;
    }
    
    .pricing-card.highlighted:hover {
      transform: translateY(-8px);
    }
  }
</style>
