import SectionHeader from './SectionHeader';

const News = () => (
    <section id="apropos" className="py-24 border-t border-hairline scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader eyebrow="// à propos" title="En quelques mots"/>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                {/* Qui je suis */}
                <div className="space-y-6">
                    <h3 className="font-display text-xl font-semibold text-ink">
                        Ce qui me passionne
                    </h3>

                    <p className="text-muted leading-relaxed">
                        La <strong className="font-medium text-ink">qualité</strong>, la co-création avec
                        les utilisateurs, les débats techniques, l'architecture logicielle, la séparation
                        des responsabilités… En bref, tout ce qui rend le code{' '}
                        <strong className="font-medium text-ink">lisible, maintenable et évolutif</strong>.
                    </p>

                    <p className="text-muted leading-relaxed">
                        Je m'inscris dans les mouvements{' '}
                        <span className="font-medium text-ink">Software Craftsmanship</span> et{' '}
                        <span className="font-medium text-ink">Agile</span>, avec un intérêt particulier
                        pour <em>Accelerate</em>, la culture{' '}
                        <strong className="font-medium text-ink">DevOps</strong>, et l'exploitation
                        intelligente de <strong className="font-medium text-ink">l'IA</strong> pour
                        accélérer sans compromettre.
                    </p>

                    <h3 className="font-display text-xl font-semibold text-ink pt-2">
                        Mon approche
                    </h3>

                    <p className="text-muted leading-relaxed">
                        Opérateur, pas théoricien. Je construis des produits avec une{' '}
                        <strong className="font-medium text-ink">exigence craft</strong> et je pousse
                        les équipes vers l'autonomie technique. Mon objectif :{' '}
                        <strong className="font-medium text-ink">shipper vite, shipper bien</strong>.
                    </p>
                </div>

                {/* Mon actualité */}
                <div className="space-y-6">
                    <h3 className="font-display text-xl font-semibold text-ink">
                        Actuellement
                    </h3>

                    <div className="border border-hairline rounded-md bg-white p-6">
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src="/assets/img/logos/justiana.png"
                                alt="Justiana"
                                className="h-6 object-contain"
                            />
                            <div>
                                <p className="font-medium text-ink">Cofondateur & CTPO</p>
                                <p className="font-mono text-xs text-muted mt-0.5">SaaS pour élus de CSE</p>
                            </div>
                        </div>

                        <p className="text-muted leading-relaxed mb-4">
                            Je pilote la <strong className="font-medium text-ink">vision produit</strong>,
                            l'UX et la stratégie technique. De l'idée au déploiement, je construis une
                            plateforme pensée pour ses utilisateurs.
                        </p>

                        <p className="font-mono text-xs text-muted">
                            Product · Architecture · IA · Full-stack · UX
                        </p>
                    </div>

                    <div className="border border-hairline rounded-md bg-white p-6">
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src="/assets/img/logos/legipilot.png"
                                alt="Legipilot"
                                className="h-8 object-contain"
                            />
                            <div>
                                <p className="font-medium text-ink">Chief Technical Officer</p>
                                <p className="font-mono text-xs text-muted mt-0.5">
                                    SaaS pour RH et dirigeants TPE/PME
                                </p>
                            </div>
                        </div>

                        <p className="text-muted leading-relaxed mb-4">
                            Plateforme d'<strong className="font-medium text-ink">assistance juridique
                            intelligente</strong>. Simplifier l'accès au droit grâce à l'IA.
                        </p>

                        <p className="font-mono text-xs text-muted">
                            Management · Architecture · IA · Tech Lead · Full-stack
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default News;
