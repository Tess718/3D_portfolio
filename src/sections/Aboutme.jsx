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
    <section id="about" className="px-5 md:px-20">
      <div className="">
        <TitleHeader title="About Me" sub="👋 Who Am I?" centered={false} />
        <div className="flex justify-between items-center flex-col lg:flex-row gap-10 lg:gap-0 pt-5">
          <div className="basis-[60%]">
            <p
              className="md:text-xl text-lg"
              ref={(el) => (splitTypesRef.current[0] = el)}
            >
              I’m a frontend developer with over three years of experience
              building responsive, accessible, and user-focused web interfaces.
              I work mostly with JavaScript, React, Next.js, and Tailwind CSS,
              and I enjoy turning designs into clean, usable products that feel
              good to interact with. Most of my experience has been in building
              dashboards, landing pages, and web applications for different
              types of businesses. I care a lot about writing maintainable code,
              paying attention to details, and making sure what I build actually
              solves real problems for users. I’m always looking to grow by
              working on real products with thoughtful teams, learning from
              feedback, and improving my craft. I’m especially interested in
              opportunities where I can contribute long term, take ownership of
              features, and continue developing as a frontend engineer. When I’m
              not coding, I’m usually exploring new frontend patterns, improving
              existing projects, or refining my portfolio.
            </p>

            <a href="/Teslim-Liasu-Resume.pdf" download="">
              {/* <button className="text-black rounded-xl bg-white px-8 py-3 font-semibold cursor-pointer mt-10 hover:bg-[#2a2e2e] hover:text-white">Download Resume</button> */}
              <button>
                <div className="cta-button group md:w-80 w-60 mt-10">
                  <div className="bg-circle" />
                  <p className="text max-sm:text-sm">Download Resume</p>
                  <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow" />
                  </div>
                </div>
              </button>
            </a>
          </div>
          <div className="basis-[30%]">
            <img
              src="/images/circulartext.png"
              className="ml-auto animate-spin360"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutme