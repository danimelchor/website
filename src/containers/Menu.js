import React, { Component } from "react";
import MenuItem from "../components/MenuItem";

import grid from "../img/grid2.png";
import darkGrid from "../img/darkGrid.png";

import { FaPencilAlt } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  // State manages if the menu is open + how the dark-mode icon looks
  state = {
    menuActive: false,
    moon: "fas fa-moon",
  };

  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  // When the user clicks the hamburguer menu
  toggleMenu() {
    console.log("X");
    if (window.innerWidth < 768)
      this.setState({ menuActive: !this.state.menuActive });
  }

  // Checking for the theme item in localStorage or they have their device dark-mode
  // activated to set the appropiate theme
  componentDidMount() {
    let current = localStorage.getItem("theme");
    if (current === null || current === "dark") {
      this.setState({ moon: "far fa-moon" });
      document.body.style.backgroundImage = "url(" + darkGrid + ")";
      document.documentElement.classList.add("dark");
    } else {
      this.setState({ moon: "fas fa-moon" });
      document.body.style.backgroundImage = "url(" + grid + ")";
      document.documentElement.classList.remove("dark");
    }

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
    let current = localStorage.getItem("theme");
    if (current === null || current === "dark") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      this.setState({ moon: "fas fa-moon" });
      document.body.style.backgroundImage = "url(" + grid + ")";
    } else if (current === "light") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      this.setState({ moon: "far fa-moon" });
      document.body.style.backgroundImage = "url(" + darkGrid + ")";
    }
  }

  render() {
    return (
      <>
        {/* This is the small screen menu */}
        <div className="font-mono fixed md:hidden top-0 w-full z-30 text-center shadow-2xl bg-gray-100 dark:bg-gray-900 py-5 sm:p-5 border-b-4 border-primary dark:border-primaryDark">
          <div className="relative h-10">
            <i
              onClick={() => this.toggleMenu()}
              className="left-8 absolute fas fa-bars text-3xl sm:text-4xl sm:px-3 text-primary dark:text-primaryDark inline-block align-middle"
            ></i>
            <a
              className="text-xl sm:text-2xl text-gray-800 dark:text-gray-300 inline-block align-middle absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              href="/"
            >
              <span className="text-blue-700 dark:text-blue-300">class</span>{" "}
              User(
              <span className="text-secondary dark:text-secondaryDark">DM</span>
              ):
            </a>
            <div
              className="right-8 absolute transition-none md:hidden rounded shadow-2xl p-2 sm:p-3 cursor-pointer text-center bg-primary text-md dark:text-secondaryDark
                                       dark:bg-gray-600 border-b-2 border-gray-900 dark:border-gray-500 hover:bg-gray-900 dark:hover:bg-gray-700 inline-block align-middle text-secondary"
              onClick={this.changeTheme.bind(this)}
            >
              <i className={this.state.moon + " block"}></i>
            </div>
          </div>
        </div>

        {/* Dark mode icon (normal screens only) */}
        <div
          className="transition-none hidden md:block z-50 py-4 px-7 cursor-pointer text-center bg-primary text-md fixed right-3 top-3
                               dark:text-secondaryDark dark:bg-gray-600 border-2 rounded-md border-secondary dark:border-secondaryDark
                               hover:bg-gray-900 dark:hover:bg-gray-700 text-secondary"
          onClick={this.changeTheme.bind(this)}
        >
          <i className={this.state.moon + " block"}></i>
        </div>

        {/* Normal screen menu */}
        <div
          className="font-mono w-5/6 md:w-1/3 lg:w-1/4 2xl:w-1/5 shadow-2xl fixed h-screen z-40 bg-gray-200 dark:bg-gray-800 transition-transform md:transition-none md:transition-colors"
          style={
            this.state.menuActive ? {} : { transform: "translateX(-105%)" }
          }
        >
          <div className="hidden md:block border-b-4 border-secondary dark:border-secondaryDark text-center">
            <div className="text-primary dark:text-blue-300 font-bold text-2xl inline-block py-5 font-sans">
              danielmelchor.com
            </div>
          </div>
          <div className="md:top-1/2 md:absolute transform md:-translate-y-2/4 w-full">
            <div className="w-full pt-5 flex flex-wrap items-center justify-center hidden md:block">
              <a
                className="pl-5 text-xl w-full text-gray-800 dark:text-gray-300"
                href="/"
              >
                <span className="text-green-900 dark:text-blue-300">class</span>{" "}
                User(
                <span className="text-secondary dark:text-secondaryDark">
                  D<span className="hidden xl:inline">aniel</span>M
                </span>
                ):
              </a>
            </div>
            <div className="pt-10 md:pt-2 xl:pt-5">
              <div className="md:hidden z-20 w-full mb-2 block px-3 text-center">
                <p className="text-3xl inline-block align-middle text-primary dark:text-gray-300">
                  Menu
                </p>
                <i
                  onClick={() => this.toggleMenu()}
                  className="fas fa-times text-3xl float-right inline-block align-middle text-primary dark:text-primaryDark"
                ></i>
              </div>
              <MenuItem
                text=".welcome()"
                toggleMenuFunc={this.toggleMenu}
                icon="fab fa-creative-commons-zero"
                linkTo="welcome"
              />
              <MenuItem text=".about()" icon="fas fa-user" linkTo="about" />
              <MenuItem
                text=".experience()"
                toggleMenuFunc={this.toggleMenu}
                icon="fas fa-user-tie"
                linkTo="experience"
              />
              <MenuItem
                text=".projects()"
                toggleMenuFunc={this.toggleMenu}
                icon="fas fa-tools"
                linkTo="projects"
              />
              <MenuItem
                text=".skills()"
                toggleMenuFunc={this.toggleMenu}
                icon="fas fa-chart-bar"
                linkTo="skills"
              />
              <MenuItem
                text=".education()"
                toggleMenuFunc={this.toggleMenu}
                icon="fas fa-graduation-cap"
                linkTo="education"
              />
              <MenuItem
                text=".contact()"
                toggleMenuFunc={this.toggleMenu}
                icon="fas fa-comment-dots"
                linkTo="contact"
              />
              <MenuItem
                text=".resume()"
                toggleMenuFunc={this.toggleMenu}
                icon="fas fa-file"
                linkTo="resume"
              />
              <Link
                to="/blog"
                className="flex items-center px-3 pl-4 2xl:pl-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 group transition-colors"
                style={
                  window.innerHeight > window.innerWidth
                    ? { paddingTop: "2vh", paddingBottom: "2vh" }
                    : { paddingTop: "2vh", paddingBottom: "2vh" }
                }
              >
                <FaPencilAlt className="text-2xl 2xl:text-3xl pr-5 w-12 text-center text-primary dark:text-gray-400" />
                <span className="text-md xl:text-lg font-mono text-gray-700 group-hover:text-black dark:text-gray-400 dark:group-hover:text-gray-100 flex items-center transition-colors">
                  <span className="text-secondary dark:text-secondaryDark">
                    this
                  </span>
                  .blog()
                </span>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
