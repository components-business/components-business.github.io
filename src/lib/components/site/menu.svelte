<script>
  import settings from "$lib/content/settings.json"
  import { page } from '$app/stores';
</script>

<menu>
  <div class="menu-container">
    <ul>
      <li>
        <a href="/" class:active={$page.url.pathname === '/'}>
          {settings.title}
        </a>
      </li>
      <li>
        <a href="/about" class:active={$page.url.pathname === '/about'}>
          About
        </a>
      </li>
      <li>
        <a href="/pricing" class:active={$page.url.pathname === '/pricing'}>
          Pricing
        </a>
      </li>
      <li>
        <a href="/faq" class:active={$page.url.pathname === '/faq'}>
          FAQ
        </a>
      </li>
      <li>
        <a href="/contact" class:active={$page.url.pathname === '/contact'}>
          Contact
        </a>
      </li>
      <li>
        <a href="/careers" class:active={$page.url.pathname === '/careers'}>
          Careers
        </a>
      </li>
    </ul>
  </div>
</menu>

<style>
  menu {
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
    width: 100%;
  }
  
  .menu-container {
    display: flex;
    justify-content: center;
    max-width: 1200px;
    width: 100%;
  }
  
  ul {
    list-style: none;
    display: flex;
    overflow-x: auto;
    background: var(--c-menu-bg);
    backdrop-filter: blur(15px);
    border-radius: var(--border-radius);
    box-shadow: 0 4px 20px var(--c-shadow);
    margin: 0;
    padding: 0.3rem;
    border: 1px solid var(--c-border-glass);
    gap: 0.25rem;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE/Edge */
    width: fit-content;
  }
  
  ul::-webkit-scrollbar {
    display: none; /* Chrome/Safari */
  }
  a {
    display: inline-flex;
    align-items: center;
    padding: calc(var(--s) * 0.6) calc(var(--s) * 0.8);
    text-transform: capitalize;
    text-decoration: none;
    border-radius: var(--border-radius-sm);
    font-weight: 500;
    font-size: 0.9rem;
    transition: all var(--animation-speed-fast) var(--animation-ease);
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    color: var(--c-fg);
    text-shadow: var(--text-shadow);
  }
  
  a:hover {
    background: var(--c-surface-hover);
    transform: translateY(-1px);
    box-shadow: 0 2px 8px var(--c-shadow);
  }
  
  /* Tablet menu styles */
  @media (min-width: 768px) {
    ul {
      backdrop-filter: blur(15px);
      box-shadow: 0 4px 20px var(--c-shadow);
      padding: 0.25rem;
    }
    
    a {
      padding: calc(var(--s) * 0.75) var(--s);
      font-size: 1rem;
    }
  }
  a:active {
    transform: translateY(0);
  }
  a::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
    transition: left 0.5s;
  }
  a:hover::before {
    left: 100%;
  }
  
  /* Active page styling with orange color */
  a.active {
    background: var(--color-accent2);
    color: white;
    font-weight: 600;
    box-shadow: 0 3px 12px rgba(234, 88, 12, 0.4);
  }
  
  a.active:hover {
    background: var(--color-accent2);
    color: white;
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(234, 88, 12, 0.5);
  }
</style>
