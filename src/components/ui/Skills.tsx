"use client";
import { motion } from "framer-motion";

import { styles, technologies, textVariant } from "../Skills/motion";
import SectionWrapper from "../Skills/SectionWrapper";
import BallCanvas from "../Skills/Ball";

const Tech = () => {
  return (
    <div id="skills">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
