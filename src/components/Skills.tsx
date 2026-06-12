import {useState} from 'react';
import {ChevronDown} from 'lucide-react';
import SectionHeader from './SectionHeader';

const forces = [
    {
        title: 'Architecture logicielle',
        detail: 'DDD, architecture hexagonale, CQRS — 10 ans de systèmes Java/Spring conçus pour durer en production.',
        stack: ['Java 8 → 25', 'Spring', 'DDD', 'CQRS']
    },
    {
        title: 'Orchestration IA',
        detail: 'RAG, multi-modèle, agents, function calling — de l\'expérimentation à la prod, avec des coûts d\'inférence maîtrisés.',
        stack: ['RAG', 'Agents', 'Spring AI', 'Claude', 'Mistral']
    },
    {
        title: 'Mise en production',
        detail: 'Kubernetes, CI/CD, observabilité — des systèmes qui se déploient sans drame et tiennent la charge.',
        stack: ['Kubernetes', 'GCP', 'Scaleway', 'GitHub Actions', 'Grafana']
    },
    {
        title: 'Produit SaaS full-stack',
        detail: 'Des interfaces React/TypeScript pensées produit, du design system au déploiement.',
        stack: ['React', 'TypeScript', 'Next.js', 'Vite']
    },
    {
        title: 'Craft & transmission',
        detail: 'TDD, BDD, Event Storming — et le coaching d\'équipe pour que la qualité reste après mon départ.',
        stack: ['TDD', 'BDD', 'Event Storming', 'Coaching']
    }
];

const inventory = [
    {
        title: 'Frontend',
        items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'SASS/SCSS', 'React.js', 'Next.js', 'Vue.js', 'Svelte', 'Angular', 'Jest', 'Vitest', 'React Testing Library', 'Playwright', 'Cypress', 'Storybook', 'Vite', 'Webpack', 'ESLint/Prettier', 'Zustand', 'Redux', 'RxJS']
    },
    {
        title: 'Backend',
        items: ['Java (8 → 25)', 'TypeScript', 'SQL', 'Spring', 'Node.js/Express', 'NestJS', 'NestJS/CQRS', 'PostgreSQL', 'MongoDB', 'JGiven', 'Hibernate', 'Kafka', 'Mockito', 'Flyway', 'API REST']
    },
    {
        title: 'DevOps',
        items: ['Google Cloud Platform', 'Scaleway', 'OVH', 'Docker', 'Docker Compose', 'Kubernetes', 'Flux & Helm', 'GitHub Actions', 'Jenkins', 'Grafana', 'Prometheus', 'Dynatrace', 'Datadog']
    },
    {
        title: 'IA',
        items: ['ChatGPT 4+', 'Claude 3.5+', 'Gemini 2.0+', 'Mistral', 'Vertex AI', 'Assembly AI', 'Spring AI', 'Claude Code', 'Windsurf', 'IntelliJ Junie', 'Bolt', 'Lovable', 'v0', 'Prompt Engineering', 'RAG', 'Vectorisation', 'Function Calling', 'Multi-Agent Systems']
    },
    {
        title: 'Craft',
        items: ['TDD', 'BDD', 'DDD', 'Example Mapping', 'Event Storming', 'Pair/Mob Programming', 'Clean Architecture', 'Hexagonal', 'Microservices', 'Monolithe modulaire', 'Event Sourcing', 'CQRS', 'Tech Lead', 'Coaching', 'Formation', 'Recrutement', 'Code Review', 'ADRs']
    }
];

const Skills = () => {
    const [showInventory, setShowInventory] = useState(false);

    return (
        <section id="competences" className="py-24 border-t border-hairline scroll-mt-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader eyebrow="// compétences" title="Mes forces"/>

                <div className="border border-hairline rounded-md bg-white p-8 md:p-10 mb-12">
                    <p className="font-mono text-xs text-accent mb-3">le combo signature</p>
                    <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-ink">
                        Architecture + Orchestration IA
                    </h3>
                    <p className="text-muted leading-relaxed mt-4 max-w-3xl">
                        Des fondations logicielles qui tiennent (Java, DDD, hexagonal) et des
                        systèmes IA qui produisent de la valeur en production (RAG, multi-modèle,
                        agents). C'est la combinaison qui fait passer vos produits de la démo au
                        système fiable.
                    </p>
                </div>

                <ul>
                    {forces.map((force) => (
                        <li
                            key={force.title}
                            className="border-t border-hairline py-6 md:grid md:grid-cols-12 md:gap-6 md:items-baseline"
                        >
                            <h4 className="md:col-span-3 font-display font-semibold text-ink">
                                {force.title}
                            </h4>
                            <p className="md:col-span-6 text-muted leading-relaxed mt-2 md:mt-0">
                                {force.detail}
                            </p>
                            <p className="md:col-span-3 font-mono text-xs text-muted md:text-right mt-2 md:mt-0">
                                {force.stack.join(' · ')}
                            </p>
                        </li>
                    ))}
                </ul>

                <div className="border-t border-hairline pt-8">
                    <button
                        onClick={() => setShowInventory(!showInventory)}
                        aria-expanded={showInventory}
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition-colors"
                    >
                        <ChevronDown
                            size={16}
                            className={`transition-transform ${showInventory ? 'rotate-180' : ''}`}
                        />
                        {showInventory ? 'Replier' : 'Voir toutes les technologies'}
                    </button>

                    {showInventory && (
                        <div className="mt-8 space-y-8">
                            {inventory.map((category) => (
                                <div key={category.title}>
                                    <h4 className="font-mono text-xs text-muted mb-3">
                                        {category.title.toLowerCase()}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {category.items.map((item) => (
                                            <span
                                                key={item}
                                                className="font-mono text-xs px-2.5 py-1 border border-hairline rounded-sm bg-white text-ink"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Skills;
