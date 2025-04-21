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





const App = () => {
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