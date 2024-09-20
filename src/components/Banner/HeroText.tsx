"use client";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const HeroText = () => {
  const [firstLoad, setFirstLoad] = useState(true); // Track the first load
  const name = "IBRAHIM"; // The name text

  // Animation settings
  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Adding a delay for each letter
        type: "spring",
        stiffness: 200,
      },
    }),
  };

  useEffect(() => {
    // This will run only once when the page is loaded or refreshed
    if (firstLoad) {
      const aboutSection = document.querySelector("#about");
      if (aboutSection) {
        // Scroll to the #about section after a delay of 2 seconds to allow animation
        setTimeout(() => {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }, 2000); // Adjust the delay if needed
      }
      setFirstLoad(false); // Ensure it only runs once
    }
  }, [firstLoad]);

  return (
    <div
      className="noselect w-fit h-fit text-primary-200 absolute z-10 flex flex-col justify-center items-center"
      id="hero-text"
    >
      <LazyMotion features={domAnimation} strict>
        <m.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center flex justify-center items-center flex-col opacity-100 text-5xl sm:text-6xl cursor-default" // Reduced overall size
          style={{ lineHeight: "1.1" }}
        >
          {/* Part 1: Hey Cute People */}
          <m.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-primary-400"
          >
            HEY CUTE PEOPLE...
          </m.div>

          {/* Part 2: Looking For */}
          <m.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
            className="text-primary-500 text-4xl sm:text-5xl my-4" // Slightly smaller than the default size
          >
            Looking For Developer
          </m.div>

          {/* Part 3: Ibrahim with larger font size */}
          <m.div className="flex">
            {name.split("").map((char, index) => (
              <m.span
                key={index}
                custom={index}
                initial="hidden"
                animate="show"
                variants={letterAnimation}
                className="text-primary-500 text-6xl sm:text-8xl font-bold" // Larger size for "IBRAHIM"
                style={{ margin: "0 5px" }}
              >
                {char}
              </m.span>
            ))}
            {/* Emoji with fallback font */}
            <m.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
              className="text-primary-500 text-6xl sm:text-8xl font-bold"
              style={{ marginLeft: "10px" }} // Emoji size matching "IBRAHIM"
            >
              😊
            </m.span>
          </m.div>
        </m.h1>
      </LazyMotion>
    </div>
  );
};

export default HeroText;
