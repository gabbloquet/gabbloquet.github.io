<script>
  import AdeoLogo from './AdeoLogo.svelte'
  import ExotecLogo from './ExotecLogo.svelte'
  const age = new Date(new Date() - new Date('11/24/1995')).getFullYear() - 1970
</script>

<section class="white-card" id="description">
  <div class="description">
    <div class="center-elements header">
      <p class="center-content">
        Gabin Bloquet, {age} ans, actuellement Senior Software Engineer chez <AdeoLogo />
      </p>
      <p>Mais aussi sportif, musicien & avide de connaissances.</p>
    </div>
    <div class="line-with-space">
      <div class="tech">
        <h2>#Tech 💻</h2>
        <p>
          La notion de <b>Software engineer</b> est selon moi celle qui représente de manière la plus juste mon impact
          au sein des équipes avec lesquelles je collabore. Largement inspiré du mouvement <b>Software Craftsmanship</b>
          :
          <b>professionalisme, pragmatisme et fierté</b>. En quelques mots mon ambition est de voir au delà d'une
          technologie ou d'un spectre de compétences. Etre en capacité de produire du code de qualité (Maintenable,
          extensible, facilement compréhensible) quelque soit le domaine. Ma première expérience m'a permise de parfaire
          mes compétences dans les domaines du front et du back, et depuis je poursuis cette voie en poussant même vers
          l'ops, l'infrastructure... Tout en gardant constamment à l'esprit le sens ce ce que nous faisons : répondre à
          des problématiques métiers.
          <i
            >Comment puis-je, grâce à l'outil informatique, améliorer le quotidien de mes utilisateurs, leur faire
            gagner du temps, leur faciliter la vie ?</i
          >
        </p>
        <p>
          C'est donc tout naturellement que je me suis rapproché du monde du <b>front</b>, car un
          <b>confort d'utilisation</b>
          passe par une <b>interface ergonomique, accessible, simple d'utilisation et de prise en main</b>. Je me
          définirais donc comme un profil proche des utilisateurs (User Centric).
        </p>
      </div>
      <div class="sport">
        <h2>#Sport 🏃‍🚴🎾🏓⚽🏀</h2>
        <p>
          J'aime beaucoup le sport, j'en pratique presque quotidiennement. J'ai commencé le sport par le <b>tennis</b>,
          je me suis ensuite essayé à des sports collectifs comme le <b>football et le basketball</b>. De manière
          autodidacte je me suis lancé dans la course à pied et le cyclisme. Avec un ami à la fac j'ai aussi pratiqué le
          <b>tennis de table</b> avec les compétitions universitaires puis en club.
        </p>
        <p>
          Aujourd'hui les sports que je pratique le plus sont la <b>course à pied et le cyclisme</b>, avec des sessions
          de sports de raquette ou de football de temps en temps...
        </p>
      </div>
    </div>
    <div class="line-with-space">
      <div class="musique">
        <h2>#Musique 🎶🎸</h2>
        <p>
          La musique elle aussi est une grande passion, j'ai fait <b>10 années en école de musique</b> pour la
          comprendre. Je joue de la <b>guitare, classique et électrique</b>. De la même manière que le sport, la musique
          est selon moi un moyen d'expression et d'évasion. Aujourd'hui, j'essaie d'en faire de manière hebdomadaire.
        </p>
      </div>
      <div class="culture">
        <h2>#Culture 📚</h2>
        <p>
          J'aime <b>apprendre et comprendre</b>. Comprendre le monde dans lequel je vis, de me forger une opinion sur
          tout type de sujets. J'aime les longues après-midi de discussion avec mes amis à refaire le monde.
        </p>
        <p>
          Je m'interesse à <b>l'histoire, à l'économie, à la politique, à la science, à la théologie</b>... Et ce que
          j'aime par dessus tout est l'échange et la confrontation des idées.
        </p>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import 'src/styles/global';
  @import 'description';
</style>
