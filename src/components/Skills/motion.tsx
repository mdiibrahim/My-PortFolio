"use client";
import html from "@/assets/tech/html.png";
import css from "@/assets/tech/css.png";
import javascript from "@/assets/tech/javascript.png";
import mongoDB from "@/assets/tech/MongoDB_ForestGreen.png";
import reactjs from "@/assets/tech/React-Dark.png";
import expressJs from "@/assets/tech/Express.png";
import Redux from "@/assets/tech/redux.png";

import nodejs from "@/assets/tech/node.webp";

import typeScript from "@/assets/tech/typeScript-dark.png";

import java from "@/assets/tech/java.png";
import python from "@/assets/tech/py.png";

import Flask from "@/assets/tech/Flask-Dark.png";
import C from "@/assets/tech/C.png";
import NextJS from "@/assets/tech/NextJS-Dark.png";

import TailwindCSSDark from "@/assets/tech/TailwindCSS-Dark.png";

export const textVariant = (delay: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren: number,
  delayChildren: number
) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const styles = {
  innerWidth: "2xl:max-w-[1280px] w-full",
  interWidth: "lg:w-[80%] w-[100%]",

  paddings: "sm:p-16 xs:p-8 px-6 py-12",
  yPaddings: "sm:py-16 xs:py-8 py-12",
  xPaddings: "sm:px-16 px-6",
  topPaddings: "sm:pt-16 xs:pt-8 pt-12",
  bottomPaddings: "sm:pb-16 xs:pb-8 pb-12",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-start items-start",
  flexEnd: "flex justify-end",
  navPadding: "pt-[98px]",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-secondary lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[90px] mt-2",
  heroSubText:
    "text-secondary font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-secondary font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] ",
  sectionHeadTextLight:
    "text-secondary font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] ",
  sectionSubText:
    "sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold ",
  sectionSubTextLight:
    "sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold ",
};

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "typeScript",
    icon: typeScript,
  },
  {
    name: "mongoDB",
    icon: mongoDB,
  },
  {
    name: "ExpressJs",
    icon: expressJs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "NextJS",
    icon: NextJS,
  },
  {
    name: "Redux",
    icon: Redux,
  },

  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },

  {
    name: "Flask",
    icon: Flask,
  },
  {
    name: "C Language",
    icon: C,
  },

  {
    name: "Tailwind CSS",
    icon: TailwindCSSDark,
  },
];
