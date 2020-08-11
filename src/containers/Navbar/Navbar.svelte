<script>
  import Hexagon from "./Hexagon/Hexagon.svelte";
</script>

<div class="navbar">
  <div class="hexagon-menu">
    <Hexagon props={{icon: 'fa-universal-access', link: 'welcome', title: 'Welcome'}}/>
    <Hexagon props={{icon: 'fa-user', link: 'description', title: 'Description'}}/>
  </div>
</div>

