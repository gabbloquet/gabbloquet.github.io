<script>
  import { link } from 'svelte-spa-router'
  import SvelteMarkdown from 'svelte-markdown'
  import { articles } from './blog.service'

  export let params = {}

  $: index = params.id - 1
  $: articleToDisplay = articles[index].content
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<article class="blog">
  <h1>Mes articles</h1>

  <header>
    {#each articles as article}
      <li>
        <a href={`/blog/${article.id}`} use:link>{article.name}</a>
      </li>
    {/each}
  </header>

  {#if articleToDisplay}
    <SvelteMarkdown source={articleToDisplay} />
  {/if}
</article>

<style lang="scss">
  @import 'blog.scss';
</style>
