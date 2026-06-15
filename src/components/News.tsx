import SectionHeader from './SectionHeader';

const News = () => (
    <section id="apropos" className="py-24 border-t border-hairline scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader eyebrow="// à propos" title="En quelques mots"/>

            <div className="max-w-3xl space-y-6">
                <p className="text-lg text-muted leading-relaxed">
                    Une dizaine d'années d'<strong className="font-medium text-ink">architecture
                    logicielle</strong> (Java, DDD) et d'<strong className="font-medium text-ink">orchestration
                    IA</strong>, au service de produits qui tiennent en production.
                </p>

                <p className="text-muted leading-relaxed">
                    Opérateur, pas théoricien : je construis et je livre. De l'idée au déploiement,
                    avec une <strong className="font-medium text-ink">exigence craft</strong> qui ne se
                    négocie pas : du code lisible, des systèmes maintenables, des bases qui durent.
                </p>

                <p className="text-muted leading-relaxed">
                    Je tire l'IA vers la valeur réelle plutôt que la démo, et je pousse les équipes
                    vers l'autonomie technique pour que la qualité reste après mon départ.
                </p>
            </div>
        </div>
    </section>
);

export default News;
