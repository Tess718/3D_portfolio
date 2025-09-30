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
import SmoothFollower from './components/SmoothFollower';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Only initialize Lenis after loading is complete
    if (loading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Sync Lenis with ScrollTrigger
    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    // Refresh ScrollTrigger after a brief delay to ensure DOM is ready
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      clearTimeout(refreshTimer);
      lenis.destroy();
    };
  }, [loading]); // Add loading as dependency

  return (
    <>
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          // Recalc ScrollTrigger after preloader exits
          setTimeout(() => {
            ScrollTrigger.refresh();
          }, 100);
        }}
      >
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!loading && (
        <div>
          <Navbar />
          <SmoothFollower />
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