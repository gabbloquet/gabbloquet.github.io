import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      url: 'https://github.com/gabbloquet',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/gabin-bloquet',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      url: 'mailto:gabin.bloquet.pro@gmail.com',
      label: 'Email'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Gabin Bloquet
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              CTO & entrepreneur tech. Je construis des produits et accompagne les équipes vers l'excellence.
            </p>
            <p className="text-gray-400 text-sm italic mb-6">
              Quand je ne code pas, je cours, je roule, je marche ou je gratte ma guitare.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-110"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { id: 'accueil', label: 'Accueil' },
                { id: 'apropos', label: 'À propos' },
                { id: 'projets', label: 'Projets' },
                { id: 'cv', label: 'CV' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>Lille, France</p>
              <a 
                href="mailto:gabin.bloquet.pro@gmail.com" 
                className="hover:text-white transition-colors block"
              >
                gabin.bloquet.pro@gmail.com
              </a>
              <a 
                href="tel:+33123456789" 
                className="hover:text-white transition-colors block"
              >
                +33 7 62 69 93 16
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Gabin Bloquet. Tous droits réservés.
          </p>
          <p className="text-gray-400 text-sm flex items-center space-x-1">
            <span>Fait avec</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>et un peu de café ☕</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;