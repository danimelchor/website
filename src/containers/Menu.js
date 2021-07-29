import React, { Component } from "react";
import MenuItem from "../components/MenuItem";

import grid from "../img/grid2.png";
import darkGrid from "../img/darkGrid.png";

// ICONS
import { FiHome, FiSmile, FiBriefcase, FiTool, FiMenu } from "react-icons/fi";
import { BiBrain } from "react-icons/bi";
import { IoSchoolOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FiMoon, FiSun } from "react-icons/fi";
import {
  changeTheme,
  getCookie,
  setCookie,
  setTheme,
} from "../functions/cookies";

export default class Menu extends Component {
  // State manages if the menu is open + how the dark-mode icon looks
  state = {
    menuActive: false,
    moon: <FiSun />,
  };

  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  // When the user clicks the hamburguer menu
  toggleMenu() {
    if (window.innerWidth < 768)
      this.setState({ menuActive: !this.state.menuActive });
  }

  // Checking for the theme item in localStorage or they have their device dark-mode
  // activated to set the appropiate theme
  componentDidMount() {
    let current = setTheme();
    this.setState({ moon: current === "dark" ? <FiSun /> : <FiMoon /> });
    document.body.style.backgroundImage =
      current === "dark" ? "url(" + darkGrid + ")" : "url(" + grid + ")";

    window.addEventListener("resize", this.handleResize.bind(this));
    if (window.innerWidth >= 768) {
      this.setState({ menuActive: true });
    }
  }

  // Only for visuals checking responsiveness
  handleResize() {
    if (window.innerWidth >= 768) {
      this.setState({ menuActive: true });
    } else {
      this.setState({ menuActive: false });
    }
  }

  // When the user clicks the dark-mode icon
  changeTheme() {
    let current = changeTheme();
    this.setState({ moon: current === "dark" ? <FiSun /> : <FiMoon /> });
    document.body.style.backgroundImage =
      current === "dark" ? "url(" + darkGrid + ")" : "url(" + grid + ")";
  }

  render() {
    return (
      <>
        {/* Normal screen menu */}
        <div
          className="bg-black bg-opacity-70 w-screen md:w-1/3 lg:w-1/4 2xl:w-1/5 fixed md:sticky h-screen z-50 top-0 transition-opacity md:pointer-events-none md:bg-transparent"
          style={
            this.state.menuActive
              ? { opacity: "1", pointerEvents: "all" }
              : { opacity: "0", pointerEvents: "none" }
          }
          onClick={this.toggleMenu}
        >
          <div
            className="font-mono md:transition-none md:transition-colors w-5/6 md:w-auto shadow-2xl flex flex-col md:sticky  h-screen  bg-gray-200 dark:bg-gray-800 transition-transform justify-between"
            id="menu"
            style={
              this.state.menuActive ? {} : { transform: "translateX(-105%)" }
            }
            onClick={(e) => e.stopPropagation()}
          >
            <div className="hidden md:block border-b-4 border-secondary dark:border-secondaryDark text-center">
              <div className="text-primary dark:text-blue-300 font-bold text-2xl inline-block py-5 font-sans">
                danielmelchor.com
              </div>
            </div>
            <div className="w-full">
              <div className="w-full pt-5 flex flex-wrap items-center justify-center hidden md:block">
                <a
                  className="pl-8 text-xl w-full text-gray-800 dark:text-gray-300"
                  href="/"
                >
                  <span className="text-green-900 dark:text-blue-300">
                    class
                  </span>{" "}
                  User(
                  <span className="text-secondary dark:text-secondaryDark">
                    D<span className="hidden xl:inline">aniel</span>M
                  </span>
                  ):
                </a>
              </div>
              <div className="lg:pt-10 md:pt-2 xl:pt-5 flex flex-col">
                <div className="h-20 md:hidden z-20 w-full mb-3 block px-3 text-center border-b-4 dark:border-primaryDark flex items-center justify-center relative">
                  <p className="text-3xl inline-block align-middle text-primary dark:text-gray-300">
                    &#60;Menu&#62;
                  </p>
                  <div
                    onClick={this.toggleMenu}
                    className="text-4xl float-right inline-block align-middle text-primary dark:text-primaryDark absolute right-5"
                  >
                    <IoMdClose />
                  </div>
                </div>
                <MenuItem
                  text=".welcome()"
                  toggleMenuFunc={this.toggleMenu}
                  icon={<FiHome />}
                  linkTo="welcome"
                />
                <MenuItem
                  text=".about()"
                  icon={<FiSmile />}
                  linkTo="about"
                  toggleMenuFunc={this.toggleMenu}
                />
                <MenuItem
                  text=".experience()"
                  toggleMenuFunc={this.toggleMenu}
                  icon={<FiBriefcase />}
                  linkTo="experience"
                />
                <MenuItem
                  text=".projects()"
                  toggleMenuFunc={this.toggleMenu}
                  icon={<FiTool />}
                  linkTo="projects"
                />
                <MenuItem
                  text=".skills()"
                  toggleMenuFunc={this.toggleMenu}
                  icon={<BiBrain />}
                  linkTo="skills"
                />
                <MenuItem
                  text=".education()"
                  toggleMenuFunc={this.toggleMenu}
                  icon={<IoSchoolOutline />}
                  linkTo="education"
                />
              </div>
            </div>
            <div className="spacer h-20"></div>
          </div>
        </div>

        {/* This is the small screen menu */}
        <div className="font-mono sticky md:hidden top-0 w-screen z-30 text-center shadow-2xl bg-gray-100 dark:bg-gray-900 py-5 sm:p-5 border-b-4 border-primary dark:border-primaryDark">
          <div className="h-10">
            <div
              onClick={() => this.toggleMenu()}
              className="left-8 absolute fas fa-bars text-4xl sm:text-4xl sm:px-3 text-primary dark:text-primaryDark inline-block align-middle"
            >
              <FiMenu />
            </div>
            <a
              className="text-xl sm:text-2xl text-gray-800 dark:text-gray-300 inline-block align-middle absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              href="/"
            >
              <span className="text-blue-700 dark:text-blue-300">class</span>{" "}
              User(
              <span className="text-secondary dark:text-secondaryDark">DM</span>
              ):
            </a>
          </div>
        </div>

        {/* Dark mode icon */}
        <div
          className="transition-none flex z-40 cursor-pointer fixed dark:text-white w-10 h-10 items-center justify-center md:dark:bg-gray-700 md:bg-white rounded-full md:dark:hover:bg-gray-800 md:hover:bg-gray-200 transition-colors mt-2 md:mt-0 text-xl"
          onClick={this.changeTheme.bind(this)}
          style={{
            top: "2vw",
            right: "2vw",
          }}
        >
          {this.state.moon}
        </div>
      </>
    );
  }
}
