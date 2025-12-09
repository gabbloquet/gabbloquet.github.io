import {Bike, BookOpen, Code2, Guitar} from 'lucide-react';

const About = () => {
    const passions = [
        {
            id: 'tech',
            icon: Code2,
            title: '#Tech',
            emoji: '💻',
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'bg-blue-50',
            content: (
                <>
                    <p className="mb-3">
                        <strong>Software Engineer</strong> dans l'âme, inspiré par le mouvement{' '}
                        <em>Software Craftsmanship</em> : professionnalisme, pragmatisme et fierté du travail bien fait.
                    </p>
                    <p className="text-gray-500">
                        Mon ambition ? Produire du code de qualité — maintenable, extensible, compréhensible —
                        quel que soit le domaine. Front, back, ops... toujours avec le sens métier en tête.
                    </p>
                </>
            )
        },
        {
            id: 'sport',
            icon: Bike,
            title: '#Sport',
            emoji: '🏃‍♂️',
            color: 'from-green-500 to-emerald-500',
            bgColor: 'bg-green-50',
            content: (
                <>
                    <p className="mb-3">
                        Pratique quasi quotidienne ! Tennis, football, basketball, tennis de table...
                        J'ai touché à beaucoup de disciplines.
                    </p>
                    <p className="text-gray-500">
                        Aujourd'hui, c'est surtout <strong>course à pied et cyclisme</strong>,
                        avec des sessions de raquette ou foot de temps en temps.
                    </p>
                </>
            )
        },
        {
            id: 'musique',
            icon: Guitar,
            title: '#Musique',
            emoji: '🎸',
            color: 'from-purple-500 to-pink-500',
            bgColor: 'bg-purple-50',
            content: (
                <>
                    <p className="mb-3">
                        <strong>10 ans d'école de musique</strong> pour comprendre cet art.
                        Je joue de la guitare classique et électrique.
                    </p>
                    <p className="text-gray-500">
                        Comme le sport, la musique est un moyen d'expression et d'évasion.
                        J'essaie d'en faire chaque semaine.
                    </p>
                </>
            )
        },
        {
            id: 'culture',
            icon: BookOpen,
            title: '#Culture',
            emoji: '📚',
            color: 'from-orange-500 to-amber-500',
            bgColor: 'bg-orange-50',
            content: (
                <>
                    <p className="mb-3">
                        J'aime <strong>apprendre et comprendre</strong>. Me forger une opinion,
                        confronter mes idées lors de longues discussions.
                    </p>
                    <p className="text-gray-500">
                        Histoire, économie, politique, science, théologie...
                        Ce que j'aime par-dessus tout, c'est l'échange.
                    </p>
                </>
            )
        }
    ];

    return (
        <section id="passions" className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Au-delà du code
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Ce qui me passionne et me définit
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {passions.map((passion) => {
                        const Icon = passion.icon;

                        return (
                            <div
                                key={passion.id}
                                className={`${passion.bgColor} rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-xl bg-linear-to-br ${passion.color} text-white shrink-0`}>
                                        <Icon size={24}/>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                            {passion.title}
                                            <span>{passion.emoji}</span>
                                        </h3>
                                        <div className="text-gray-600 leading-relaxed">
                                            {passion.content}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default About;