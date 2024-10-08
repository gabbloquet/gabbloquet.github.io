<script>
  import Router from 'svelte-spa-router'
  import Home from './views/Home.svelte'
  import Blog from './views/Blog/index.svelte'
  import NotFound from './views/NotFound.svelte'
  import { onMount } from 'svelte'

  onMount(() => {
    // Créer l'élément noscript
    const noscriptTag = document.createElement('noscript')

    // Créer l'élément iframe à l'intérieur de noscript
    const iframeTag = document.createElement('iframe')
    iframeTag.src = 'https://www.googletagmanager.com/ns.html?id=GTM-WB8PBSXT'
    iframeTag.height = '0'
    iframeTag.width = '0'
    iframeTag.style.display = 'none'
    iframeTag.style.visibility = 'hidden'

    // Ajouter l'iframe à l'intérieur du noscript
    noscriptTag.appendChild(iframeTag)

    // Ajouter l'élément noscript au body
    document.body.appendChild(noscriptTag)
  })

  const routes = {
    '/': Home,
    '/blog': Blog,
    '/blog/:id': Blog,
    '*': NotFound,
  }
</script>

<Router {routes} />
