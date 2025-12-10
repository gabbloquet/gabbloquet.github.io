import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, BookOpen, Sparkles } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isBlogPage = location.pathname === '/blog';

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const sections = ['accueil', 'apropos', 'competences', 'projets', 'cv', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'apropos', label: 'À propos' },
    { id: 'competences', label: 'Compétences' },
    { id: 'projets', label: 'Projets' },
    { id: 'cv', label: 'CV' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link
                  to="/"
                  className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
              >
                Gabin Bloquet
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Home page navigation */}
              {isHomePage && (
                  <div className="flex space-x-6">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-blue-600 ${
                                activeSection === item.id
                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                    : 'text-gray-700 hover:border-b-2 hover:border-blue-300'
                            }`}
                        >
                          {item.label}
                        </button>
                    ))}
                  </div>
              )}

              {/* Blog page navigation */}
              {!isHomePage && (
                  <Link
                      to="/"
                      className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Accueil
                  </Link>
              )}

              {/* Blog button - always visible */}
              <Link
                  to="/blog"
                  className={`relative inline-flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 group ${
                      isBlogPage
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                          : 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 hover:from-blue-100 hover:to-purple-100 hover:shadow-md hover:scale-105 border border-blue-200'
                  }`}
              >
                <BookOpen size={16} />
                <span>Blog</span>
                {!isBlogPage && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse">
                      <Sparkles size={8} className="absolute inset-0 m-auto text-white" />
                    </div>
                )}
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
                  aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                  aria-expanded={isOpen}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
              <div className="md:hidden bg-white border-t border-gray-100">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {/* Home navigation for mobile */}
                  {isHomePage && navItems.map((item) => (
                      <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors ${
                              activeSection === item.id
                                  ? 'text-blue-600 bg-blue-50'
                                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                          }`}
                      >
                        {item.label}
                      </button>
                  ))}

                  {/* Blog page navigation for mobile */}
                  {!isHomePage && (
                      <Link
                          to="/"
                          onClick={() => setIsOpen(false)}
                          className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                      >
                        Accueil
                      </Link>
                  )}

                  {/* Blog button for mobile */}
                  <Link
                      to="/blog"
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-2 w-full px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                          isBlogPage
                              ? 'text-blue-600 bg-blue-50'
                              : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                  >
                    <BookOpen size={18} />
                    <span>Blog Tech</span>
                    {!isBlogPage && (
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse ml-auto" />
                    )}
                  </Link>
                </div>
              </div>
          )}
        </div>
      </nav>
  );
};

export default Navigation;