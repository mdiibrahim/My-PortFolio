"use client";
import { motion } from "framer-motion";
import { staggerContainer, styles } from "./motion";

// This is the HOC with types for Component and idName
const SectionWrapper = <P extends object>(
  Component: React.ComponentType<P>, // Type for the component
  idName: string // Type for the section ID name
) => {
  // Return a new functional component that wraps the passed component
  return function HOC(props: P) {
    return (
      <motion.section
        variants={staggerContainer(0.1, 0.2)} // Stagger animation
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component {...props} />
      </motion.section>
    );
  };
};

export default SectionWrapper;
