import Button from '../components/Button'
import SplashCursor from '../components/SplashCursor'
import Robot from '../components/Robot'
import {words} from '../constants/index'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Animatedcounter from '../components/Animatedcounter'

const Hero = () => {
  useGSAP(()=> {
    gsap.fromTo('.hero-text h1', {
      y: 50,
      opacity: 0,
    },
   {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 1,
    ease: 'power2.inout',
   },
  )
  })
  return (
    <section id='hero' className='relative overflow-x-hidden'>
        <div className="absolute top-0 left-0 z-10">
            <img src="/images/bg.png" alt="background" />
        </div>
        <SplashCursor/>
        <div className="hero-layout">
            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                <div className="flex flex-col gap-7">
                <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
              <p className='text-white-50 md:text-xl relative z-10 pointer-none:'>Hi, i'm Teslim, a frontend developer based in Nigeria with <br /> a passion for coding</p>
              <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See My Work"
              />
                </div>


            </header>
            
                <div className='hero-3d-layout max-sm:mt-[55%] max-sm:pb-[50%]'>
                  <Robot />
                </div>
        </div>
        <Animatedcounter/>
    </section>
  )
}

export default Hero