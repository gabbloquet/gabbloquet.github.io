import { Link } from 'react-router';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
            <div className="text-center max-w-2xl mx-auto">
                <div className="mb-8">
                    <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        404
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Page introuvable
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Oups ! La page que tu cherches semble avoir disparu dans les méandres du web.
                    Peut-être qu'elle n'a jamais existé, ou alors elle fait une pause café ☕
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <Link
                        to="/"
                        className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                        <Home size={20} />
                        <span>Retour à l'accueil</span>
                    </Link>

                    <Link
                        to="/blog"
                        className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 hover:shadow-lg transition-all duration-300"
                    >
                        <Search size={20} />
                        <span>Explorer le blog</span>
                    </Link>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Suggestions</h3>
                    <ul className="space-y-2 text-left">
                        <li className="flex items-center space-x-2 text-gray-600">
                            <ArrowLeft size={16} className="text-blue-500" />
                            <span>Utilise le bouton retour de ton navigateur</span>
                        </li>
                        <li className="flex items-center space-x-2 text-gray-600">
                            <ArrowLeft size={16} className="text-blue-500" />
                            <span>Vérifie l'URL dans la barre d'adresse</span>
                        </li>
                        <li className="flex items-center space-x-2 text-gray-600">
                            <ArrowLeft size={16} className="text-blue-500" />
                            <span>Explore mes projets et articles</span>
                        </li>
                    </ul>
                </div>

                <div className="mt-12 text-gray-500">
                    <p className="text-sm">
                        Si tu penses qu'il s'agit d'une erreur, n'hésite pas à{' '}
                        <Link to="/#contact" className="text-blue-600 hover:text-blue-700 font-medium">
                            me contacter
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;