"use client";
import html from "@/assets/tech/html.png";
import css from "@/assets/tech/css.png";
import javascript from "@/assets/tech/javascript.png";

import reactjs from "@/assets/tech/React-Dark.png";
import Redux from "@/assets/tech/redux.png";

import nodejs from "@/assets/tech/node.webp";

import postgresql from "@/assets/tech/postgresql.png";
import git from "@/assets/tech/git.png";
import figma from "@/assets/tech/figma.png";
import java from "@/assets/tech/java.png";
import python from "@/assets/tech/py.png";
import github from "@/assets/tech/Github-Dark.png";
import eslint from "@/assets/tech/eslint.png";

import Arduino from "@/assets/tech/Arduino.png";
import Bootstrap from "@/assets/tech/Bootstrap.png";
import C from "@/assets/tech/C.png";
import Firebase from "@/assets/tech/Firebase-Dark.png";
import Flask from "@/assets/tech/Flask-Dark.png";
import GithubDark from "@/assets/tech/Github-Dark.png";
import Matlab from "@/assets/tech/Matlab-Dark.png";
import NextJS from "@/assets/tech/NextJS-Dark.png";
import PyCharm from "@/assets/tech/PyCharm-Dark.png";
import ReactDark from "@/assets/tech/React-Dark.png";

import TailwindCSSDark from "@/assets/tech/TailwindCSS-Dark.png";
import TypeScriptSVG from "@/assets/tech/typeScript.png";
import vite from "@/assets/tech/Vite-Dark.png";
import vscode from "@/assets/tech/VSCode-Dark.png";
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: Redux,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
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
    name: "ESLint",
    icon: eslint,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Arduino",
    icon: Arduino,
  },
  {
    name: "Bootstrap",
    icon: Bootstrap,
  },
  {
    name: "C Language",
    icon: C,
  },
  {
    name: "Firebase",
    icon: Firebase,
  },
  {
    name: "Flask",
    icon: Flask,
  },
  {
    name: "GitHub Dark",
    icon: GithubDark,
  },
  {
    name: "Matlab",
    icon: Matlab,
  },
  {
    name: "NextJS",
    icon: NextJS,
  },
  {
    name: "PyCharm",
    icon: PyCharm,
  },
  {
    name: "React Dark",
    icon: ReactDark,
  },

  {
    name: "Tailwind CSS",
    icon: TailwindCSSDark,
  },
  {
    name: "TypeScript",
    icon: TypeScriptSVG,
  },
  {
    name: "vite",
    icon: vite,
  },
  {
    name: "vscode",
    icon: vscode,
  },
];
