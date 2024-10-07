<script>
  import News from './News/News.svelte'
  import Description from './Description/Description.svelte'
  import Skills from './Skills/Skills.svelte'
  import Experiences from './Experiences/Experiences.svelte'
</script>

<main class="content">
  <News />
  <Description />
  <Skills />
  <Experiences />
</main>

<style lang="scss">
  .content {
    display: flex;
    flex-direction: column;
  }
</style>
