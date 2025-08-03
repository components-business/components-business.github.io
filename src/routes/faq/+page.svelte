<script>
  let { data } = $props();
  const pageData = data.faqPageData;
</script>

<!-- FAQ Header -->
<div class="faq-header">
  <h1 class="page-title">{pageData.title}</h1>
  <div class="intro-card">
    <p class="intro-text">{pageData.subtitle}</p>
  </div>
</div>

<!-- FAQ Categories -->
<div class="faq-content">
  {#each pageData.categories as category, categoryIndex}
    <div class="faq-category" style="animation-delay: {(categoryIndex + 1) * 0.2}s">
      <h2 class="category-title">{category.name}</h2>
      <div class="questions-list">
        {#each category.questions as item, questionIndex}
          <div class="faq-item" style="animation-delay: {(categoryIndex + 1) * 0.2 + (questionIndex + 1) * 0.1}s">
            <h3 class="faq-question">{item.question}</h3>
            <div class="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>

<!-- Contact CTA -->
<div class="contact-cta-section">
  <div class="contact-cta-card">
    <h2>Still have questions?</h2>
    <p>Our team is here to help you find the perfect developer subscription plan for your needs.</p>
    <div class="cta-buttons">
      <a href="/contact" class="cta-primary">Contact Us</a>
      <a href="/pricing" class="cta-secondary">View Pricing</a>
    </div>
  </div>
</div>

<style>
  .faq-header {
    text-align: center;
    margin-bottom: calc(var(--s) * 4);
    width: 100%;
    max-width: 1000px;
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
    transform: translateY(-50px) rotateX(90deg);
    animation: faqTitleUnfold 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
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

  .faq-content {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 var(--s);
  }

  .faq-category {
    margin-bottom: calc(var(--s) * 4);
    
    opacity: 0;
    transform: translateX(-100px) scale(0.8);
    animation: faqCategorySlideIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }

  .category-title {
    font-size: clamp(1.3rem, 3vw, 1.8rem);
    font-weight: 700;
    color: var(--c-fg);
    margin-bottom: calc(var(--s) * 2);
    text-shadow: var(--text-shadow);
    border-bottom: 2px solid var(--c-particle-accent4);
    padding-bottom: calc(var(--s) * 0.5);
  }

  .questions-list {
    display: flex;
    flex-direction: column;
    gap: calc(var(--s) * 1.5);
  }

  .faq-item {
    background: rgba(255, 255, 255, 0.01);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: var(--border-radius);
    padding: calc(var(--s) * 1.5);
    backdrop-filter: blur(6px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: all var(--animation-speed-fast) var(--animation-ease);
    
    opacity: 0;
    transform: rotateX(-90deg);
    transform-origin: top center;
    animation: faqItemUnfold 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }

  .faq-item:hover,
  .faq-item:focus,
  .faq-item:active {
    background: rgba(255, 255, 255, 0.16);
    border-color: rgba(255, 255, 255, 0.28);
    backdrop-filter: blur(15px);
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  .faq-question {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: var(--s);
    color: var(--c-fg);
    text-shadow: var(--text-shadow);
    line-height: 1.4;
    text-align: left;
  }

  .faq-answer {
    border-left: 3px solid var(--c-particle-accent2);
    padding-left: calc(var(--s) * 1.5);
  }

  .faq-answer p {
    color: var(--color-theme3);
    line-height: 1.6;
    margin: 0;
    font-size: 0.95rem;
    text-shadow: var(--text-shadow);
    animation: none;
    opacity: 1;
    transform: none;
  }

  .contact-cta-section {
    margin-top: calc(var(--s) * 6);
    width: 100%;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 var(--s);
  }

  .contact-cta-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--border-radius-lg);
    padding: calc(var(--s) * 3);
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    /* text-align: center; */
    
    opacity: 0;
    transform: scale(0.95) translateY(30px);
    animation: ctaAppear 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    animation-delay: 1.2s;
  }

  .contact-cta-card h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--c-fg);
    margin-bottom: var(--s);
    text-shadow: var(--text-shadow);
  }

  .contact-cta-card p {
    font-size: 1rem;
    color: var(--color-theme3);
    margin-bottom: calc(var(--s) * 2);
    line-height: 1.6;
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

  /* Responsive design */
  @media (min-width: 768px) {
    .cta-buttons {
      flex-wrap: nowrap;
    }
  }

  /* Animation keyframes */
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

  @keyframes categoryAppear {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes itemAppear {
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

  /* New FAQ-themed animations */
  @keyframes faqTitleUnfold {
    0% {
      opacity: 0;
      transform: translateY(-50px) rotateX(90deg);
    }
    60% {
      transform: translateY(10px) rotateX(-10deg);
    }
    100% {
      opacity: 1;
      transform: translateY(0) rotateX(0deg);
    }
  }

  @keyframes faqCategorySlideIn {
    0% {
      opacity: 0;
      transform: translateX(-100px) scale(0.8);
    }
    70% {
      transform: translateX(10px) scale(1.02);
    }
    100% {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  @keyframes faqItemUnfold {
    0% {
      opacity: 0;
      transform: rotateX(-90deg);
    }
    50% {
      opacity: 0.7;
      transform: rotateX(10deg);
    }
    100% {
      opacity: 1;
      transform: rotateX(0deg);
    }
  }
</style>
