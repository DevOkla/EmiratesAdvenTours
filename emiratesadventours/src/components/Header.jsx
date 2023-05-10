import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import logo from "../assets/images/logo.png";
// react icons
import {
  RiMenu3Fill,
  RiCloseFill,
  RiMoonFill,
  RiSunFill,
} from "react-icons/ri";

// import color mode custom hooks
import useColorMode from "../hooks/useColorMode";

export default function Header() {
  // open menu state
  const [menuOpen, setMenuOpen] = useState(false);

  // sticky header state
  const [stickyHeader, setStickyHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setStickyHeader(true);
      } else {
        setStickyHeader(false);
      }
    });
  }, [stickyHeader]);

  // color mode state
  const [colorMode, setColorMode] = useColorMode();

  return (
    <header
      className={`header fixed left-0 top-0 z-50 w-full transition-all duration-400 ${
        stickyHeader
          ? "bg-white shadow-md dark:bg-gray-900"
          : "bg-transparent shadow-none"
      }`}
    >
      <div className="header__container container flex h-24 items-center justify-between">
        {/* header logo */}
        <Link
          to="/"
          className={`header__logo h-20 w-20 font-serif text-[20px] font-semibold dark:text-white ${
            stickyHeader ? "text-gray-900" : "text-white"
          }`}
        >
          <img src={logo} alt="logo" />
        </Link>

        {/* header menu */}
        <div
          className={`header__menu fixed top-0 z-10 flex h-full w-[70%] flex-col justify-between bg-white px-10 pb-10 pt-24 shadow-[0_-4px_12px_rgba(0,0,0,0.12)] transition-all duration-400 dark:bg-gray-900 md:static md:z-auto md:h-auto md:w-auto md:flex-row md:items-center md:gap-8 md:bg-transparent md:p-0 md:shadow-none md:dark:bg-transparent ${
            menuOpen ? "right-0" : "-right-full"
          }`}
        >
          <ul className="header__list mb-8 flex flex-col gap-8 md:mb-0 md:flex-row">
            {[
              ["Why us", "about"],
              /*  ["Why Us", "/why-us"], */
              ["Tours", "tours"],
              ["Reviews", "reviews"],
              ["Contact", "contact"],
            ].map(([title, url]) => (
              <li key={url}>
                <LinkScroll
                  to={url}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className={`header__link group relative text-[15px] font-medium leading-tight text-gray-900 dark:text-white md:text-white ${
                    stickyHeader ? "lg:text-gray-900" : "md:text-white"
                  }`}
                >
                  {title}
                  <div
                    className={`absolute left-0 top-6 h-[3px] w-0 bg-blue-600 transition-all duration-400 group-hover:w-full ${
                      stickyHeader ? "md:bg-blue-600" : "md:bg-white"
                    }`}
                  />
                </LinkScroll>
              </li>
            ))}
          </ul>

          {/* header theme toggle [desktop version] */}
          <div
            className={`header__theme hidden cursor-pointer p-1 text-[1.3rem] dark:text-white md:flex ${
              stickyHeader ? "text-gray-900" : "text-white"
            }`}
            onClick={() =>
              setColorMode(colorMode === "light" ? "dark" : "light")
            }
          >
            {colorMode === "light" ? <RiMoonFill /> : <RiSunFill />}
          </div>

          <Link to="/register" className="header__button button">
            Book Now
          </Link>
        </div>

        <div className="header__wrapper inline-flex items-center gap-5 md:hidden">
          {/* header theme toggle [mobile version] */}
          <div
            className={`header__theme cursor-pointer p-1 text-[1.3rem] dark:text-white ${
              stickyHeader ? "text-gray-900" : "text-white"
            }`}
            onClick={() =>
              setColorMode(colorMode === "light" ? "dark" : "light")
            }
          >
            {colorMode === "light" ? <RiMoonFill /> : <RiSunFill />}
          </div>

          {/* header menu toggle */}
          <div
            className="header__toggle z-10 inline-flex cursor-pointer p-1 text-[1.3rem]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {!menuOpen ? (
              <RiMenu3Fill
                className={`dark:text-white ${
                  stickyHeader ? "text-gray-900 " : "text-white"
                }`}
              />
            ) : (
              <RiCloseFill className="text-gray-900 dark:text-white" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
