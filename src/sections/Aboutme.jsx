import React from 'react'
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import TitleHeader from '../components/TitleHeader';

const Aboutme = () => {

    const splitTypesRef = useRef([]);

  useEffect(() => {
    splitTypesRef.current.forEach((word) => {
       const text = new SplitType(word, { types: 'words' });
   
       gsap.fromTo(text.words, {
         opacity: 0.3, 
       }, {
         opacity: 1, 
         scrollTrigger: {
           trigger: word,
           start: 'top 90%', 
           end: 'bottom 50%', 
           scrub: true,
           markers: false,
           immediateRender: false
         },
         stagger: 0.1
       });
    });
   }, []);
   
   
   

  return (
    <section id='about' className='px-5 md:px-20'>
        <div className="">
            <TitleHeader
                title="About Me"
                sub="👋 Who Am I?"
                centered={false}
            />
            <div className="flex justify-between items-center flex-col md:flex-row max-sm:gap-10 pt-5">
                <div className='basis-[60%]'>
                    <p className='text-2xl' ref={(el) => (splitTypesRef.current[0] = el)}>I am a dedicated web developer with over two years of hands-on experience, having honed my skills and gained valuable insights during my employment at Sunmence solutions. In this professional journey, I actively contributed to real-world projects, collaborating with talented teams to deliver cutting-edge solutions. My role included translating design concepts into efficient, responsive, and user-friendly websites. I thrive on problem-solving and enjoy the challenge of creating robust and scalable code.</p>

                    <a href="/Liasu-Teslim-Omobobola-Resume.pdf" download="">
                      <button className="text-black rounded-xl bg-white px-8 py-3 font-semibold cursor-pointer mt-10 hover:bg-zinc-900 hover:text-white">Download Resume</button>
                    </a>
                </div>
                <div className='basis-[30%]'>
                    <img src="/images/circulartext.png" className='ml-auto animate-spin360' alt="" />
                </div>

            </div>

        </div>
    </section>
  )
}

export default Aboutme