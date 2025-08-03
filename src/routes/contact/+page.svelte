<script>
  import settings from '../../lib/content/settings.json';
  let { data } = $props();
  const pageData = data.contactPageData;
</script>

<!-- Contact Header -->
<div class="contact-header">
  <h1 class="page-title">{pageData.title}</h1>
  <div class="intro-card">
    <p class="intro-text">{pageData.blocks[0]?.content}</p>
  </div>
</div>

<!-- Contact Methods -->
<div class="contact-methods">
  <h2>Get In Touch</h2>
  <div class="methods-grid">
    <div class="contact-card email-card">
      <div class="card-icon">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,5.11 21.1,4 20,4Z"/>
        </svg>
      </div>
      <h3>Email</h3>
      <p>{settings.contact.email}</p>
      <a href="mailto:{settings.contact.email}" class="contact-cta">Send Email</a>
    </div>

    <div class="contact-card matrix-card">
      <div class="card-icon">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.75 15.5h-3.5v-3.5h3.5v3.5zm-3.5-4.5h-3.5v-3.5h3.5v3.5zm-4.5 0h-3.5v-3.5h3.5v3.5zm0 4.5h-3.5v-3.5h3.5v3.5z"/>
        </svg>
      </div>
      <h3>Matrix</h3>
      <p>@team:components.business</p>
      <a href="https://matrix.to/#/@team:components.business" class="contact-cta">Matrix Chat</a>
    </div>
  </div>
</div>

<!-- Quick Info Cards -->
<div class="info-section">
  <div class="info-grid">
    <div class="info-card response-card">
      <div class="info-icon">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/>
        </svg>
      </div>
      <h4>Response Time</h4>
      <p>{settings.contact.responseTime}</p>
    </div>

    <div class="info-card onboarding-card">
      <div class="info-icon">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"/>
        </svg>
      </div>
      <h4>Onboarding</h4>
      <p>{settings.contact.onboarding}</p>
    </div>
  </div>
</div>

