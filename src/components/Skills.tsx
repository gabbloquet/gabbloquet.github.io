import {useState} from 'react';
import {ChevronDown} from 'lucide-react';
import SectionHeader from './SectionHeader';

const forces = [
    {
        title: 'Architecture logicielle',
        detail: 'DDD, architecture hexagonale, CQRS : 10 ans de systèmes Java/Spring conçus pour durer en production.',
        stack: ['Java 8 → 25', 'Spring', 'DDD', 'CQRS']
    },
    {
        title: 'Orchestration IA',
        detail: 'RAG, multi-modèle, agents, function calling : de l\'expérimentation à la prod, avec des coûts d\'inférence maîtrisés.',
        stack: ['RAG', 'Agents', 'Spring AI', 'Claude', 'Mistral']
    },
    {
        title: 'Mise en production',
        detail: 'Kubernetes, CI/CD, observabilité : des systèmes qui se déploient sans drame et tiennent la charge.',
        stack: ['Kubernetes', 'GCP', 'Scaleway', 'GitHub Actions', 'Grafana']
    },
    {
        title: 'Produit SaaS full-stack',
        detail: 'Des interfaces React/TypeScript pensées produit, du design system au déploiement.',
        stack: ['React', 'TypeScript', 'Next.js', 'Vite']
    },
    {
        title: 'Craft & transmission',
        detail: 'TDD, BDD, Event Storming, et le coaching d\'équipe pour que la qualité reste après mon départ.',
        stack: ['TDD', 'BDD', 'Event Storming', 'Coaching']
    }
];

const inventory = [
    {
        title: 'Architecture logicielle',
        items: ['Java (8 → 25)', 'Spring', 'DDD', 'Architecture hexagonale', 'Clean Architecture', 'CQRS', 'Event Sourcing', 'Microservices', 'Monolithe modulaire', 'PostgreSQL', 'MongoDB', 'Hibernate', 'Flyway', 'Kafka', 'SQL', 'API REST', 'Node.js/Express', 'NestJS', 'NestJS/CQRS']
    },
    {
        title: 'Orchestration IA',
        items: ['RAG', 'Multi-Agent Systems', 'Function Calling', 'Vectorisation', 'Prompt Engineering', 'Spring AI', 'ChatGPT 4+', 'Claude 3.5+', 'Gemini 2.0+', 'Mistral', 'Vertex AI', 'Assembly AI', 'Claude Code', 'Windsurf', 'IntelliJ Junie', 'Bolt', 'Lovable', 'v0']
    },
    {
        title: 'Mise en production',
        items: ['Kubernetes', 'Docker', 'Docker Compose', 'Flux & Helm', 'GitHub Actions', 'Jenkins', 'Google Cloud Platform', 'Scaleway', 'OVH', 'Grafana', 'Prometheus', 'Dynatrace', 'Datadog']
    },
    {
        title: 'Produit SaaS full-stack',
        items: ['React.js', 'Next.js', 'Vue.js', 'Svelte', 'Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SASS/SCSS', 'Vite', 'Webpack', 'ESLint/Prettier', 'Zustand', 'Redux', 'RxJS', 'Storybook']
    },
    {
        title: 'Craft & transmission',
        items: ['TDD', 'BDD', 'Example Mapping', 'Event Storming', 'Pair/Mob Programming', 'Jest', 'Vitest', 'React Testing Library', 'Playwright', 'Cypress', 'JGiven', 'Mockito', 'Code Review', 'ADRs', 'Tech Lead', 'Coaching', 'Formation', 'Recrutement']
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
