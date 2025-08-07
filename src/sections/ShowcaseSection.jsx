import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
    const sectionRef = useRef(null)
    
    useGSAP(() => {
        gsap.fromTo(
            sectionRef.current,
            {opacity: 0}, 
            {opacity: 1, duration: 1.5}
        );

        gsap.utils.toArray(".showcase-card").forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                  y: 50,
                  opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                      trigger: card,
                      start: "top bottom-=100",
                      toggleActions: "play reverse play reverse",
                    },
                  }
              );
          });

        }, { scope: sectionRef });

        const [project, setproject] = useState(true)

  return (
    <section id='work' className="md:pt-[10%] pt-[20%]">
            <TitleHeader 
                title="My Work Showcase"
                sub="💻 Projects I've Worked On"
                centered={true}
            />
        <div className='app-showcase' ref={sectionRef}>

            <div className='w-full'>
                <div className="showcaselayout">
                    <div className="first-project-wrapper showcase-card">
                        <div>
                            <a href="http://devtfitness.netlify.app/"  target="_blank">
                            <img src="/images/project (7).png" className="object-contain" alt="Fitness platform" loading="lazy" />
                            </a>
                        </div>
                        <div className="text-content">
                            <h2>Get fit, stay strong, with workouts, nutrition tips, and progress tracking tools</h2>
                            <p className='text-white-50 md:text-xl'>
                                An app built HTML, CSS & Bootstrap for a fast, user friendly experience
                            </p>
                        </div>
                    </div>
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project showcase-card">
                            <div className=''>
                                <a href="https://tswatchables.netlify.app/" target="_blanck">
                                    <img src="/images/project.png" alt="Movie App" className='image-wrapper bg-[#ffe7eb] py-2' loading="lazy" />
                                </a>
                            </div>
                            <h2>Movie web App</h2>
                        </div>
                        <div className="project showcase-card">
                            <div className='image-wrapper bg-[#ffe7eb] py-2'>
                                <a href="https://tessgetlinked.netlify.app/" target="_blank">
                                <img src="/images/preview.png" alt="Getlinked prehackathon" loading="lazy" />
                                </a>
                            </div>
                            <h2>Getlinked prehackathon</h2>
                        </div>
                    </div>
                </div>
                <div className={`showcasegrid grid grid-cols-1 md:grid-cols-2 gap-5 pt-10 items-stretch ${project ? 'hidden' : 'block'}`}>
                    <div className='project'>
                        <div className="image-wrapper bg-[#ffe7eb] p-5 rounded-xl">
                            <a href="https://fe-mal.netlify.app" target="_blank">
                                <img src="/images/project (2).png" className=' object-fill' alt="Ecommerce" loading="lazy" />
                            </a>
                        </div>
                        <p className="py-5">'Fē,māl - Ecommerce Website</p>
                    </div>
                    <div className='project'>
                        <div className="image-wrapper bg-[#ffe7eb] p-5 rounded-xl">
                            <a href="https://devtsocialbook.netlify.app" target="_blank">
                                <img src="/images/project (1).png" className=' object-fill' alt="Socialbook" loading="lazy" />
                            </a>
                        </div>
                        <p className="py-5">Socialbook - Social Media web app</p>
                    </div>
                    <div className='project'>
                        <div className="image-wrapper bg-[#ffe7eb] p-5 rounded-xl">
                            <a href="https://animately.netlify.app" target="_blank">
                                <img src="/images/project (8).png" className=' object-fill' alt="Animately" loading="lazy" />
                            </a>

                        </div>
                        <p className="py-5">Animately - Online animation learning platform</p>
                    </div>
                    <div className='project'>
                        <div className="image-wrapper bg-[#ffe7eb] p-5 rounded-xl">
                            <a href="https://neebo.netlify.app" target="_blank">
                                <img src="/images/project (9).png"  className=' object-fill' alt="Ecommerce" loading="lazy" />
                            </a>
                        </div>
                        <p className="py-5">Neebo - AI assitant web app</p>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button className="text-black rounded-xl bg-white px-8 py-3 font-semibold cursor-pointer mt-10 hover:bg-zinc-900 hover:text-white" onClick={()=>{setproject(!project)}}>{ project ? 'See more' : 'See less'}</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection