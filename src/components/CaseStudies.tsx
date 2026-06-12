import {ExternalLink} from 'lucide-react';
import {GithubIcon} from './icons';
import SectionHeader from './SectionHeader';

type CaseStudy = {
    company: string;
    tagline: string;
    role: string;
    period: string;
    problem: string;
    action: string;
    result: string;
    stack: string[];
    link: string | null;
    linkLabel?: string;
};

const caseStudies: CaseStudy[] = [
    {
        company: 'Justiana',
        tagline: 'SaaS legaltech pour les élus de CSE',
        role: 'Cofondateur & CTPO',
        period: '2024 — aujourd\'hui',
        problem:
            'Les élus de CSE doivent appliquer un droit du travail complexe et mouvant, sans juriste à leurs côtés ni outil pensé pour leur rôle.',
        action:
            'Cofondé et construit le produit de bout en bout : architecture, UX, développement, et un système d\'assistance juridique en RAG multi-modèle souverain, déployé et exploité sur Kubernetes.',
        result:
            'Une plateforme en production réelle, robuste et scalable, dont les coûts d\'inférence restent maîtrisés.',
        stack: ['SaaS', 'RAG multi-modèle souverain', 'Kubernetes', 'Full-stack', 'UX/UI'],
        link: 'https://app.justiana.fr/',
        linkLabel: 'app.justiana.fr'
    },
    {
        company: 'Decathlon',
        tagline: 'Rental Management System — la location chez Decathlon',
        role: 'Senior Software Engineer',
        period: '2023 — 2024',
        problem:
            'Un système de gestion de location à reconcevoir pour soutenir l\'offre de location de Decathlon, avec des exigences fortes de robustesse et d\'évolutivité.',
        action:
            'Reconception de l\'architecture — hexagonale, DDD et CQS — avec un TDD systématique, et accompagnement de l\'équipe sur la qualité et les bonnes pratiques.',
        result:
            'Un système robuste et évolutif en production sur rental.decathlon.com, et des standards de développement ancrés dans l\'équipe.',
        stack: ['Java 21', 'DDD', 'Architecture hexagonale', 'CQS', 'TDD'],
        link: 'https://rental.decathlon.com/fr/fr',
        linkLabel: 'rental.decathlon.com'
    },
    {
        company: 'Legipilot',
        tagline: 'Assistance juridique intelligente pour RH et dirigeants de TPE/PME',
        role: 'CTO fractionné',
        period: '2025 — aujourd\'hui',
        problem:
            'Les RH et dirigeants de TPE/PME n\'ont ni juriste interne ni temps à y consacrer : l\'accès au droit doit devenir simple, fiable et rapide.',
        action:
            'Développé entièrement le MVP — de l\'architecture au déploiement — puis structuré l\'équipe technique : standards de qualité, code reviews, roadmap.',
        result:
            'Un MVP en production et une équipe technique structurée pour le faire évoluer.',
        stack: ['SaaS', 'IA', 'Legal Tech'],
        link: 'https://app.legipilot.com/',
        linkLabel: 'app.legipilot.com'
    }
];

const otherProjects = [
    {
        title: 'Vitamin Design System',
        description: 'Design System open source de Decathlon — web components, Storybook, guidelines.',
        stack: 'Web Components · Storybook · Tailwind',
        github: 'https://github.com/Decathlon/vitamin-web',
        live: 'https://www.decathlon.design/'
    },
    {
        title: 'Configurateur de portes d\'entrée',
        description: 'Configurateur de produits sur mesure Leroy Merlin, pour personnaliser des produits complexes.',
        stack: 'Java 21 · Angular · TDD · BDD',
        github: null,
        live: 'https://www.leroymerlin.fr/config/porte-exterieure/configuration/b64f3088-5429-42b1-83f6-14b9e2c71780/product-catalog/door-type'
    },
    {
        title: 'TDD Training Katas',
        description: 'Collection de katas pour s\'entraîner au TDD : Mars Rover, Roman Numerals, Game of Life…',
        stack: 'Java 17 · Spring · JUnit',
        github: 'https://github.com/gabbloquet/tdd-training',
        live: null
    },
    {
        title: 'BDD Training — Todolist',
        description: 'Application développée en BDD : Example Mapping, Gherkin et tests d\'acceptation automatisés.',
        stack: 'Java 17 · Spring · Cucumber',
        github: 'https://github.com/gabbloquet/bdd-training',
        live: null
    },
    {
        title: 'Arbre de l\'Espoir',
        description: 'Site web bénévole pour l\'association caritative « L\'Arbre de l\'Espoir ».',
        stack: 'React · JavaScript',
        github: 'https://github.com/gabbloquet/arbre-de-lespoir',
        live: 'http://www.larbredelespoir.fr/'
    }
];

const CaseStudies = () => (
    <section id="projets" className="py-24 border-t border-hairline scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
                eyebrow="// études de cas"
                title="Des systèmes en production"
                lede="Trois cas représentatifs : le problème, ce que j'ai fait, le résultat."
            />

            <div>
                {caseStudies.map((study) => (
                    <article key={study.company} className="border-t border-hairline py-12">
                        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-8">
                            <h3 className="font-display text-2xl font-semibold text-ink">
                                {study.company}
                                <span className="font-sans font-normal text-muted text-lg">
                                    {' '}— {study.tagline}
                                </span>
                            </h3>
                            <p className="font-mono text-sm text-muted shrink-0">
                                {study.role} · {study.period}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <p className="font-mono text-xs text-muted mb-3">problème</p>
                                <p className="text-muted leading-relaxed">{study.problem}</p>
                            </div>
                            <div>
                                <p className="font-mono text-xs text-muted mb-3">ce que j'ai fait</p>
                                <p className="text-muted leading-relaxed">{study.action}</p>
                            </div>
                            <div>
                                <p className="font-mono text-xs text-accent mb-3">résultat</p>
                                <p className="text-ink leading-relaxed">{study.result}</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-8">
                            <p className="font-mono text-xs text-muted">
                                {study.stack.join(' · ')}
                            </p>
                            {study.link && (
                                <a
                                    href={study.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-dark transition-colors"
                                >
                                    <ExternalLink size={16}/>
                                    {study.linkLabel}
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>

            <div className="mt-16">
                <h3 className="font-display text-xl font-semibold text-ink mb-6">
                    Autres projets
                </h3>
                <ul>
                    {otherProjects.map((project) => (
                        <li
                            key={project.title}
                            className="border-t border-hairline py-4 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6"
                        >
                            <span className="font-medium text-ink sm:w-56 shrink-0">
                                {project.title}
                            </span>
                            <span className="text-sm text-muted flex-1">{project.description}</span>
                            <span className="font-mono text-xs text-muted shrink-0">{project.stack}</span>
                            <span className="flex items-center gap-3 shrink-0">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted hover:text-accent transition-colors"
                                        aria-label={`Code de ${project.title}`}
                                    >
                                        <GithubIcon size={16}/>
                                    </a>
                                )}
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted hover:text-accent transition-colors"
                                        aria-label={`Voir ${project.title}`}
                                    >
                                        <ExternalLink size={16}/>
                                    </a>
                                )}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
);

export default CaseStudies;
