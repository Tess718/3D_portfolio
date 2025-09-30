import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from './sections/Hero';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Aboutme from './sections/Aboutme';
import Featurecards from './sections/Featurecards';
import Techstack from './sections/Techstack';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!loading && (
        <div>
          <Navbar />
          <Hero />
          <Projects />
          <Aboutme />
          <Featurecards />
          <Experience />
          <Techstack />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
