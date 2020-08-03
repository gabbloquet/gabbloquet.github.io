<script>
  import Hexagon from "./Hexagon/Hexagon.svelte";
</script>

<style lang="scss">
  @import "Navbar";
</style>

<div class="navbar">
  <div class="page-title">
    <h1> Bienvenue sur mon site Web</h1>
    <p>Quelle section vous intéresse ?</p>
  </div>
  <div class="hexagon-menu">
    <Hexagon props={{icon: 'fa-universal-access', link: 'welcome', title: 'Welcome'}}/>
    <Hexagon props={{icon: 'fa-user', link: 'description', title: 'Description'}}/>
  </div>
</div>

