<script>
  import Description from "./Description/Description.svelte";
  import Welcome from "./Welcome/Welcome.svelte";
  import Skills from "./Skills/Skills.svelte";
  import Experiences from "./Experiences/Experiences.svelte";
  import Contact from "./Contact/Contact.svelte";
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
  }
</style>

<div class="content">
  <Welcome/>
  <Description/>
  <Skills/>
  <Experiences/>
  <Contact/>
</div>
