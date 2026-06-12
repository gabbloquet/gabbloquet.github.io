import {Mail} from 'lucide-react';
import {Link} from 'react-router';
import {GithubIcon, LinkedinIcon} from './icons';
import {EMAIL, GITHUB_URL, LINKEDIN_URL, LOCATION, PHONE_DISPLAY, PHONE_HREF} from '../constants';

const socialLinks = [
  {icon: GithubIcon, url: GITHUB_URL, label: 'GitHub'},
  {icon: LinkedinIcon, url: LINKEDIN_URL, label: 'LinkedIn'},
  {icon: Mail, url: `mailto:${EMAIL}`, label: 'Email'}
];

const navLinks = [
  {id: 'services', label: 'Services'},
  {id: 'projets', label: 'Études de cas'},
  {id: 'competences', label: 'Compétences'},
  {id: 'cv', label: 'Parcours'},
  {id: 'contact', label: 'Contact'}
];

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-xl font-semibold mb-4">Gabin Bloquet</h3>
            <p className="text-paper/70 mb-2 leading-relaxed">
              CTO & Architecte — produits SaaS augmentés par l'IA.
            </p>
            <p className="font-mono text-xs text-paper/50 mb-4">
              // je build des systèmes qui tiennent en production, pas des démos.
            </p>
            <p className="text-paper/50 text-sm italic mb-6">
              Quand je ne code pas, je cours, je roule, je marche ou je gratte ma guitare.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper/60 hover:text-paper transition-colors"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-xs text-paper/50 mb-4">navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-paper/70 hover:text-paper transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <Link to="/blog" className="text-paper/70 hover:text-paper transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-mono text-xs text-paper/50 mb-4">contact</h4>
            <div className="space-y-2 text-paper/70">
              <p>{LOCATION}</p>
              <a
                href={`mailto:${EMAIL}`}
                className="hover:text-paper transition-colors block break-all"
              >
                {EMAIL}
              </a>
              <a href={PHONE_HREF} className="hover:text-paper transition-colors block">
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-paper/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-paper/50 text-sm">
            © 2026 Gabin Bloquet. Tous droits réservés.
          </p>
          <p className="font-mono text-xs text-paper/50">
            fait avec soin — et un peu de café ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
