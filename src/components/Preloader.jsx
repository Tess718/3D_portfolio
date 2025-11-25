import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TextType from "./TextType";
import CountUp from "react-countup";

const Preloader = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 2000); // start text after countUp finishes
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="md:px-20 px-4 relative h-dvh w-dvw grid place-content-center bg-[#555d58] z-150 overflow-hidden"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 1, ease: "easeInOut" } }}
    >
      {showText && (
        <TextType
          text={["Code, pixels, and a little bit of Tess."]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="█"
          className="lg:text-[80px] md:text-4xl text-2xl font-bold uppercase text-start"
        />
      )}

      <div className="absolute bottom-0 pb-10 lg:right-0 right-0 md:pe-20 pe-4 lg:text-[150px] md:text-9xl text-7xl font-black text-white">
        <CountUp end={100} duration={2} suffix="%" />
      </div>
    </motion.div>
  );
};

export default Preloader;
