import SectionHeader from './SectionHeader';
import {CONTACT_MAILTO} from '../constants';

type Testimonial = {
    quote: string;
    author: string;
    role: string;
} | null;

// Remplacer un null par { quote, author, role } pour publier un témoignage.
const testimonials: Testimonial[] = [null, null, null];

const Testimonials = () => (
    <section id="temoignages" className="py-24 border-t border-hairline scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
                eyebrow="// références"
                title="Ils ont travaillé avec moi"
            />

            <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) =>
                    testimonial ? (
                        <figure
                            key={index}
                            className="border border-hairline rounded-md bg-white p-8"
                        >
                            <blockquote className="text-ink leading-relaxed mb-6">
                                « {testimonial.quote} »
                            </blockquote>
                            <figcaption>
                                <p className="font-medium text-ink">{testimonial.author}</p>
                                <p className="font-mono text-xs text-muted mt-1">{testimonial.role}</p>
                            </figcaption>
                        </figure>
                    ) : (
                        <div
                            key={index}
                            className="border border-dashed border-hairline rounded-md p-8"
                        >
                            <p className="font-mono text-xs text-muted">// témoignage — à venir</p>
                        </div>
                    )
                )}
            </div>

            <p className="text-sm text-muted mt-8">
                Références disponibles sur demande —{' '}
                <a href={CONTACT_MAILTO} className="text-accent hover:text-accent-dark transition-colors">
                    écrivez-moi
                </a>
                .
            </p>
        </div>
    </section>
);

export default Testimonials;
