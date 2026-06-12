import {Award, Briefcase, Calendar, Download, GraduationCap, MapPin} from 'lucide-react';

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };
  const experiences = [
    {
      title: "Chief Technical Officer",
      company: "LEGIPILOT",
      location: "Remote",
      period: "Juin 2025 - Aujourd'hui",
      description: "CTO as a Service pour cette plateforme d'assistance juridique intelligente destinée aux RH et dirigeants de TPE/PME. J'ai développé entièrement le MVP puis structuré l'équipe technique.",
      achievements: [
        "Développement du MVP : Conception et implémentation de la plateforme, de l'architecture au déploiement.",
        "Management d'équipe : Encadrement et montée en compétences des développeurs, organisation du travail et rituels agiles.",
        "Architecture & Stratégie technique : Définition des choix technologiques, patterns d'architecture et roadmap technique.",
        "Code Reviews & Qualité : Mise en place des standards de qualité, revues de code systématiques et bonnes pratiques craft.",
        "Développement des briques critiques : Implémentation des fonctionnalités stratégiques et complexes de la plateforme.",
      ]
    },
    {
      title: "Cofondateur & CTPO",
      company: "JUSTIANA",
      location: "Remote",
      period: "Novembre 2024 - Aujourd'hui",
      description: "Je suis en charge de la stratégie produit, de l'expérience utilisateur et du développement technologique de notre solution SaaS dédiée aux élus de CSE. Mes missions principales sont :",
      achievements: [
        "Vision & Stratégie Produit : Définir et piloter la roadmap produit en adéquation avec les besoins des utilisateurs et les tendances du marché.",
        "Expérience Utilisateur (UX/UI) : Concevoir une interface intuitive et efficace pour améliorer l'engagement et la satisfaction des clients.",
        "Développement & Technologie : Superviser l'architecture technique et garantir la robustesse, la scalabilité et la sécurité de la plateforme.",
        "Collaboration & Leadership : Travailler en étroite collaboration avec les élus de CSE, le marketing et le business pour assurer une croissance rapide et durable.",
        "Optimisation & Performance : Mettre en place des processus et outils pour accélérer le développement et améliorer l'efficacité des équipes techniques.",
      ]
    },
    {
      title: "Senior Software Engineer",
      company: "Decathlon",
      location: "Villeneuve d'Ascq",
      period: "Octobre 2023 - Novembre 2024",
      description: "Ma mission était de développer, d'optimiser, et de reconcevoir l'architecture des systèmes de gestion de location (RMS) et d'exposition des offres. D'accompagner l'équipe pré-paiement sur les bonnes pratiques et l'architecture, en mettant toujours l'accent sur la qualité et le software craftsmanship.",
      achievements: [
        "Développement du Rental Management System et des outils d'exposition des offres, fournissant une solution de haute qualité pour la location de produits.",
        "Intégration de standards de développement élevés pour garantir la robustesse et la maintenabilité des solutions.",
        "Soutien sur les aspects de qualité, d'architecture et de bonnes pratiques, contribuant à l'amélioration continue des processus."
      ]
    },
    {
      title: "Senior Software Engineer",
      company: 'Adeo',
      location: "Lille",
      period: "Juillet 2022 - Octobre 2023",
      description: "Ma mission était de développer et d'améliorer les configurateurs de produits sur mesure, notamment pour les volets roulants et les portes d'entrée, en tant que Software Engineer orienté craftsmanship.",
      achievements: [
        "Création et optimisation d'outils permettant aux clients et conseillers de personnaliser des produits complexes en ligne.",
        "Contribution à la qualité et à la maintenabilité du code des configurateurs.",
        "Animation technique du domaine des configurateurs grace à la mise en place de réunions synchronisation inter-équipes."
      ]
    },
    {
      title: "Developer Advocate",
      company: "Adeo",
      location: "Lille",
      period: "Juillet 2022 - Octobre 2022",
      description: "Ma mission était de transformer l'expérience des développeurs en rendant Adeo plus attrayant, en promouvant les pratiques d'open et inner source, et en facilitant le partage de connaissances via des événements et communications techniques",
      achievements: [
        "Contribution à rendre les outils et l'environnement de développement exceptionnels et source de fierté pour les ingénieurs d'Adeo.",
        "Implémentation et diffusion des principes de l'open et de l'inner source au sein du groupe.",
        "Aide aux développeurs pour communiquer leurs travaux (articles, conférences) et organisation d'événements majeurs comme l'Adeo Dev Summit."
      ]
    },
    {
      title: "Coach Craft",
      company: "Exotec",
      location: "Lille",
      period: "Juillet 2022",
      description: "Ma mission était de réaliser un audit complet de la qualité des solutions logicielles internes, d'établir un diagnostic précis, et de proposer un plan d'action stratégique pour l'amélioration continue de leurs solutions digitales.",
      achievements: [
        "Immersion dans l'écosystème IT d'Exotec et collecte d'informations auprès des équipes pour dresser un état des lieux exhaustif de la qualité des solutions.",
        "Synthèse des observations et des données pour fournir une évaluation précise des points forts et des axes d'amélioration.",
        "Rédaction d'une roadmap concrète visant à élever le niveau de qualité des solutions digitales internes d'Exotec."
      ]
    },
    {
      title: "Senior Software Engineer",
      company: "Decathlon",
      location: "Lille",
      period: "Juin 2021 - Juin 2022",
      description: "Ma mission en rejoignant l'équipe GreenBox en tant que Tech Lead était le recrutement d'une équipe pour le développement d'un produit d'éco-conception, d'accélérer le développement des fonctionnalités au sein de la Business Unit en tant que Staff Engineer apprenti, et de contribuer à optimiser l'écosystème de développement de Decathlon au sein de la Platform Engineering.",
      achievements: [
        "Livrer un outil de haute qualité, satisfaisant les besoins des ingénieurs produit, et démontrant une recherche constante d'excellence.",
        "Mettre en œuvre concrètement les principes de #Accelerate (notamment la CI/CD) pour améliorer la vélocité, la qualité et le bien-être des équipes.",
        "Participer activement à la mise en place d'un écosystème qui permet aux développeurs de se concentrer sur la valeur métier, renforçant l'efficacité globale de l'entreprise."
      ]
    },
    {
      title: "Software engineer",
      company: "Decathlon",
      location: "Lille",
      period: '2020 - 2021',
      description: "Ma mission en rejoignant l'équipe MyBusiness était de développer un nouveau portail stratégique à destination des magasins en tant que développeur puis Tech Lead, tout en impulsant l'innovation via mon rôle de leader de la communauté Front et ma contribution au Cloud Platform Engineering.",
      achievements: [
        "Conception et développement d'un outil central, user-centric et performant pour les magasins, remplaçant une solution existante.",
        "Organisation d'événements, accompagnement des développeurs et concrétisation de projets clés comme le Design System, renforçant l'expertise et la collaboration.",
        "Participation active aux réflexions et élaborations des standards (guidelines, Tech-radars) qui orientent l'avenir technique de l'entreprise."
      ]
    },
    {
      title: "Junior software engineer",
      company: "Decathlon",
      location: "Lille",
      period: '2019 - 2020',
      description: "Ma mission était de contribuer au développement des solutions d'impression de balisages des magasins au sein de l'équipe SignEasy, tout en montant en compétences en tant que contributeur puis leader des communautés Front.",
      achievements: [
        "Développement et amélioration des outils de balisage physique et électronique pour les magasins, en appliquant les méthodologies Agile et Craftsmanship.",
        "Évolution de contributeur à leader de la communauté Front, démontrant une montée en compétences et une capacité à fédérer.",
        "Participation active aux événements communautaires, aide aux pairs, et rôle de force de proposition pour faire avancer les discussions et les projets techniques."
      ]
    }
  ];

  const education = [
    {
      degree: "IHexa: L'autoroute vers des applications pérennes ",
      school: "Colin Damon et Adrien Turpin",
      location: "Distanciel",
      period: '2025',
      description: "Une formation hands-on qui donne les clés pour construire rapidement des applications faites pour durer. Elle a été pensée pour faire gagner du temps dans la montée en compétences sur l'architecture hexagonale et les pratiques communément admises dans la communauté Software Craftsmanship."
    },
    {
      degree: "Cursus Artisan Développeur",
      school: "Benoit Gantaume",
      location: "Distanciel",
      period: "Septembre 2024",
      description: "Une formation complète sur les différentes pratiques prônées par le mouvement Software Craftsmanship : le code durable, l'architecture, la reprise d'un legacy, la communication avec le métier.... "
    },
    {
      degree: "Cursus fullstack",
      school: "Craft Academy",
      location: "Distanciel",
      period: "2023",
      description: "Une formation qui aborde les différentes étapes de la création de solutions informatiques à travers plusieurs modules : Software Craftsmanship, Architecture logicielle testable, TDD et architecture hexagonale pour le frontend et backend"
    },
    {
      degree: "Behavior Driven Development",
      school: "Ippon technologies - Edouard Cattez",
      location: "Lille",
      period: "2022",
      description: "Une formation sur l'une des pratiques prônées par le Software Craftsmanship : le Behavior Driven Development. Elle se compose d'une partie théorique puis d'une partie collaborative (ateliers en équipes entre participants)."
    },
    {
      degree: "Accessibilité",
      school: "Urbilog",
      location: 'Lille',
      period: '2022',
      description: "Une formation parcourant toutes les composantes à prendre en compte dans le développement d'interfaces web. Pour un web plus inclusif."
    },
    {
      degree: "Epic React",
      school: "Kent C. Dodds",
      location: 'Distanciel',
      period: '2021',
      description: "Une formation complète sur le framework frontend React.js, de l'amélioration des performances au découpage en composants en passant par l'écriture de tests..."
    },
    {
      degree: "Spring Core",
      school: "Zenika",
      location: 'Lille',
      period: '2019',
      description: "Une formation complète sur le framework backend Spring, de la création d'API à la création de CRONs et de BATCHs en passant par les solutions de sécurité."
    },
    {
      degree: "Agilité & Scrum",
      school: "Agile school - Xavier Koma",
      location: "Villeneuve-d'Ascq",
      period: '2019',
      description: "Une formation aux méthodes Agiles et au framework SCRUM"
    },
    {
      degree: "Master MIAGE, gestion de projets en technologies de l'information",
      school: "Université de Lille",
      location: 'Lille, France',
      period: '2017 - 2019',
      description: "Enseignement des technologies utilisées dans le développement des sytèmes d'informations d'entreprises, connaissances et savoir-faire sur les méthodes de conduite de projet et processus de développement d'applications."
    },
    {
      degree: "Licence informatique parcours MIAGE",
      school: "Université de Lille",
      location: 'Lille, France',
      period: '2016 - 2017',
      description: "Une formation couvrant la programmation, les algorithmes, les bases de données et l'architecture des systèmes, avec une approche théorique et pratique."
    },
    {
      degree: "DUT informatique",
      school: "IUT de Lens",
      location: 'Lens, France',
      period: '2014 - 2016',
      description: "Diplôme axé sur le développement logiciel, la gestion de données et les infrastructures, avec une forte composante pratique."
    }
  ];

  const readings = [
    "Lean startup 🚧",
    "Responsabilité absolue: La méthode des Navy SEALs pour réussir 🚧",
    "Comment se faire des amis",
    "Domain-Driven Design: Tackling Complexity in the Heart of Software",
    "Pourquoi on ne se comprend pas ?: Mieux communiquer avec la méthode des 4 couleurs",
    "The 7 Habits of Highly Effective People",
    "Deep Work: Rules for Focused Success in a Distracted World",
    "BDD in Action : Behavior-driven Development for the Whole Software Lifecycle",
    "The BDD Books FORMULATION",
    "Domain-Driven Design DISTILLED",
    "Software Craft: TDD, Clean Code et autres pratiques essentielles",
    "Extreme Programming explained",
    "System design interview",
    "Test Driven Development : By example",
    "Clean Craftsmanship: Disciplines, Standards, and Ethics",
    "Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations",
    "Clean Agile: Back to Basics",
    "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
    "Clean Code: A Handbook of Agile Software Craftsmanship",
    "The Software Craftsman: Professionalism, Pragmatism, Pride",
    "The clean coder",
    "Scrum",
    "User stories"
  ];

  return (
    <section id="cv" className="py-24 border-t border-hairline scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="mb-0">
            <p className="font-mono text-sm text-accent mb-3">// parcours</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink">
              Parcours
            </h2>
          </div>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-hairline text-ink font-medium rounded-md hover:border-accent hover:text-accent transition-colors print:hidden self-start md:self-auto"
          >
            <Download size={18} />
            <span>Télécharger mon CV</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Experience */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-ink flex items-center gap-3 mb-8">
              <Briefcase size={22} className="text-accent" />
              Expérience professionnelle
            </h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l border-hairline last:border-l-0">
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-accent rounded-full"></div>
                  <div className="border border-hairline rounded-md bg-white p-6">
                    <h4 className="font-display text-lg font-semibold text-ink mb-1">{exp.title}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-3">
                      <span className="font-medium text-ink">{exp.company}</span>
                      <div className="flex items-center gap-4 font-mono text-xs text-muted">
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          <span>{exp.location}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          <span>{exp.period}</span>
                        </span>
                      </div>
                    </div>
                    <p className="text-muted mb-3 leading-relaxed">{exp.description}</p>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted flex items-start gap-2">
                          <span className="w-1 h-1 bg-accent rounded-full mt-2 shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Lectures */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-ink flex items-center gap-3 mb-8">
              <GraduationCap size={22} className="text-accent" />
              Formation
            </h3>

            <div className="space-y-6 mb-14">
              {education.map((edu, index) => (
                <div key={index} className="border border-hairline rounded-md bg-white p-6">
                  <h4 className="font-display text-lg font-semibold text-ink mb-1">{edu.degree}</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-3">
                    <span className="font-medium text-ink">{edu.school}</span>
                    <div className="flex items-center gap-4 font-mono text-xs text-muted">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        <span>{edu.location}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{edu.period}</span>
                      </span>
                    </div>
                  </div>
                  <p className="text-muted leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>

            <h3 className="font-display text-2xl font-semibold text-ink flex items-center gap-3 mb-8">
              <Award size={22} className="text-accent" />
              Mes lectures
            </h3>

            <ul>
              {readings.map((reading, index) => (
                <li key={index} className="border-t border-hairline py-3 text-sm text-muted last:border-b">
                  {reading}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
