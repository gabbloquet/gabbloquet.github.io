import {ArrowDown, BookOpen} from 'lucide-react';
import {Link} from 'react-router';

const Hero = () => {
    const scrollToAbout = () => {
        const element = document.getElementById('apropos');
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <section id="accueil"
                 className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-purple-50 pt-16 mt-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="animate-fade-in-up">
                    <div className="mb-8">
                        <div
                            className="w-60 h-60 mx-auto mb-6 rounded-full bg-linear-to-br from-blue-400 to-purple-600 p-1">
                            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                                <img src="/assets/img/gabin.png" alt="Photo de Gabin Bloquet"
                                     className="w-full h-full object-cover"/>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
                        <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Gabin Bloquet
                        </span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-gray-700 mb-4 font-medium">
                        CTO • Crafter • Coach • Speaker
                    </h2>

                    <div className="mb-8">
                        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-linear-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-300/50 rounded-full text-sm font-medium text-violet-700 backdrop-blur-sm">
                            <span className="animate-pulse">✨</span>
                            AI-Augmented
                        </span>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4 mb-10">
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            Je construis des produits tech et j'accompagne les équipes vers <strong className="text-gray-800">l'excellence</strong>.
                        </p>
                        <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                            Software Craftsmanship & IA — pour livrer de la valeur, <strong className="text-gray-700">rapidement</strong>, sans sacrifier la qualité.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <Link
                            to="/blog"
                            className="px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                        >
                            <BookOpen size={20}/>
                            Lire mes articles
                        </Link>
                        <button
                            onClick={() => document.getElementById('parcours')?.scrollIntoView({behavior: 'smooth'})}
                            className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 hover:shadow-lg transition-all duration-300"
                        >
                            Découvrir mon parcours
                        </button>
                    </div>

                    <div className="flex justify-center space-x-6 mb-12">
                        <a
                            href="https://github.com/gabbloquet"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-gray-700 hover:text-blue-600"
                            aria-label="GitHub"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/gabin-bloquet"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-gray-700 hover:text-blue-600"
                            aria-label="LinkedIn"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                        <a
                            href="mailto:gabin.bloquet.pro@gmail.com"
                            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-gray-700 hover:text-blue-600"
                            aria-label="Email"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="16" x="2" y="4" rx="2"/>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                            </svg>
                        </a>
                    </div>

                    <button
                        onClick={scrollToAbout}
                        className="animate-bounce text-gray-400 hover:text-blue-600 transition-colors"
                    >
                        <ArrowDown size={32}/>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;