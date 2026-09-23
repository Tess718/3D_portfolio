"use client";
import Image from "next/image";
import { StickyCardsData } from "../../constants";
import { useRef } from "react";
import { track } from "@vercel/analytics";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const StickyCards = () => {
  const container = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useGSAP(
    () => {
      const stickyCards = document.querySelectorAll(".sticky-card");

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px)", // medium and up
          isMobile: "(max-width: 768px)", // small screens
        },
        (context) => {
          const { isDesktop } = context.conditions;

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
              });
            }

            if (index < stickyCards.length - 1) {
              ScrollTrigger.create({
                trigger: stickyCards[index + 1],
                start: "top bottom",
                end: "top top",
                onUpdate: (self) => {
                  if (!isMobile) {
                    const progress = self.progress;
                    const scale = 1 - progress * 0.25;
                    const rotation = (index % 2 === 0 ? 5 : -5) * progress;
                    const afterOpacity = progress;

                    gsap.set(card, {
                      scale,
                      rotation,
                      "--after-opacity": afterOpacity,
                    });
                  }
                },
              });
            }
          });
        },
      );
    },
    { scope: container },
  );

  return (
    <section
      id="work"
      className="sticky-cards max-sm:items-center"
      ref={container}
    >
      {StickyCardsData.map((cardData, index) => (
        <div
          className="sticky-card md:px-16 md:py-10 p-5 h-[650px] lg:h-svh flex items-center justify-center"
          key={index}
        >
          <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-14 items-stretch justify-between">
            {/* LEFT COLUMN: Number at top, Description + Tech Stack Tags grouped at bottom */}
            <div className="lg:w-[45%] flex flex-col justify-between order-2 lg:order-1">
              <div>
                <h1 className="hidden lg:block lg:text-8xl text-4xl font-semibold tracking-tight">
                  ({cardData.index})
                </h1>
              </div>

              {/* Bottom group: Description + Tags */}
              <div className="flex flex-col gap-4 mt-6 lg:mt-0">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-wider font-semibold opacity-75">
                    (About the Project)
                  </p>
                  <p className="text-sm lg:text-base leading-relaxed text-white-50 opacity-90">
                    {cardData.description}
                  </p>
                </div>

                {/* Tech Stack Tags with button radius (rounded-lg) */}
                {cardData.tags && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {cardData.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-[#2a2e2e] border border-[#3a3e3e] py-1.5 px-3 rounded-lg text-xs text-white-50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN: Number (mobile) + Title row + Image Preview */}
            <div className="lg:w-[55%] flex flex-col justify-between order-1 lg:order-2 gap-3 lg:gap-4">
              {/* Number on top on mobile on its own line */}
              <div className="lg:hidden">
                <span className="text-2xl sm:text-3xl font-semibold tracking-tight opacity-75">
                  ({cardData.index})
                </span>
              </div>

              {/* Title row */}
              <div className="flex items-center justify-between">
                <h2 className="lg:text-4xl text-2xl font-semibold tracking-tight">
                  {cardData.title}
                </h2>
                <a
                  href={cardData.link}
                  rel="noreferrer"
                  target="_blank"
                  className="p-1 hover:scale-110 transition-transform"
                  onClick={() =>
                    track("project_link_click", {
                      project: cardData.title,
                      location: "projects",
                    })
                  }
                >
                  <ExternalLink className="size-5 lg:size-6" />
                </a>
              </div>

              {/* Image strictly adhering to the 5/3 aspect ratio */}
              <div className="relative w-full aspect-[5/3] rounded-xl overflow-hidden border border-[#3a3e3e]">
                <Image
                  src={cardData.image}
                  alt={cardData.title}
                  className="rounded-xl object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default StickyCards;
