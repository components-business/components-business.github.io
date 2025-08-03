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

    <div class="contact-card phone-card">
      <div class="card-icon">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
        </svg>
      </div>
      <h3>Phone</h3>
      <p>{settings.contact.phone}</p>
      <a href="tel:{settings.contact.phone.replace(/[^\d+]/g, '')}" class="contact-cta">Call Now</a>
    </div>

    <div class="contact-card slack-card">
      <div class="card-icon">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
        </svg>
      </div>
      <h3>Slack</h3>
      <p>{settings.contact.slack}</p>
      <a href="#" class="contact-cta">Join Slack</a>
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
    animation: none;
    opacity: 1;
    transform: none;
  }

  .contact-methods {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
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
  }

  @media (min-width: 480px) {
    .methods-grid {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: calc(var(--s) * 1.5);
    }
  }

  @media (min-width: 768px) {
    .methods-grid {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: calc(var(--s) * 2);
    }
  }

  @media (min-width: 1200px) {
    .methods-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: calc(var(--s) * 2.5);
    }
  }

  .contact-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--border-radius);
    padding: calc(var(--s) * 2);
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: all var(--animation-speed-fast) var(--animation-ease);
    
    opacity: 0;
    transform: scale(0.3) rotateY(90deg);
    animation: contactCardConnect 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }

  .contact-card:hover,
  .contact-card:focus,
  .contact-card:active {
    background: rgba(255, 255, 255, 0.18);
    border-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(15px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  .contact-card:nth-child(1) { animation-delay: 0.5s; }
  .contact-card:nth-child(2) { animation-delay: 0.7s; }
  .contact-card:nth-child(3) { animation-delay: 0.9s; }

  .card-icon {
    width: 64px;
    height: 64px;
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.5), rgba(234, 88, 12, 0.5));
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto var(--s);
    color: rgba(255, 255, 255, 0.85);
    box-shadow: 0 3px 8px rgba(16, 185, 129, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .card-icon svg {
    width: 32px;
    height: 32px;
  }

  .contact-card h3 {
    font-size: 1.3rem;
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
    background: linear-gradient(135deg, var(--c-particle-accent4), var(--c-particle-accent2));
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
    margin: 0 auto;
    padding: 0 var(--s);
  }

  .info-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: calc(var(--s) * 1.5);
    margin-bottom: calc(var(--s) * 4);
    width: 100%;
  }

  @media (min-width: 600px) {
    .info-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: calc(var(--s) * 2);
    }
  }

  .info-card {
    background: rgba(255, 255, 255, 0.01);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: var(--border-radius);
    padding: calc(var(--s) * 1.5);
    backdrop-filter: blur(6px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    transition: all var(--animation-speed-fast) var(--animation-ease);
    
    opacity: 0;
    transform: scale(0.5);
    animation: infoPulseIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
  }

  .info-card:hover,
  .info-card:focus,
  .info-card:active {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(12px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
  }

  .info-card:nth-child(1) { animation-delay: 1.1s; }
  .info-card:nth-child(2) { animation-delay: 1.3s; }

  .info-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, rgba(234, 88, 12, 0.5), rgba(202, 138, 4, 0.5));
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: var(--s);
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
