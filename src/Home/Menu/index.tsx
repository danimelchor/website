import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

// ICONS
import {
  FiHome,
  FiSmile,
  FiBriefcase,
  FiTool,
  FiMenu,
  FiTerminal,
} from "react-icons/fi";
import { BiBrain } from "react-icons/bi";
import { IoSchoolOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

import Notification from "components/Notification";

export default function Menu() {
  // State manages if the menu is open + how the dark-mode icon looks
  const [menuActive, setMenuActive] = useState(false);

  // When the user clicks the hamburguer menu
  const toggleMenu = () => {
    if (window.innerWidth < 768) setMenuActive(!menuActive);
  };

  // Only for visuals checking responsiveness
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setMenuActive(true);
    } else {
      setMenuActive(false);
    }
  };

  // Checking for the theme item in localStorage or they have their device dark-mode
  // activated to set the appropiate theme
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    if (window.innerWidth >= 768) {
      setMenuActive(true);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Normal screen menu */}
      <div
        className="bg-black bg-opacity-70 w-screen md:w-1/3 lg:w-1/4 2xl:w-1/5 fixed md:sticky h-screen z-50 top-0 transition-opacity md:pointer-events-none md:bg-transparent"
        style={
          menuActive
            ? { opacity: "1", pointerEvents: "all" }
            : { opacity: "0", pointerEvents: "none" }
        }
        onClick={toggleMenu}
      >
        <div
          className="font-mono md:transition-none md:transition-colors w-5/6 md:w-auto shadow-2xl flex flex-col md:sticky h-screen bg-gray-800 transition-transform duration-500 justify-between"
          id="menu"
          style={menuActive ? {} : { transform: "translateX(-105%)" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="hidden md:block border-b-4 border-secondaryDark text-center">
            <div className="text-blue-300 font-bold text-2xl inline-block py-5 font-sans">
              danielmelchor.com
            </div>
          </div>
          <div className="w-full">
            <div className="w-full pt-5 flex flex-wrap items-center justify-center hidden md:block">
              <a
                className="pl-8 text-xl w-full text-gray-300"
                href="/"
              >
                <span className="text-blue-300">class</span>{" "}
                User(
                <span className="text-secondaryDark">
                  D<span className="hidden xl:inline">aniel</span>M
                </span>
                ):
              </a>
            </div>
            <div className="lg:pt-10 md:pt-2 xl:pt-5 flex flex-col">
              <div className="h-20 md:hidden z-20 w-full mb-3 block px-3 text-center border-b-4 border-primaryDark flex items-center justify-center relative">
                <p className="text-3xl inline-block align-middle text-gray-300">
                  &#60;Menu&#62;
                </p>
                <div
                  onClick={toggleMenu}
                  className="text-4xl float-right inline-block align-middle text-primaryDark absolute right-5"
                >
                  <IoMdClose />
                </div>
              </div>
              <MenuItem
                text=".welcome()"
                toggleMenuFunc={toggleMenu}
                icon={<FiHome />}
                linkTo="welcome"
              />
              <MenuItem
                text=".about()"
                icon={<FiSmile />}
                linkTo="about"
                toggleMenuFunc={toggleMenu}
              />
              <MenuItem
                text=".experience()"
                toggleMenuFunc={toggleMenu}
                icon={<FiBriefcase />}
                linkTo="experience"
              />
              <MenuItem
                text=".education()"
                toggleMenuFunc={toggleMenu}
                icon={<IoSchoolOutline />}
                linkTo="education"
              />
            </div>
          </div>
          <div className="spacer h-20"></div>
        </div>
      </div>
      {/* This is the small screen menu */}
      <div className="font-mono sticky md:hidden top-0 w-screen z-30 text-center shadow-2xl bg-gray-900 py-5 sm:p-5 border-b-4 border-primaryDark">
        <div className="h-10">
          <div
            onClick={toggleMenu}
            className="left-8 absolute fas fa-bars text-4xl sm:text-4xl sm:px-3 text-primaryDark inline-block align-middle"
          >
            <FiMenu />
          </div>
          <a
            className="text-xl sm:text-2xl text-gray-300 inline-block align-middle absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            href="/"
          >
            <span className="text-blue-300">class</span>{" "}
            User(
            <span className="text-secondaryDark">DM</span>
            ):
          </a>
        </div>
      </div>
      <Notification />
    </>
  );
}