<!-- Call to Action -->
{#if pageData.blocks[6]?.content}
  <div class="cta-section">
    <div class="cta-card">
      <h3>Ready to Get Started?</h3>
      <p>{pageData.blocks[6].content}</p>
      <div class="cta-buttons">
        <a href="/pricing" class="cta-primary">View Pricing</a>
        <a href="mailto:{settings.contact.email}" class="cta-secondary">Schedule Call</a>
      </div>
    </div>
  </div>
{/if}

<style>
  .contact-header {
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
    transform: scale(0.8) rotate(-2deg);
    animation: contactTitleEntry 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    animation-delay: 0.1s;
  }

  .intro-card {
    background: var(--c-surface);
    border: 1px solid var(--c-border-glass);
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
    animation: none;
    opacity: 1;
    transform: none;
  }

  .contact-methods {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto; /* Center the section */
    padding: 0 var(--s);
  }

  .contact-methods h2 {
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

  .methods-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: calc(var(--s) * 1.5);
    margin-bottom: calc(var(--s) * 4);
    width: 100%;
    justify-items: center; /* Center grid items horizontally */
    justify-content: center; /* Center the grid itself */
  }

  .contact-card {
    display: flex;
    align-items: center;
    jusitfy-content: center;
    flex-wrap: wrap;
    gap: var(--s);
    background: var(--c-surface); /* Use a more opaque surface variable */
    border: 1px solid var(--c-border-glass); /* Use border glass variable */
    border-radius: var(--border-radius);
    padding: calc(var(--s) * 2);
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    text-align: center; /* Center text */
    transition: all var(--animation-speed-fast) var(--animation-ease);
    
    opacity: 0;
    transform: scale(0.3) rotateY(90deg);
    animation: contactCardConnect 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    h3, p {
      margin: 0;
    }
    a {
      flex-grow: 1;
      width: 100%;
    }
    p {
      flex-grow: 1;
      text-align: center;
    }
  }

  .contact-card:hover,
  .contact-card:focus,
  .contact-card:active {
    background: var(--c-surface-hover); /* Use hover surface variable */
    border-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(15px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  .contact-card:nth-child(1) { animation-delay: 0.5s; }
  .contact-card:nth-child(2) { animation-delay: 0.7s; }

  .card-icon {
    width: calc(var(--s) * 4);
    height: calc(var(--s) * 4);
    border-radius: var(--border-radius);
    display: none;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.85);
    box-shadow: 0 3px 8px rgba(16, 185, 129, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .card-icon svg {
    width: 32px;
    height: 32px;
  }

  .contact-card h3 {
    font-size: 1rem;
    text-transform: lowercase;
    font-weight: 600;
    color: var(--c-fg);
    margin-bottom: var(--s);
    text-shadow: var(--text-shadow);
  }

  .contact-card p {
    font-size: 0.95rem;
    color: var(--color-theme3);
    margin-bottom: calc(var(--s) * 1.5);
    animation: none;
    opacity: 1;
    transform: none;
  }

  .contact-cta {
    display: inline-block;
    padding: calc(var(--s) * 0.75) calc(var(--s) * 1.5);
    border: 1px solid var(--c-fg);
    color: white;
    text-decoration: none;
    border-radius: var(--border-radius);
    font-weight: 600;
    font-size: 0.9rem;
    transition: all var(--animation-speed-fast) var(--animation-ease);
  }

  .contact-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
  }

  .info-section {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto; /* Center the section */
    padding: 0 var(--s);
  }

  .info-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: calc(var(--s) * 1.5);
    margin-bottom: calc(var(--s) * 4);
    width: 100%;
    justify-items: center; /* Center grid items horizontally */
    justify-content: center; /* Center the grid itself */
  }

  @media (min-width: 600px) {
    .info-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: calc(var(--s) * 2);
      justify-content: center; /* Center the grid itself */
    }
  }

  .info-card {
    background: var(--c-surface); /* Use a more opaque surface variable */
    border: 1px solid var(--c-border-glass); /* Use border glass variable */
    border-radius: var(--border-radius);
    padding: calc(var(--s) * 1.5);
    backdrop-filter: blur(6px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column; /* Arrange content vertically */
    align-items: center; /* Center items horizontally */
    text-align: center; /* Center text */
    transition: all var(--animation-speed-fast) var(--animation-ease);
    
    opacity: 0;
    transform: scale(0.5);
    animation: infoPulseIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
  }

  .info-card:hover,
  .info-card:focus,
  .info-card:active {
    background: var(--c-surface-hover); /* Use hover surface variable */
    border-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(12px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
  }

  .info-card:nth-child(1) { animation-delay: 1.1s; }
  .info-card:nth-child(2) { animation-delay: 1.3s; }

  .info-icon {
    width: calc(var(--s) * 4);
    height: calc(var(--s) * 4);
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto var(--s); /* Centered horizontally */
    color: rgba(255, 255, 255, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .info-icon svg {
    width: 24px;
    height: 24px;
  }

  .info-card h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--c-fg);
    margin: 0 0 calc(var(--s) * 0.25) 0;
    text-shadow: var(--text-shadow);
  }

  .info-card p {
    font-size: 0.9rem;
    color: var(--color-theme3);
    margin: 0;
    animation: none;
    opacity: 1;
    transform: none;
  }

  .cta-section {
    margin-top: calc(var(--s) * 3);
    width: 100%;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 var(--s);
  }

  .cta-card {
    background: var(--c-surface); /* Use a more opaque surface variable */
    border: 1px solid var(--c-border-glass); /* Use border glass variable */
    border-radius: var(--border-radius-lg);
    padding: calc(var(--s) * 3);
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    text-align: center;
    
    opacity: 0;
    transform: scale(0.95) translateY(30px);
    animation: ctaAppear 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    animation-delay: 1.1s;
  }

  .cta-card h3 {
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
    animation: none;
    opacity: 1;
    transform: none;
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

  @keyframes cardAppear {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    0% {
      opacity: 0;
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
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

  /* New Contact-themed animations */
  @keyframes contactTitleEntry {
    0% {
      opacity: 0;
      transform: scale(0.8) rotate(-2deg);
    }
    60% {
      transform: scale(1.05) rotate(1deg);
    }
    100% {
      opacity: 1;
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes contactCardConnect {
    0% {
      opacity: 0;
      transform: scale(0.3) rotateY(90deg);
    }
    50% {
      opacity: 0.7;
      transform: scale(1.1) rotateY(45deg);
    }
    100% {
      opacity: 1;
      transform: scale(1) rotateY(0deg);
    }
  }

  @keyframes infoPulseIn {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
</style>
