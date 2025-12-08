import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('tous');

  const projects = [
    {
      id: 1,
      title: 'Justiana',
      description: 'Solution SaaS dédiée aux élus de CSE. Cofondateur & CTPO — stratégie produit, UX et développement technologique.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'perso',
      technologies: ['SaaS', 'Product', 'UX/UI', 'Full-stack'],
      github: null,
      live: 'https://app.justiana.fr/'
    },
    {
      id: 2,
      title: 'Legipilot',
      description: 'Plateforme d\'assistance juridique intelligente. Simplifier l\'accès au droit pour tous.',
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'perso',
      technologies: ['SaaS', 'IA', 'Legal Tech'],
      github: null,
      live: 'https://app.legipilot.com/signin'
    },
    {
      id: 3,
      title: 'Vitamin Design System',
      description: 'Design System open source de Decathlon. Web components, documentation Storybook et guidelines pour une expérience cohérente.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'open-source',
      technologies: ['Web Components', 'Storybook', 'Tailwind', 'Lerna'],
      github: 'https://github.com/Decathlon/vitamin-web',
      live: 'https://www.decathlon.design/'
    },
    {
      id: 4,
      title: 'Rental Management System',
      description: 'Plateforme de location Decathlon. Architecture hexagonale, DDD et CQS pour un système robuste et évolutif.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'enterprise',
      technologies: ['Java 21', 'Vavr', 'TDD', 'DDD', 'CQS'],
      github: null,
      live: 'https://rental.decathlon.com/fr/fr'
    },
    {
      id: 5,
      title: 'TDD Training Katas',
      description: 'Collection de katas pour s\'entraîner au TDD. Mars Rover, Roman Numerals, Game of Life et plus encore.',
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'open-source',
      technologies: ['Java 17', 'Spring', 'TDD', 'JUnit'],
      github: 'https://github.com/gabbloquet/tdd-training',
      live: null
    },
    {
      id: 6,
      title: 'Front Door Configurator',
      description: 'Configurateur de portes d\'entrée sur mesure Leroy Merlin. Interface intuitive pour personnaliser des produits complexes.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'enterprise',
      technologies: ['Java 21', 'Angular', 'TypeScript', 'TDD', 'BDD'],
      github: null,
      live: 'https://www.leroymerlin.fr/config/porte-exterieure/configuration/b64f3088-5429-42b1-83f6-14b9e2c71780/product-catalog/door-type'
    },
    {
      id: 7,
      title: 'Arbre de l\'Espoir',
      description: 'Site web pour l\'association caritative "L\'Arbre de l\'Espoir". Projet bénévole pour soutenir une cause solidaire.',
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'perso',
      technologies: ['React', 'JavaScript'],
      github: 'https://github.com/gabbloquet/arbre-de-lespoir',
      live: 'http://www.larbredelespoir.fr/'
    },
    {
      id: 8,
      title: 'BDD Training - Todolist',
      description: 'Application todolist développée en BDD. Example Mapping, Gherkin et tests d\'acceptation automatisés.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'open-source',
      technologies: ['Java 17', 'Spring', 'BDD', 'Cucumber'],
      github: 'https://github.com/gabbloquet/bdd-training',
      live: null
    }
  ];

  const categories = [
    { id: 'tous', label: 'Tous' },
    { id: 'enterprise', label: 'Entreprise' },
    { id: 'open-source', label: 'Open Source' },
    { id: 'perso', label: 'Perso' }
  ];

  const filteredProjects = activeFilter === 'tous' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projets" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mes Projets
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Découvre une sélection de mes réalisations récentes, alliant créativité et expertise technique
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Github size={18} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;