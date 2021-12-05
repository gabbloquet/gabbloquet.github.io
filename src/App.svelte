<script>
  import Router from 'svelte-spa-router'
  import Home from './views/Home.svelte'
  import Blog from './views/Blog/index.svelte'
  import NotFound from './views/NotFound.svelte'

  const routes = {
    '/': Home,
    '/blog': Blog,
    '/blog/:id': Blog,
    '*': NotFound,
  }
</script>

<Router {routes} />
