import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Skills from './components/Skills';
import News from './components/News';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Home() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        const sections = document.querySelectorAll('section');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-paper text-ink font-sans">
            <Navigation />
            <main>
                <Hero />
                <Services />
                <CaseStudies />
                <Testimonials />
                <Skills />
                <News />
                <Resume />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default Home;
