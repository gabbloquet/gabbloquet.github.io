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

<style>
</style>

<h1>Bienvenue sur le site personnel de {name}</h1>
<button on:click={incrementer}> Cliquez ici pour incrementer</button>
<p>Etat de mon compteur : {compteur}</p>
<p>Double de mon compteur : {double}</p>
<p>Double de mon compteur : {quadruple}</p>
