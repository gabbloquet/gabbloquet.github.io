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
      Développeur passionné et coach craft, je suis dédié à la création de solutions performantes, pensées pour
      optimiser l'expérience utilisateur.
    </p>
    <p class="little-description">
      Mon approche vise à aider les équipes à maximiser leur capacité à délivrer de la valeur durablement : réduire les
      bugs, se concentrer sur l'essentiel, et développer des produits robustes. J'accompagne mes clients dans l'adoption
      d'une véritable agilité technique, en améliorant la qualité et l'efficacité de leurs processus de développement.
    </p>
  </div>
</section>

<nav>
  <a href="/blog" use:link>Mon BLOG</a>
</nav>

<style lang="scss">
  @import 'intro';
</style>
