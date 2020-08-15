<script>
  import Description from "./Description/Description.svelte";
  import Welcome from "./Welcome/Welcome.svelte";
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
</div>
