import React, { useEffect, useState } from "react";
import Socials from "./Socials";

// Icons
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { BsChevronDown } from "react-icons/bs";

import { Link } from "react-scroll";
import Contact from "./Contact";

export default function Welcome() {
  const [buttonText, setButtonText] = useState("Say Hello");
  const [contactOpened, setContactOpened] = useState(false);

  const windowScrolled = () => {
    let sY = window.scrollY;
    let button = document.getElementById("say-hello");

    if (button) {
      if (sY > window.innerHeight / 2) {
        button.classList.add("say-hello-scrolled");
        setButtonText(<IoChatboxEllipsesOutline />);
      } else {
        button.classList.remove("say-hello-scrolled");
        setButtonText("Say Hello");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", windowScrolled);
    return () => window.removeEventListener("scroll", windowScrolled);
  }, []);

  return (
    <div>
      <div
        id="welcome"
        className="bg-white dark:bg-gray-700 w-screen flex justify-center items-center flex-col transition-colors duration-200"
        style={{ height: "99vh" }}
      >
        <div
          className="say-hello cursor-pointer"
          id="say-hello"
          onClick={() => setContactOpened(true)}
        >
          {buttonText}
        </div>
        <h1
          className="w-11/12 text-center md:w-auto text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-9xl font-black dark:text-white transition-colors duration-200"
          id="home-title"
        >
          Daniel Melchor
        </h1>
        <h2
          className="w-11/12 font-serif text-center md:w-auto text-xl 2xl:text-2xl 3xl:text-3xl italic text-gray-700 dark:text-gray-300 transition-colors duration-200"
          id="home-subtitle"
        >
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
          <BsChevronDown className="cursor-pointer animated__bounce" />
        </Link>
      </div>
      {contactOpened && <Contact closeMenu={() => setContactOpened(false)} />}
    </div>
  );
}
