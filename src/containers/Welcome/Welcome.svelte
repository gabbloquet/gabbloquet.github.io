<script>
  import Intro from "../Intro/Intro.svelte";
  import Navbar from "../Navbar/Navbar.svelte";
</script>

<style>
  .welcome {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: black;
      height: 100vh;
      /*background-image: url("https://cdn.futura-sciences.com/buildsv6/images/wide1920/a/0/a/a0a74adca1_50147933_developpeur-web1.jpg");*/
      /*filter: brightness(50%);*/
      /*-webkit-filter: brightness(50%);*/
  }
</style>

<div class="welcome">
  <Intro/>
  <Navbar/>
</div>
