<script>
  import settings from "$lib/content/settings.json"
</script>

<menu>
  <ul>
    <li>
      <a href="/">
        {settings.title}
      </a>
    </li>
    <li>
      <a href="/about">
        About
      </a>
    </li>
    <li>
      <a href="/contact">
        Contact
      </a>
    </li>
  </ul>
</menu>

<style>
  menu, ul {
    padding: 0;
    margin: 0;
  }
  ul {
    display: flex;
    overflow-x: auto;
  }
  a {
    display: inline-flex;
    padding: var(--s);
    text-transform: lowercase;
  }
</style>
