<script>
  import { sceneStore } from '../../lib/stores/sceneStore';
  import { onMount, onDestroy } from 'svelte';

  $effect(() => {
    sceneStore.update(store => ({
      ...store,
      centralStructureTargetPosition: [0, 0, 0],
      centralStructureTargetRotation: [0, 0, 0],
      componentSpawnRate: 30,
      componentSpeed: 0.03,
      sceneState: 'careers', // New scene state for careers page
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

<div class="careers-container">
  <header class="careers-header">
    <h1>Join Our Team</h1>
    <p class="subtitle">We're looking for visionary builders.</p>
  </header>

  <section class="careers-intro">
    <p>Are you a passionate builder with a strong system vision and an architectural mindset? Do you thrive on creating robust, scalable, and innovative solutions?</p>
    <p>At Components Business, we believe in crafting elegant systems from the ground up. We're seeking talented individuals from *every field* who possess a societal change perspective and are driven to build the societies of tomorrow, today.</p>
    <p>We believe that true innovation comes from diverse perspectives and a shared commitment to making a meaningful impact. If you're ready to apply your skills to challenges that matter and contribute to a better future, you've found your place.</p>
  </section>

  <section class="careers-roles">
    <h2>What We Look For</h2>
    <ul>
      <li><strong>System Vision:</strong> The ability to see the big picture, understand how different components interact, and anticipate future needs.</li>
      <li><strong>Architectural Mindset:</strong> A knack for designing scalable, maintainable, and performant software architectures.</li>
      <li><strong>Problem Solvers:</strong> Individuals who enjoy tackling complex challenges and finding creative solutions.</li>
      <li><strong>Collaborative Spirit:</strong> Team players who communicate effectively and contribute to a positive work environment.</li>
      <li><strong>Continuous Learners:</strong> A desire to stay updated with the latest technologies and best practices.</li>
    </ul>
  </section>

  <section class="careers-benefits">
    <h2>What We Provide</h2>
    <ul>
      <li><strong>Global Opportunities:</strong> We hire talented individuals from around the world, fostering a truly diverse and inclusive team.</li>
      <li><strong>Comprehensive Social Healthcare:</strong> Full social healthcare coverage for you and your family, ensuring peace of mind.</li>
      <li><strong>Equal Salary for All Positions:</strong> We believe in true equity. All positions, regardless of title or department, receive the same base salary. Progression in compensation is tied directly to demonstrated skills and experience, much like a transparent pricing model where value increases with capability, not hierarchy. This ensures fairness and rewards individual growth.</li>
      <li><strong>Investment in Infrastructure:</strong> 100% investment in building our own sustainable infrastructure, including housing constructed from ecological materials.</li>
      <li><strong>Craftsmanship Focus:</strong> We value and cultivate a culture of craftsmanship, where quality, thoughtful design, and long-term vision are paramount.</li>
    </ul>
  </section>

  <section class="careers-cta">
    <h2>Ready to Build the Future?</h2>
    <p>If you're excited about shaping the future of technology with a focus on solid foundations and innovative design, we want to hear from you.</p>
    <a href="/contact" class="cta-button primary">Explore Opportunities</a>
  </section>
</div>

<style>
  .careers-container {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
    opacity: 0;
    transform: scale(0.96) translateY(30px);
    animation: careersAppear 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    animation-delay: 0.1s;
  }

  .careers-header h1 {
    font-size: clamp(2rem, 6vw, 3.5rem);
    font-weight: 800;
    color: var(--c-fg);
    text-shadow: var(--text-shadow);
    margin-bottom: calc(var(--s) * 2);
  }

  .careers-header .subtitle {
    text-align: center;
    font-size: 1.2rem;
    color: var(--color-theme3);
    margin-top: calc(var(--s) * -1);
    font-weight: 400;
    text-shadow: var(--text-shadow);
  }

  .careers-intro {
    margin-top: calc(var(--s) * 3);
  }

  .careers-roles h2,
  .careers-cta h2 {
    font-weight: 700;
    color: var(--c-fg);
    margin-top: calc(var(--s) * 3);
    margin-bottom: calc(var(--s) * 1.5);
    text-shadow: var(--text-shadow);
  }

  .careers-roles ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    max-width: 600px;
  }

  .careers-roles li,
  .careers-benefits li {
    background: var(--c-surface-glass);
    border: 1px solid var(--c-border-glass);
    border-radius: var(--border-radius-lg);
    padding: calc(var(--s) * 1.5);
    margin-bottom: var(--s);
    text-align: left;
    color: var(--c-fg);
    font-size: 1.05rem;
    line-height: 1.6;
    box-shadow: 0 4px 16px var(--c-shadow);
    transition: all var(--animation-speed-fast) var(--animation-ease);
    backdrop-filter: blur(8px);
    opacity: 0;
    transform: translateY(20px);
    animation: listItemAppear 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }

  .careers-roles li:nth-child(1) { animation-delay: 0.3s; }
  .careers-roles li:nth-child(2) { animation-delay: 0.4s; }
  .careers-roles li:nth-child(3) { animation-delay: 0.5s; }
  .careers-roles li:nth-child(4) { animation-delay: 0.6s; }
  .careers-roles li:nth-child(5) { animation-delay: 0.7s; }

  .careers-benefits li:nth-child(1) { animation-delay: 0.8s; }
  .careers-benefits li:nth-child(2) { animation-delay: 0.9s; }
  .careers-benefits li:nth-child(3) { animation-delay: 1.0s; }
  .careers-benefits li:nth-child(4) { animation-delay: 1.1s; }
  .careers-benefits li:nth-child(5) { animation-delay: 1.2s; }

  .careers-roles li:hover,
  .careers-benefits li:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    border-color: var(--c-particle-accent2);
    background: rgba(255, 255, 255, 0.05);
  }
  .careers-benefits {
    ul {
      text-align: left;
      list-style: none;
      margin: 0;
      padding: 0;
    }
  }

  .cta-button {
    display: inline-block;
    padding: calc(var(--s) * 0.875) calc(var(--s) * 1.5);
    border-radius: var(--border-radius);
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    transition: all var(--animation-speed-fast) var(--animation-ease);
    margin-top: calc(var(--s) * 2);
  }

  .cta-button.primary {
    background: linear-gradient(135deg, var(--c-particle-accent4), var(--c-particle-accent2));
    color: white;
    border: none;
  }

  .cta-button.primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(16, 185, 129, 0.4);
  }

  @keyframes careersAppear {
    0% {
      opacity: 0;
      transform: scale(0.96) translateY(30px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  @keyframes listItemAppear {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
