import SectionHeader from './SectionHeader';
import {CALENDLY_URL, CONTACT_MAILTO, EMAIL, LOCATION, PHONE_DISPLAY, PHONE_HREF} from '../constants';

const Contact = () => (
    <section id="contact" className="py-24 border-t border-hairline scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
                eyebrow="// contact"
                title="Travaillons ensemble"
                lede="Un produit SaaS à construire, un système IA à amener en production, besoin d'un CTO ? Parlons-en."
            />

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 print:hidden">
                <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-accent text-paper font-medium rounded-md hover:bg-accent-dark transition-colors"
                >
                    Réserver un échange
                </a>
                <span className="text-sm text-muted">
                    ou{' '}
                    <a href={CONTACT_MAILTO} className="text-accent hover:text-accent-dark transition-colors">
                        écrivez-moi
                    </a>
                </span>
            </div>

            <dl className="grid sm:grid-cols-3 gap-8 mt-14 border-t border-hairline pt-10">
                <div>
                    <dt className="font-mono text-xs text-muted mb-2">email</dt>
                    <dd>
                        <a
                            href={`mailto:${EMAIL}`}
                            className="text-ink hover:text-accent transition-colors break-all"
                        >
                            {EMAIL}
                        </a>
                    </dd>
                </div>
                <div>
                    <dt className="font-mono text-xs text-muted mb-2">téléphone</dt>
                    <dd>
                        <a href={PHONE_HREF} className="text-ink hover:text-accent transition-colors">
                            {PHONE_DISPLAY}
                        </a>
                    </dd>
                </div>
                <div>
                    <dt className="font-mono text-xs text-muted mb-2">localisation</dt>
                    <dd className="text-ink">
                        {LOCATION}
                        <span className="block text-sm text-muted mt-1">
                            Basé dans le sud de la France
                        </span>
                    </dd>
                </div>
            </dl>
        </div>
    </section>
);

export default Contact;
