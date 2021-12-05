<script>
  import { link } from 'svelte-spa-router'
</script>

<nav>
  <a href="/blog" use:link>
    <img src="/assets/img/blog.png" alt="blog" height="100px" />
  </a>
</nav>

<style lang="scss">
  @import 'navigation';
</style>
