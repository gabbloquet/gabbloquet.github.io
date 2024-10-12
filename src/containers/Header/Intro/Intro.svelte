<script>
  import { link } from 'svelte-spa-router'
  import Typed from 'typed.js'
  import { beforeUpdate, tick } from 'svelte'

  beforeUpdate(async () => {
    await tick()
    const typed = new Typed('.typing', {
      strings: ['Crafter', 'Coach', 'Speaker', 'Developer'],
      typeSpeed: 80,
      backSpeed: 40,
      loop: true,
    })
  })
</script>

<section class="intro">
  <img alt="Gabin Bloquet" src="./assets/img/me.png" />
  <div class="informations">
    <div class="name">
      <h1 class="main-title">Gabin Bloquet</h1>
      <h2 class="typing"></h2>
    </div>
    <p class="little-description">
      <b>Coach craft et développeur passionné</b>, j'accompagne les équipes tech dans l'adoption de pratiques de
      développement durable (craftsmanship) à travers des <b>formations et coachings</b> centrés sur les pratiques de ce
      mouvement (TDD, Clean code, architecture hexagonale...) et plus.
    </p>
    <p class="little-description">
      Mon approche aide les équipes à <b>livrer de la valeur durablement</b> en se concentrant sur la réduction des
      bugs, la création de produits robustes et l'optimisation des processus. J'accompagne mes clients dans l'adoption
      d'une agilité technique qui garantit <b>qualité et efficacité à long terme</b>.
    </p>
  </div>
</section>

<nav>
  <a href="/blog" use:link>Mon BLOG</a>
</nav>

<style lang="scss">
  @import 'intro';
</style>
