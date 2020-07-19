<script>
  const shoes = [
    { brand: 'Nike', name: 'Air MAX 90', year: 2010 },
    { brand: 'Nike', name: 'Air Force 1', year: 2015 },
    { brand: 'Nike', name: 'Zoom Fly 3', year: 2019 },
    { brand: 'Nike', name: 'Lebron 17 Low', year: 2020 },
    { brand: 'Nike', name: 'Pegasus 37', year: 2019 },
    { brand: 'Nike', name: 'Kiger 6', year: 2019},
    { brand: 'Adidas', name: 'Stan smith', year: 2017},
    { brand: 'Adidas', name: 'Superstar', year: 2019},
  ];
</script>

<style type="text/scss">
</style>

<div class="homepage">
  <h1>Voici les chaussures que j'ai en stock dans mon magasin : </h1>
  <ul>
    {#each shoes as {brand, name}, compteur}
      <li><b>Chaussure N°{compteur + 1 } : </b>{brand} :  {name}</li>
    {/each}
  </ul>
  <h1>Voici les chaussures de chez Nike que je propose : </h1>
  <ul>
    {#each shoes as {brand, name}, compteur}
      {#if brand === 'Nike'}
        <li><b>{name}</b></li>
      {:else if name === 'Superstar'}
        <li><b>Chaussure {brand}</b> :  {name}</li>
      {/if}
    {/each}
  </ul>
</div>

