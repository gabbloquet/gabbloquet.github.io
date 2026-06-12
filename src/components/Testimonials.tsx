import {useEffect, useState} from 'react';
import {ChevronLeft, ChevronRight} from 'lucide-react';
import SectionHeader from './SectionHeader';
import {LINKEDIN_URL} from '../constants';

type Testimonial = {
    quote: string;
    author: string;
    role: string;
    meta: string;
};

// Extraits verbatim des recommandations LinkedIn.
const testimonials: Testimonial[] = [
    {
        quote: 'Cela fait six mois que Gabin nous accompagne comme CTO à temps partagé. Il a fait un boulot solide et structurant sur la conception et la mise en place de notre SaaS, en posant des fondations techniques robustes et performantes. Ses choix technologiques sont toujours réfléchis, pragmatiques et orientés long terme. Je le recommande sans hésiter.',
        author: 'Marin de Surirey',
        role: 'Co-fondateur & CEO, Legipilot',
        meta: '// via linkedin · client'
    },
    {
        quote: 'Il possède une forte expertise technique qui fait de lui un repère pour toute l\'équipe (produit, design, tech). Il sait prendre en main des sujets complexes, challenger le business mais aussi faire en sorte que l\'architecture d\'un produit soit adaptée à son utilisation. Sur l\'aspect humain, il fédère et rassemble par l\'exemple.',
        author: 'Antoine Deloy',
        role: 'Senior Software Engineer · Tech Lead',
        meta: '// via linkedin'
    },
    {
        quote: 'Il m\'a permis de découvrir de nombreux principes et rituels d\'équipe essentiels pour faire avancer rapidement les projets en co-créant au mieux entre tech et design. Il fait preuve d\'une grande capacité d\'adaptation, apportant des propositions pertinentes même pour les projets les plus ambitieux.',
        author: 'Amélie Bracq',
        role: 'Lead Product Designer',
        meta: '// via linkedin'
    },
    {
        quote: 'Il a de bonnes connaissances en software craftsmanship (TDD, BDD et DDD), en architecture (Architecture Onion, Event Sourcing), en agilité et il se fera un plaisir de vous les partager. Ses exigences en termes de qualité et son esprit critique le poussent à se remettre en question et à se challenger.',
        author: 'Audran Landuyt',
        role: 'Développeur Full Stack',
        meta: '// via linkedin'
    },
    {
        quote: 'Je vous le recommande fortement pour ses compétences aussi bien sur la partie front que back, son pragmatisme, son exigence en termes de qualité, sa capacité à aider les autres à monter en compétences… Il est très impliqué dans les sujets qui touchent à l\'architecture. Bref, foncez !',
        author: 'Maxime Pavot',
        role: 'Développeur Full Stack',
        meta: '// via linkedin'
    }
];

const VISIBLE = 3;
const ROTATION_MS = 7000;

const Testimonials = () => {
    const [start, setStart] = useState(0);
    const [paused, setPaused] = useState(false);
    const count = testimonials.length;

    useEffect(() => {
        if (paused || count <= VISIBLE) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const id = window.setInterval(() => {
            setStart((s) => (s + 1) % count);
        }, ROTATION_MS);
        return () => window.clearInterval(id);
    }, [paused, count]);

    const previous = () => setStart((s) => (s - 1 + count) % count);
    const next = () => setStart((s) => (s + 1) % count);

    const visible = Array.from(
        {length: Math.min(VISIBLE, count)},
        (_, i) => testimonials[(start + i) % count]
    );

    return (
        <section id="temoignages" className="py-24 border-t border-hairline scroll-mt-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    eyebrow="// références"
                    title="Ils ont travaillé avec moi"
                />

                <div
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                    onFocusCapture={() => setPaused(true)}
                    onBlurCapture={() => setPaused(false)}
                >
                    <div className="grid md:grid-cols-3 gap-6 items-stretch">
                        {visible.map((testimonial) => (
                            <figure
                                key={testimonial.author}
                                className="border border-hairline rounded-md bg-white p-8 flex flex-col fade-swap md:min-h-96"
                            >
                                <p className="font-mono text-xs text-muted mb-4">{testimonial.meta}</p>
                                <blockquote className="text-ink leading-relaxed mb-6 flex-1">
                                    « {testimonial.quote} »
                                </blockquote>
                                <figcaption>
                                    <p className="font-medium text-ink">{testimonial.author}</p>
                                    <p className="text-sm text-muted mt-1">{testimonial.role}</p>
                                </figcaption>
                            </figure>
                        ))}
                    </div>

                    {count > VISIBLE && (
                        <div className="flex items-center gap-3 mt-8">
                            <button
                                onClick={previous}
                                aria-label="Témoignages précédents"
                                className="p-2 border border-hairline rounded-md text-muted hover:text-accent hover:border-accent transition-colors"
                            >
                                <ChevronLeft size={16}/>
                            </button>
                            <button
                                onClick={next}
                                aria-label="Témoignages suivants"
                                className="p-2 border border-hairline rounded-md text-muted hover:text-accent hover:border-accent transition-colors"
                            >
                                <ChevronRight size={16}/>
                            </button>
                            <p className="font-mono text-xs text-muted ml-2" aria-hidden="true">
                                {String(start + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
                            </p>
                        </div>
                    )}
                </div>

                <p className="text-sm text-muted mt-8">
                    Toutes mes recommandations sont{' '}
                    <a
                        href={`${LINKEDIN_URL}/details/recommendations/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent-dark transition-colors"
                    >
                        sur LinkedIn
                    </a>
                    .
                </p>
            </div>
        </section>
    );
};

export default Testimonials;
