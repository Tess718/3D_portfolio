import React from 'react'
import { abilities } from '../constants'
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Featurecards = () => {
    const scrollRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const cards = cardsRef.current;
        
        // Set initial state - cards invisible and translated down
        gsap.set(cards, {
            opacity: 0,
            y: 50
        });

        // Create the scroll-triggered animation with stagger
        gsap.to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2, // 0.2 second delay between each card
            ease: "power2.out",
            scrollTrigger: {
                trigger: scrollRef.current,
                start: "top 80%", // Start animation when top of container is 80% down the viewport
                end: "bottom 20%",
                toggleActions: "play none none reverse" // Play on enter, reverse on leave
            }
        });

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // Function to add card refs to the array
    const addToRefs = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    return (
        <div className='w-full padding-x-lg mt-[10%]' ref={scrollRef}>
            <div className="mx-auto grid-3-cols">
                {abilities.map(({ imgPath, title, desc }, index) => (
                    <div 
                        key={index}
                        ref={addToRefs}
                        className='card-border rounded-xl p-8 flex flex-col gap-4 cursor-pointer'
                    >
                        <div className="size-14 flex items-center justify-center rounded-full">
                            <img src={imgPath} alt={title} />
                        </div>
                        <h3 className='text-white text-2xl font-semibold mt-2'>{title}</h3>
                        <p className='text-white-50 text-lg'>{desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Featurecards