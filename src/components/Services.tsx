import {ArrowDown, ArrowRight} from 'lucide-react';
import SectionHeader from './SectionHeader';

type ServiceCardProps = {
    label: string;
    title: string;
    children: React.ReactNode;
};

const ServiceCard = ({label, title, children}: ServiceCardProps) => (
    <div className="border border-hairline rounded-md bg-white p-8 flex flex-col">
        <p className="font-mono text-xs text-muted mb-4">{label}</p>
        <h3 className="font-display text-xl font-semibold text-ink mb-3">{title}</h3>
        <p className="text-muted leading-relaxed">{children}</p>
    </div>
);

const Services = () => (
    <section id="services" className="py-24 border-t border-hairline scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader eyebrow="// services" title="Ce que je fais pour vous"/>

            <p className="font-display text-2xl md:text-3xl font-medium tracking-tight text-ink max-w-3xl mb-14">
                Je vous aide à décider quoi faire de l'IA, je le construis —{' '}
                <span className="text-accent">et je certifie que ça marche.</span>
            </p>

            {/* Le modèle en 2 temps : cadrage ──▶ build, puis le rôle qui enveloppe dans la durée */}
            <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
                <ServiceCard label="le point d'entrée" title="Cadrage IA">
                    Diagnostic, cas d'usage à forte valeur, architecture cible et roadmap.
                    Court, à prix fixe. Vous repartez avec une décision claire et un plan
                    exécutable.
                </ServiceCard>

                <div aria-hidden="true" className="flex items-center justify-center text-accent">
                    <ArrowDown size={18} className="md:hidden"/>
                    <span className="hidden md:flex items-center">
                        <span className="block h-px w-6 bg-hairline"/>
                        <ArrowRight size={18}/>
                    </span>
                </div>

                <ServiceCard label="le cœur" title="Build & mise en production">
                    Je construis : produits SaaS et systèmes IA (RAG, orchestration
                    multi-modèle, agents). Du POC à la prod, robuste et maîtrisé en coûts.
                    <span className="block mt-3 text-ink">
                        Livré avec des evals : je prouve que ça marche sur vos cas réels : pas une démo.
                    </span>
                </ServiceCard>
            </div>

            <div className="border border-hairline rounded-md bg-white p-8 mt-6 md:flex md:items-baseline md:gap-10">
                <p className="font-mono text-xs text-muted mb-4 md:mb-0 md:w-32 shrink-0">
                    dans la durée
                </p>
                <div>
                    <h3 className="font-display text-xl font-semibold text-ink mb-3">
                        Direction technique fractionnée (CTO)
                    </h3>
                    <p className="text-muted leading-relaxed max-w-2xl">
                        Je tiens le rôle de CTO sur vos sujets stratégiques : architecture,
                        roadmap, qualité, équipe.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default Services;
