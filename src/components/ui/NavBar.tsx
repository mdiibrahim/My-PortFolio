"use client";
import React, { useState } from "react";
import Link from "next/link";
import menu from "@/assets/menu.svg";
import close from "@/assets/close.svg";
import logo from "@/assets/logo/logo.webp";
import Image from "next/image.js";
import { styles } from "../Skills/motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 sm:opacity-[0.97] xxs:h-[12vh]`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/" // Corrected Link for logo to navigate to the homepage
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src={logo} // your logo comes here
            alt="logo"
            className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain"
          />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-secondary" : ""
              } hover:text-taupe text-[21px] font-medium 
              uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}
            >
              <Link href={`#${nav.id}`}>{nav.title}</Link>{" "}
              {/* Corrected Link */}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-primary opacity-[0.98] absolute top-0 left-0 w-full h-full z-10 flex-col items-start`}
        >
          <div className="flex justify-end w-full">
            <Image
              src={close}
              alt="close"
              className="w-[22px] h-[22px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          </div>
          <ul className="list-none flex flex-col items-start justify-start mt-[4rem] ml-6 space-y-8">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-black" : "text-white"
                } text-[28px] font-bold uppercase tracking-[1px] cursor-pointer`}
                onClick={() => {
                  setToggle(false); // Close menu after click
                  setActive(nav.title);
                }}
              >
                <Link href={`#${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
