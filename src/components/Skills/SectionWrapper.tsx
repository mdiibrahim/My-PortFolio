"use client";
import { motion } from "framer-motion";

import { staggerContainer, styles } from "./motion";

const SectionWrapper = (Component, idName) => {
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  }

  return HOC;
};

export default SectionWrapper;
