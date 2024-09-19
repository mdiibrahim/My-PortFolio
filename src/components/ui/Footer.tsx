"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import github from "@/assets/tech/Github-Dark.png";
import linkedIn from "@/assets/social/LinkedIn.png";
import twitter from "@/assets/social/twitter.png";
import gmail from "@/assets/social/gmail.png";

const Footer = () => {
  // Define animation variants for smooth effects
  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  // Footer entrance animation
  const footerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="w-full flex flex-col items-center mt-20 shadow-lg bg-grayscale-950"
      initial="hidden"
      whileInView="show"
      variants={footerVariants}
      viewport={{ once: true }} // Triggers the animation only once when the footer is in view
    >
      <div className="w-full h-[100px] flex justify-center items-center gap-6 p-6">
        {/* GitHub Icon */}
        <motion.a
          href="https://github.com/mdiibrahim"
          target="_blank"
          rel="noreferrer"
          whileHover="hover"
        >
          <motion.div variants={iconVariants}>
            <Image
              src={github}
              alt="GitHub"
              width={40}
              height={40}
              className="transition-all duration-150"
            />
          </motion.div>
        </motion.a>

        {/* Gmail Icon */}
        <motion.a
          href="mailto:mdiibrahim549@gmail.com"
          target="_blank"
          rel="noreferrer"
          whileHover="hover"
        >
          <motion.div variants={iconVariants}>
            <Image
              src={gmail}
              alt="Gmail"
              width={40}
              height={40}
              className="transition-all duration-150"
            />
          </motion.div>
        </motion.a>

        {/* LinkedIn Icon */}
        <motion.a
          href="https://www.linkedin.com/in/mdiibrahim/"
          target="_blank"
          rel="noreferrer"
          whileHover="hover"
        >
          <motion.div variants={iconVariants}>
            <Image
              src={linkedIn}
              alt="LinkedIn"
              width={40}
              height={40}
              className="transition-all duration-150"
            />
          </motion.div>
        </motion.a>

        {/* Twitter/X Icon */}
        <motion.a
          href="https://x.com/mdiiibrahim"
          target="_blank"
          rel="noreferrer"
          whileHover="hover"
        >
          <motion.div variants={iconVariants}>
            <Image
              src={twitter}
              alt="Twitter/X"
              width={40}
              height={40}
              className="bg-secondary transition-all duration-150"
            />
          </motion.div>
        </motion.a>
      </div>

      {/* Footer Text with Sweet Message */}
      <div className="flex flex-col items-center justify-center pb-4 text-primary-200">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg font-semibold"
        >
          <em>Mohammad Ibrahim</em>
        </motion.span>

        {/* Sweet message */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-2 text-sm text-primary-400"
        >
          &quot;Striving to turn my dreams into reality, one line of code at a
          time.&quot;
        </motion.span>
      </div>
    </motion.div>
  );
};

export default Footer;
