"use client";
import { m } from "framer-motion";

const HeroScroller = () => {
  return (
    <div
      id="scroller"
      className="absolute xs:bottom-10 bottom-12 flex justify-center items-center"
    >
      <a href="#about">
        <div className="w-[40px] h-[80px] rounded-full border-4 border-secondary flex justify-center items-start p-2">
          <m.div
            animate={{
              y: [0, 24, 0], // Smooth bouncing effect
              scale: [1, 1.2, 1], // Scaling effect for bounce
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-4 h-4 rounded-full bg-secondary mb-1"
          />
        </div>
      </a>
    </div>
  );
};

export default HeroScroller;
