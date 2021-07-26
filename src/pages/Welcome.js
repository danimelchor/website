import React, { Component } from "react";
import Socials from "../containers/Socials";

// Icons
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { BsChevronDown } from "react-icons/bs";

import { Link } from "react-scroll";

export default class Welcome extends Component {
  state = {
    buttonText: "Say Hello",
  };

  windowScrolled(e) {
    let sY = window.scrollY;
    let button = document.getElementById("say-hello");

    if (button) {
      if (sY > window.innerHeight / 2) {
        button.classList.add("say-hello-scrolled");
        this.setState({ buttonText: <IoChatboxEllipsesOutline /> });
      } else {
        button.classList.remove("say-hello-scrolled");
        this.setState({ buttonText: "Say Hello" });
      }
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.windowScrolled.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.windowScrolled.bind(this));
  }

  render() {
    return (
      <div>
        <div
          id="welcome"
          className="bg-white dark:bg-gray-700 w-screen flex justify-center items-center flex-col"
          style={{ height: "99vh" }}
        >
          <a href="/contact" className="say-hello" id="say-hello">
            {this.state.buttonText}
          </a>
          <h1 className="w-11/12 text-center md:w-auto text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-9xl font-black dark:text-white">
            Daniel Melchor
          </h1>
          <h2 className="w-11/12 font-serif text-center md:w-auto text-xl 2xl:text-2xl 3xl:text-3xl italic text-gray-700 dark:text-gray-300">
            A full stack developer that never stops learning.
          </h2>
          <Socials />
        </div>
        <div
          className="w-full flex items-center justify-center absolute left-0 text-gray-600 dark:text-gray-400 text-3xl z-50 transform -translate-y-full"
          style={{ top: "99vh" }}
        >
          <Link
            to="about"
            smooth={true}
            duration={400}
            delay={0}
            spy={true}
            offset={window.innerWidth < 768 ? -84 : 0}
            ignoreCancelEvents={true}
          >
            <BsChevronDown id="welcome-scroll" className="cursor-pointer" />
          </Link>
        </div>
      </div>
    );
  }
}
