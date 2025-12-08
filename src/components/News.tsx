import {Briefcase, Heart, Sparkles} from 'lucide-react';

const News = () => {
    return (
        <section id="apropos" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        En quelques mots
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"/>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Qui je suis */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <Heart className="text-blue-600" size={24}/>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Ce qui me passionne</h3>
                        </div>

                        <p className="text-gray-600 leading-relaxed">
                            La <strong className="text-gray-800">qualité</strong>, la co-création avec les utilisateurs,
                            les débats techniques, l'architecture logicielle, la séparation des responsabilités...
                            En bref, tout ce qui rend le code <strong className="text-gray-800">lisible, maintenable et évolutif</strong>.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Je m'inscris dans les mouvements{' '}
                            <span className="font-semibold text-blue-600">Software Craftsmanship</span> et{' '}
                            <span className="font-semibold text-purple-600">Agile</span>, avec un intérêt particulier
                            pour <em>Accelerate</em>, la culture <strong className="text-gray-800">DevOps</strong>,
                            et l'exploitation intelligente de <strong className="text-gray-800">l'IA</strong> pour accélérer sans compromettre.
                        </p>

                        <div className="flex items-center gap-3 mt-6 mb-4">
                            <div className="p-2 bg-purple-100 rounded-lg">
                                <Sparkles className="text-purple-600" size={24}/>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Mon approche</h3>
                        </div>

                        <p className="text-gray-600 leading-relaxed">
                            Je construis des produits avec une <strong className="text-gray-800">exigence craft</strong>.
                            Je pousse les équipes vers l'autonomie technique et l'excellence.
                            Mon objectif : <strong className="text-gray-800">shipper vite, shipper bien</strong>.
                        </p>
                    </div>

                    {/* Mon actualité */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-green-100 rounded-lg">
                                <Briefcase className="text-green-600" size={24}/>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Actuellement</h3>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-violet-50 rounded-2xl p-6 border border-gray-100">
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src="https://justiana.fr/wp-content/uploads/2025/01/justiana_avec_baseline.svg"
                                    alt="Justiana"
                                    className="h-10 object-contain"
                                />
                                <div>
                                    <p className="font-bold text-gray-900">Cofondateur & CTPO</p>
                                    <p className="text-sm text-gray-500">SaaS pour élus CSE</p>
                                </div>
                            </div>

                            <p className="text-gray-600 leading-relaxed mb-4">
                                Je pilote la <strong className="text-gray-800">vision produit</strong>, l'UX et la stratégie technique.
                                De l'idée au déploiement, je construis une plateforme pensée pour ses utilisateurs.
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {['Product', 'Architecture', 'IA', 'Full-stack', 'UX'].map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-100">
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src="https://static.wixstatic.com/media/9afb61_15801a1006a44f1c82943a19d482c5f0~mv2.png/v1/crop/x_227,y_264,w_1466,h_337/fill/w_400,h_92,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1.png"
                                    alt="Legipilot"
                                    className="h-8 object-contain"
                                />
                                <div>
                                    <p className="font-bold text-gray-900">Chief Technical Officer</p>
                                    <p className="text-sm text-gray-500">SaaS pour RH et dirigeants TPE/PME</p>
                                </div>
                            </div>

                            <p className="text-gray-600 leading-relaxed mb-4">
                                Plateforme d'<strong className="text-gray-800">assistance juridique intelligente</strong>.
                                Simplifier l'accès au droit grâce à l'IA.
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {['Management', 'Architecture', 'IA', 'Tech Lead', 'Full-stack'].map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;