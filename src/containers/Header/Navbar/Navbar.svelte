<script>
  import Hexagon from './Hexagon/Hexagon.svelte'
  import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
  import { faNewspaper } from '@fortawesome/free-solid-svg-icons/faNewspaper'
  import { faDoorOpen } from '@fortawesome/free-solid-svg-icons/faDoorOpen'
  import { faLaptop } from '@fortawesome/free-solid-svg-icons/faLaptop'
  import { faClipboard } from '@fortawesome/free-solid-svg-icons/faClipboard'
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
</script>

<section class="navbar">
  <div class="hexagon-menu">
    <Hexagon props={{ icon: faDoorOpen, link: '#welcome', title: 'Bienvenue' }} />
    <Hexagon props={{ icon: faNewspaper, link: '#news', title: 'Actualité' }} />
    <Hexagon props={{ icon: faUser, link: '#description', title: 'Description' }} />
    <Hexagon props={{ icon: faLaptop, link: '#skills', title: 'Compétences' }} />
    <Hexagon props={{ icon: faClipboard, link: '#experiences', title: 'Expériences' }} />
    <Hexagon props={{ icon: faEnvelope, link: '#networks', title: 'Contact' }} />
  </div>
</section>

<style lang="scss">
  @import 'navbar';
</style>
