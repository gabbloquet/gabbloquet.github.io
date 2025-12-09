import {useState} from 'react';
import {Bot, Cloud, Globe, Lightbulb, Server} from 'lucide-react';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('frontend');

    const skillCategories = [
        {
            id: 'frontend',
            title: 'Frontend',
            icon: Globe,
            color: 'from-blue-500 to-cyan-500',
            skills: [
                {
                    category: 'Langages',
                    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'SASS/SCSS']
                },
                {
                    category: 'Frameworks',
                    items: ['React.js', 'Next.js', 'Vue.js', 'Svelte', 'Angular']
                },
                {
                    category: 'Testing',
                    items: ['Jest', 'Vitest', 'React Testing Library', 'Playwright', 'Cypress', 'Storybook']
                },
                {
                    category: 'Outils',
                    items: ['Vite', 'Webpack', 'ESLint/Prettier', 'Zustand', 'Redux', 'RxJS']
                }
            ]
        },
        {
            id: 'backend',
            title: 'Backend',
            icon: Server,
            color: 'from-green-500 to-emerald-500',
            skills: [
                {
                    category: 'Langages',
                    items: ['Java (8 → 25)', 'TypeScript', 'SQL']
                },
                {
                    category: 'Frameworks',
                    items: ['Spring', 'Node.js/Express', 'NestJS', 'NestJS/CQRS']
                },
                {
                    category: 'Bases de données',
                    items: ['PostgreSQL', 'MongoDB']
                },
                {
                    category: 'Outils & Librairies',
                    items: ['JGiven', 'Hibernate', 'Kafka', 'Mockito', 'Flyway', 'API REST']
                }
            ]
        },
        {
            id: 'ops',
            title: 'DevOps',
            icon: Cloud,
            color: 'from-purple-500 to-violet-500',
            skills: [
                {
                    category: 'Cloud Providers',
                    items: ['Google Cloud Platform', 'Scaleway', 'OVH']
                },
                {
                    category: 'Containers & Orchestration',
                    items: ['Docker', 'Docker Compose', 'Kubernetes', 'Flux & Helm']
                },
                {
                    category: 'CI/CD',
                    items: ['GitHub Actions', 'Jenkins']
                },
                {
                    category: 'Monitoring',
                    items: ['Grafana', 'Prometheus', 'Dynatrace', 'Datadog']
                }
            ]
        },
        {
            id: 'ia',
            title: 'IA',
            icon: Bot,
            color: 'from-violet-500 to-fuchsia-500',
            skills: [
                {
                    category: 'LLMs & APIs',
                    items: ['ChatGPT 4+', 'Claude 3.5+', 'Gemini 2.0+', 'Mistral (embeddings, OCR, Medium, Large)', 'Vertex AI', 'Assembly AI']
                },
                {
                    category: 'Frameworks',
                    items: ['Spring AI']
                },
                {
                    category: 'Coding Assistants',
                    items: ['Claude Code', 'Windsurf', 'IntelliJ Junie']
                },
                {
                    category: 'No-Code AI Builders',
                    items: ['Bolt', 'Lovable', 'v0']
                },
                {
                    category: 'Techniques',
                    items: ['Prompt Engineering', 'RAG', 'Vectorisation', 'Function Calling', 'Multi-Agent Systems']
                }
            ]
        },
        {
            id: 'other',
            title: 'Craft',
            icon: Lightbulb,
            color: 'from-orange-500 to-red-500',
            skills: [
                {
                    category: 'Pratiques',
                    items: ['TDD', 'BDD', 'DDD', 'Example Mapping', 'Event Storming', 'Pair/Mob Programming']
                },
                {
                    category: 'Architecture',
                    items: ['Clean Architecture', 'Hexagonal', 'Microservices', 'Monolith modulaire', 'Event Sourcing', 'CQRS']
                },
                {
                    category: 'Leadership',
                    items: ['Tech Lead', 'Coaching', 'Formation', 'Recrutement', 'Code Review', 'ADRs']
                }
            ]
        }
    ];

    const activeSkills = skillCategories.find(cat => cat.id === activeCategory);

    return (
        <section id="competences" className="py-20 bg-linear-to-br from-gray-50 via-white to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Mes Compétences
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Un éventail de technologies et de pratiques maîtrisées pour créer des solutions complètes et
                        performantes
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {skillCategories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`flex items-center space-x-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                    activeCategory === category.id
                                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                                        : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md border border-gray-200'
                                }`}
                            >
                                <IconComponent size={20}/>
                                <span>{category.title}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Skills Content */}
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    {activeSkills && (
                        <div className="space-y-8">
                            <div className="text-center mb-8">
                                <div
                                    className={`w-16 h-16 mx-auto mb-4 bg-linear-to-br ${activeSkills.color} rounded-full flex items-center justify-center text-white`}>
                                    <activeSkills.icon size={32}/>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">{activeSkills.title}</h3>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {activeSkills.skills.map((skillGroup, index) => (
                                    <div
                                        key={skillGroup.category}
                                        className="group"
                                        style={{animationDelay: `${index * 100}ms`}}
                                    >
                                        <div
                                            className="bg-linear-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 h-full">
                                            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                                                <div
                                                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${activeSkills.color}`}></div>
                                                <span>{skillGroup.category}</span>
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {skillGroup.items.map((skill, skillIndex) => (
                                                    <span
                                                        key={skill}
                                                        className="px-3 py-1.5 bg-white text-gray-700 text-sm font-medium rounded-full border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200 cursor-default"
                                                        style={{animationDelay: `${(index * 100) + (skillIndex * 50)}ms`}}
                                                    >
                            {skill}
                          </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Skills;