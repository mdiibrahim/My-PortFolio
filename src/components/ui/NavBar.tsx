"use client";
import React, { useState } from "react";
import Link from "next/link";
import menu from "@/assets/menu.svg";
import close from "@/assets/close.svg";
import logo from "@/assets/logo/logo.webp";
import Image from "next/image.js";

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
  const styles = {
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
      "font-black  lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[90px] mt-2",
    heroSubText:
      " font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

    sectionHeadText:
      " font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] ",
    sectionHeadTextLight:
      " font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] ",
    sectionSubText:
      "sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold ",
    sectionSubTextLight:
      "sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold ",
  };
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
                active === nav.title ? "text-french" : ""
              } hover:text-taupe text-[21px] font-medium font-mova 
              uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}
            >
              <Link href={`#${nav.id}`}>{nav.title}</Link>{" "}
              {/* Corrected Link */}
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] absolute 
              top-0 left-0 w-screen h-[100vh] z-10 menu ${
                toggle ? "menu-open" : "menu-close"
              }`}
            >
              <div className="flex justify-end">
                <Image
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className="list-none flex flex-col -gap-[1rem] 
              items-start justify-end mt-[10rem] -ml-[35px]"
              >
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.title ? "text-french" : ""
                    } text-[88px] font-bold 
                    uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <Link href={`#${nav.id}`}>{nav.title}</Link>{" "}
                    {/* Corrected Link */}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <Image
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
