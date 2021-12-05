<script>
  import Welcome from "./Welcome/Welcome.svelte";
  import News from "./News/News.svelte";
  import Description from "./Description/Description.svelte";
  import Skills from "./Skills/Skills.svelte";
  import Experiences from "./Experiences/Experiences.svelte";
</script>

<style lang="scss">
  .content {
    display: flex;
    flex-direction: column;
  }
</style>

<main class="content">
  <Welcome/>
  <News/>
  <Description/>
  <Skills/>
  <Experiences/>
</main>
