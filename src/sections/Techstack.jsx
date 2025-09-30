import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { techStackImgs } from '../constants'
import Tilt from 'react-parallax-tilt';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Techstack = () => {

  useGSAP(() => {
    let mm = gsap.matchMedia();

    // Only run animation on large screens (>= 1024px)
    mm.add("(min-width: 1024px)", () => {
      gsap.fromTo(
        ".tech-card",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
          stagger: 0.2,
          scrollTrigger: {
            trigger: "#skills",
            start: "top center",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => mm.revert(); // cleanup on unmount
  });

  return (
    <div id='skills' className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="🤝 The Skills I Bring To The Table"
          centered={true}
        />

        <div className="tech-grid">
          {techStackImgs.map((icon) => (
            <div
              key={icon.name}
              className='card-border tech-card overflow-hidden xl:rounded-full rounded-lg relative'
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className='tech-icon-wrapper'>
                  <Tilt>
                    <img src={icon.imgPath} alt="" className='w-[150px]' loading='lazy' />
                  </Tilt>
                </div>
                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Techstack
