<script>
  import Intro from "../Intro/Intro.svelte";
  import Navbar from "../Navbar/Navbar.svelte";
</script>

<style>
  .welcome {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100vh;
      background:
              linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)),
              url("https://img-16.ccm2.net/tZzRh9XOkpjdTWtpDCTs1lmHDRI=/500x/df8b52ded53f4649821c3b2813839d75/ccm-faq/photo-1486312338219-ce68d2c6f44d.jfif"),
              no-repeat;
      background-size:cover;
  }
</style>

<div class="welcome">
  <Intro/>
  <Navbar/>
</div>
