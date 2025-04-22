import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import Navbar from './components/Navbar'
import Aboutme from './sections/Aboutme'
import Featurecards from './sections/Featurecards'
import Techstack from './sections/Techstack'
import Contact from './sections/Contact'
import Preloader from './components/Preloader'
import Footer from './sections/Footer'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';






const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: false,  
    });
  }, []);
  return (
    <div>
      <Preloader/>
      <Navbar/>
      <Hero/>
      <ShowcaseSection/>
      <Aboutme/>
      <Featurecards/>
      <Techstack/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App