import {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router';
import {Menu, X} from 'lucide-react';
import {CALENDLY_URL} from '../constants';

const navItems = [
    {id: 'services', label: 'Services'},
    {id: 'projets', label: 'Études de cas'},
    {id: 'competences', label: 'Compétences'},
    {id: 'apropos', label: 'À propos'},
    {id: 'cv', label: 'Parcours'}
];

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('accueil');
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        if (!isHomePage) return;

        const handleScroll = () => {
            const sections = ['accueil', ...navItems.map((item) => item.id), 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const {offsetTop, offsetHeight} = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage]);

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({behavior: 'smooth'});
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 bg-paper/90 backdrop-blur-md border-b border-hairline z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="font-display font-semibold text-lg text-ink">
                        Gabin Bloquet
                    </Link>

                    {/* Desktop */}
                    <div className="hidden md:flex items-center gap-6">
                        {isHomePage ? (
                            navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`text-sm font-medium transition-colors ${
                                        activeSection === item.id
                                            ? 'text-accent'
                                            : 'text-muted hover:text-ink'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))
                        ) : (
                            <Link
                                to="/"
                                className="text-sm font-medium text-muted hover:text-ink transition-colors"
                            >
                                Accueil
                            </Link>
                        )}

                        <Link
                            to="/blog"
                            className={`text-sm font-medium transition-colors ${
                                location.pathname.startsWith('/blog')
                                    ? 'text-accent'
                                    : 'text-muted hover:text-ink'
                            }`}
                        >
                            Blog
                        </Link>

                        <a
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-accent text-paper text-sm font-medium rounded-md hover:bg-accent-dark transition-colors"
                        >
                            Réserver un échange
                        </a>
                    </div>

                    {/* Mobile */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-md text-ink hover:text-accent transition-colors"
                        aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>

                {isOpen && (
                    <div className="md:hidden border-t border-hairline py-3 space-y-1">
                        {isHomePage ? (
                            navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors ${
                                        activeSection === item.id
                                            ? 'text-accent'
                                            : 'text-muted hover:text-ink'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))
                        ) : (
                            <Link
                                to="/"
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 text-base font-medium text-muted hover:text-ink transition-colors"
                            >
                                Accueil
                            </Link>
                        )}

                        <Link
                            to="/blog"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-base font-medium text-muted hover:text-ink transition-colors"
                        >
                            Blog
                        </Link>

                        <a
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block mx-3 my-2 px-4 py-2 bg-accent text-paper text-center text-base font-medium rounded-md hover:bg-accent-dark transition-colors"
                        >
                            Réserver un échange
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
