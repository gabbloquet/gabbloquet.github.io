import { Link } from 'react-router';
import { ArrowLeft, Home, Search } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-paper text-ink font-sans flex items-center justify-center px-4">
            <div className="max-w-xl mx-auto">
                <p className="font-mono text-sm text-accent mb-4">// erreur 404</p>

                <h1 className="font-display text-7xl md:text-8xl font-bold tracking-tight text-ink mb-6">
                    404
                </h1>

                <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-4">
                    Page introuvable
                </h2>

                <p className="text-lg text-muted mb-10 leading-relaxed">
                    La page que vous cherchez n'existe pas — ou n'existe plus.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-paper font-medium rounded-md hover:bg-accent-dark transition-colors"
                    >
                        <Home size={18} />
                        <span>Retour à l'accueil</span>
                    </Link>

                    <Link
                        to="/blog"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-hairline text-ink font-medium rounded-md hover:border-accent hover:text-accent transition-colors"
                    >
                        <Search size={18} />
                        <span>Explorer le blog</span>
                    </Link>
                </div>

                <div className="border-t border-hairline pt-8">
                    <h3 className="font-mono text-xs text-muted mb-4">suggestions</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-muted">
                            <ArrowLeft size={14} className="text-accent" />
                            <span>Utilisez le bouton retour de votre navigateur</span>
                        </li>
                        <li className="flex items-center gap-2 text-muted">
                            <ArrowLeft size={14} className="text-accent" />
                            <span>Vérifiez l'URL dans la barre d'adresse</span>
                        </li>
                        <li className="flex items-center gap-2 text-muted">
                            <ArrowLeft size={14} className="text-accent" />
                            <span>Explorez mes études de cas et articles</span>
                        </li>
                    </ul>
                </div>

                <p className="text-sm text-muted mt-10">
                    Si vous pensez qu'il s'agit d'une erreur,{' '}
                    <Link to="/#contact" className="text-accent hover:text-accent-dark font-medium transition-colors">
                        écrivez-moi
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default NotFound;
