 import { StickyCardsData } from "../../constants"
  import { useRef } from "react"

  import gsap from "gsap"
  import ScrollTrigger from "gsap/ScrollTrigger"
  import { useGSAP } from "@gsap/react"
  import { ExternalLink } from "lucide-react"
  import { useState } from "react"

  gsap.registerPlugin(ScrollTrigger)

  const StickyCards = () => {

  const container = useRef(null)

  const [isMobile, setIsMobile] = useState(false)

  useGSAP(() => {
  const stickyCards = document.querySelectorAll(".sticky-card")

  const mm = gsap.matchMedia()

  mm.add(
    {
      isDesktop: "(min-width: 768px)", // medium and up
      isMobile: "(max-width: 768px)", // small screens
    },
    (context) => {
      const { isDesktop } = context.conditions

      stickyCards.forEach((card, index) => {
        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: isDesktop ? "top top" : "top top",
            endTrigger: stickyCards[stickyCards.length - 1],
            end: "top top",
            pin: true,
            pinSpacing: false,
            anticipatePin: isDesktop ? 1 : 0,
            fastScrollEnd: isMobile,
            refreshPriority: isMobile ? -1 : 0,
          })
        }

        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: stickyCards[index + 1],
            start: "top bottom",
            end: "top top",
            onUpdate: (self) => {
              if (!isMobile) {
                const progress = self.progress
                const scale = 1 - progress * 0.25
                const rotation = (index % 2 === 0 ? 5 : -5) * progress
                const afterOpacity = progress

                gsap.set(card, {
                  scale,
                  rotation,
                  "--after-opacity": afterOpacity,
                  borderRadius: `${progress * 24}px`, 
                })
              }
            },
          })
        }
      })
    }
  )
}, { scope: container })

      return <section id="work" className="sticky-cards max-sm:items-center" ref={container}>
          {StickyCardsData.map((cardData, index) => (
              <div className="sticky-card md:p-20 p-4 lg:h-full h-svh" key={index}>
                  <div className="sticky-card-index lg:basis-[40%] py-13 lg:py-0">
                      <h1 className="lg:text-8xl text-4xl font-semibold">({cardData.index})</h1>
                  </div>
                  <div className="sticky-card-content basis-[60%]">
                      <div className="sticky-card-content-wrapper">
                        <div className="flex items-center justify-between">
                          <h1 className="sticky-card-header lg:text-5xl text-2xl font-semibold">
                              {cardData.title}
                          </h1>
                          <a href={cardData.link} rel='noreferrer' target='_blank'>
                            <ExternalLink />
                          </a>
                        </div>

                          <div className="sticky-card-image">
                              <img src={cardData.image} alt="project image" className="rounded-lg" />
                          </div>

                          <div className="sticky-card-copy ">
                              <div className="sticky-card-copy-title">
                                  <p>(About the Project)</p>
                              </div>
                              <div className="sticky-card-copy-description">
                                  <p>{cardData.description}</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          ))}
      </section>
  }

  
  

  








  export default StickyCards
