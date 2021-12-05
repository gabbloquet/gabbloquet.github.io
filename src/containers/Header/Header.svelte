<script>
  import Intro from "./Intro/Intro.svelte";
  import Navbar from "./Navbar/Navbar.svelte";
  import Navigation from "./Navigation/Navigation.svelte";
</script>

<style lang="scss">
  @import "header";
</style>

<header>
  <Navigation />
  <Intro/>
  <Navbar/>
</header>
