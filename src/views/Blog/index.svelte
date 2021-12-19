<script>
  import { link } from 'svelte-spa-router'
  import SvelteMarkdown from 'svelte-markdown'
  import { articles } from './blog.service'

  export let params = {}

  $: index = params.id ? params.id- 1 : 0;
  $: articleToDisplay = articles[index];
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

  {#if articleToDisplay}
    <article class='article'>
      <header>
        <img src={articleToDisplay.image} alt={articleToDisplay.alt} />
      </header>
      <SvelteMarkdown source={articleToDisplay.content} />
    </article>
  {/if}
</article>

<style lang="scss">
  @import 'blog.scss';
</style>
