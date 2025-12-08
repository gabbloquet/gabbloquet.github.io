import {ArrowDown, BookOpen, GithubIcon, LinkedinIcon, MailIcon} from 'lucide-react';
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
                 className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 mt-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="animate-fade-in-up">
                    <div className="mb-8">
                        <div
                            className="w-60 h-60 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                                <img src="/assets/img/gabin.png" alt="Photo de Gabin Bloquet"
                                     className="w-full h-full object-cover"/>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Gabin Bloquet
                        </span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-gray-700 mb-4 font-medium">
                        CTO • Crafter • Coach • Speaker
                    </h2>

                    <div className="mb-8">
                        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-300/50 rounded-full text-sm font-medium text-violet-700 backdrop-blur-sm">
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
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
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
                        >
                            <GithubIcon size={24}/>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/gabin-bloquet"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-gray-700 hover:text-blue-600"
                        >
                            <LinkedinIcon size={24}/>
                        </a>
                        <a
                            href="mailto:gabin.bloquet.pro@gmail.com"
                            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-gray-700 hover:text-blue-600"
                        >
                            <MailIcon size={24}/>
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