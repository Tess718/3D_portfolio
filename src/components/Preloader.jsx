import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import TextType from './TextType';
import CountUp from 'react-countup';

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
      className="loader-wrapper relative h-dvh w-dvw grid place-content-center bg-black z-100 overflow-hidden"
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
          className="lg:text-[60px] md:text-5xl sm:text-5xl font-bold uppercase"
        />
      )}

      <div className="absolute bottom-10 lg:right-20 right-10 lg:text-[150px] md:text-6xl text-6xl font-black text-white">
        <CountUp end={100} duration={2} />
      </div>
    </motion.div>
  );
};

export default Preloader;
