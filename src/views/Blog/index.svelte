<script>
  import { link } from 'svelte-spa-router'
  import SvelteMarkdown from 'svelte-markdown'
  import { articles } from './blog.service'

  export let params = {}

  $: index = params.id ? params.id - 1 : 0
  $: articleToDisplay = articles[index]
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<article class="blog">
  <h1>Mes articles</h1>

  <nav>
    <ol>
      {#each articles as article}
        <li>
          <a href={`/blog/${article.id}`} use:link>{article.name}</a>
        </li>
      {/each}
    </ol>
  </nav>

  <a class="portfolio-link" href="/" use:link>
    <img src="/assets/img/portfolio.png" alt="My portfolio" height="60px" />
  </a>

  {#if articleToDisplay}
    <article class="article">
      <header>
        <img src={articleToDisplay.image} alt={articleToDisplay.alt} />
      </header>
      <SvelteMarkdown source={articleToDisplay.content} />
      <footer>
        Pour que je m'améliore et vous propose un contenu toujours plus qualitatif, n'hésitez pas à me <a
          href="mailto:gabbloquet@hotmail.fr">faire un feedback !</a
        >
      </footer>
    </article>
  {/if}
</article>

<style lang="scss">
  @import 'blog.scss';
</style>
