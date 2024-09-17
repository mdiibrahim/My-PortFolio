"use client";

import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full h-[100px] bg-grayscale-950 flex justify-center items-center gap-3 p-6">
        <a href="https://github.com/bl33h" target="_blank" rel="noreferrer">
          <FaGithub className="text-3xl text-grayscale-25 hover:text-primary-200 hover:scale-[1.1] transition-all duration-75" />
        </a>
        <a
          href="mailto:sarap.echeverria@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope className="text-3xl text-grayscale-25 hover:text-primary-200 hover:scale-[1.1] transition-all duration-75" />
        </a>
        <a
          href="https://www.linkedin.com/in/saraech"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-3xl text-grayscale-25 hover:text-primary-200 hover:scale-[1.1] transition-all duration-75" />
        </a>
      </div>
      <div className="bg-grayscale-950 flex justify-center pb-4 text-primary-200">
        <span>
          Made by <em>Sara Echeverría (bl33h)</em>
        </span>
      </div>
    </div>
  );
};

export default Footer;
