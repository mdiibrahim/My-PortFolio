"use client";
import html from "@/assets/tech/html.png";
import css from "@/assets/tech/css.png";
import javascript from "@/assets/tech/javascript.png";
import typescript from "@/assets/tech/typescript.png";
import reactjs from "@/assets/tech/reactjs.png";
import redux from "@/assets/tech/redux.png";
import tailwind from "@/assets/tech/tailwind.png";
import nodejs from "@/assets/tech/nodejs.png";
import rubyrails from "@/assets/tech/rubyrails.png";
import graphql from "@/assets/tech/graphql.png";
import postgresql from "@/assets/tech/postgresql.png";
import git from "@/assets/tech/git.png";
import figma from "@/assets/tech/figma.png";
import docker from "@/assets/tech/docker.png";
export const textVariant = (delay) => {
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

export const staggerContainer = (staggerChildren, delayChildren) => {
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
    "font-black text-eerieBlack lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[90px] mt-2",
  heroSubText:
    "text-eerieBlack font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-eerieBlack font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins",
  sectionHeadTextLight:
    "text-timberWolf font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins",
  sectionSubText:
    "sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold font-poppins",
  sectionSubTextLight:
    "sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold font-poppins",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Rails",
    icon: rubyrails,
  },
  {
    name: "graphql",
    icon: graphql,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];
