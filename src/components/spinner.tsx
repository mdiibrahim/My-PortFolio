"use client";
import React from "react";
import { motion } from "framer-motion";

// Define the spinner animation
const spinAnimation = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

// Spinner component
const Spinner = () => {
  return (
    <motion.div
      className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full"
      {...spinAnimation}
    />
  );
};

export default Spinner;
