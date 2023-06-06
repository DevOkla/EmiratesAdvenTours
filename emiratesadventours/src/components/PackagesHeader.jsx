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

export default function PackagesHeader() {
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
          className={`header__logo  w-20 font-serif text-[20px] font-semibold dark:text-white ${
            stickyHeader ? "text-gray-900" : "text-white"
          }`}
        >
          <img src={logo} alt="logo" />
        </Link>

        {/* header menu */}

        <div
          className={`header__theme  cursor-pointer p-1 text-[1.3rem] dark:text-white  `}
          onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
        >
          {colorMode === "light" ? <RiMoonFill /> : <RiSunFill />}
        </div>
      </div>
    </header>
  );
}
