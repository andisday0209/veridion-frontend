import Navigation from './components/Navigation';
import { useScrollReveal } from './hooks/useScrollReveal';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx';
import StatsBar from './components/StatsBar.jsx';
import Solutions from './components/Solutions.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Programs from './components/Programs.jsx';
import Features from './components/Features.jsx';
import Testimonials from './components/Testimonials.jsx'
import Faq from './components/Faq.jsx'
import Contact from './components/Contact.jsx';
import CtaBanner from './components/CtaBanner.jsx';
import Footer from './components/Footer.jsx';

function App() {
    useScrollReveal();

    return (
        <>
            <ScrollProgress />
            <Navigation />

            <main>
                <Hero />
                <Marquee variant="dark" />
                <StatsBar />
                <Marquee variant="orange" reverse />
                <Solutions />
                <HowItWorks />
                <Programs />
                <Features />
                <Testimonials />
                <Faq />
                <Contact />
                <CtaBanner />
            </main>

            <Footer />
        </>
    );
}

export default App;