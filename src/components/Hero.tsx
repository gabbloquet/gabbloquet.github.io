import {Mail} from 'lucide-react';
import {GithubIcon, LinkedinIcon} from './icons';
import {CONTACT_MAILTO, EMAIL, GITHUB_URL, LINKEDIN_URL} from '../constants';

const Hero = () => {
    const scrollToCaseStudies = () => {
        document.getElementById('projets')?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <section id="accueil" className="pt-36 pb-24 md:pt-44 md:pb-32 scroll-mt-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-8">
                        <p className="font-mono text-sm text-accent mb-6">
                            // disponible — remote · france entière
                        </p>

                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ink">
                            Gabin Bloquet
                        </h1>

                        <h2 className="font-display text-xl md:text-2xl font-medium text-ink mt-5">
                            CTO & Architecte — produits SaaS augmentés par l'IA
                        </h2>

                        <p className="text-lg text-muted leading-relaxed mt-6 max-w-2xl">
                            J'amène vos produits SaaS et vos systèmes IA de l'expérimentation à une
                            production fiable, scalable et maîtrisée en coûts. 10 ans d'architecture
                            logicielle (Java/DDD) et d'orchestration IA. Remote, async-first.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-10 print:hidden">
                            <a
                                href={CONTACT_MAILTO}
                                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-paper font-medium rounded-md hover:bg-accent-dark transition-colors"
                            >
                                Réserver un échange
                            </a>
                            <button
                                onClick={scrollToCaseStudies}
                                className="inline-flex items-center justify-center px-6 py-3 border border-hairline text-ink font-medium rounded-md hover:border-accent hover:text-accent transition-colors"
                            >
                                Voir mes réalisations
                            </button>
                        </div>

                        <div className="flex items-center gap-5 mt-12 print:hidden">
                            <a
                                href={GITHUB_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted hover:text-accent transition-colors"
                                aria-label="GitHub"
                            >
                                <GithubIcon size={20}/>
                            </a>
                            <a
                                href={LINKEDIN_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted hover:text-accent transition-colors"
                                aria-label="LinkedIn"
                            >
                                <LinkedinIcon size={20}/>
                            </a>
                            <a
                                href={`mailto:${EMAIL}`}
                                className="text-muted hover:text-accent transition-colors"
                                aria-label="Email"
                            >
                                <Mail size={20}/>
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-4 max-w-xs lg:max-w-none">
                        <div className="border border-hairline rounded-md p-2 bg-white">
                            <img
                                src="/assets/img/gabin.png"
                                alt="Portrait de Gabin Bloquet"
                                className="w-full aspect-square object-cover rounded-sm"
                                fetchPriority="high"
                            />
                        </div>
                        <p className="font-mono text-xs text-muted leading-relaxed mt-4">
                            // je build des systèmes qui tiennent en production, pas des démos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
