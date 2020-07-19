<script>
  let compteur = 0;
  let double = 0;
  let quadruple = 0;
  export let name;

  function incrementer() {
    compteur++;
  }

  $: double = compteur * 2;
  $: quadruple = double * 2;
</script>

<style type="text/scss">
  @import "styles/colors";

  .homepage {
    background-color: lightgrey;
    h1 {
      color: $BLUE;
    }
  }
</style>

<div class="homepage">
  <h1>Bienvenue sur le site personnel de {name}</h1>
  <button on:click={incrementer}> Cliquez ici pour incrementer</button>
  <p>Etat de mon compteur : {compteur}</p>
  <p>Double de mon compteur : {double}</p>
  <p>Double de mon compteur : {quadruple}</p>
</div>

