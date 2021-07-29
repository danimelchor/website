import React, { Component } from "react";
import SocialIcon from "../components/SocialIcon";

// Icons
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiFileText,
  FiTool,
} from "react-icons/fi";
import { IoTextOutline } from "react-icons/io5";

const SOCIALS = [
  {
    title: "Github",
    url: "https://github.com/danimelchor",
    icon: <FiGithub className="w-6 h-6 2xl:w-8 2xl:h-8" />,
    type: "external",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/danimelchor/",
    icon: <FiLinkedin className="w-6 h-6 2xl:w-8 2xl:h-8" />,
    type: "external",
  },
  {
    title: "Resume",
    url: "/danielmelchor_resume.pdf",
    icon: <FiFileText className="w-6 h-6 2xl:w-8 2xl:h-8" />,
    type: "external",
  },
  {
    title: "Projects",
    url: "projects",
    icon: <FiTool className="w-6 h-6 2xl:w-8 2xl:h-8" />,
    type: "scroll",
  },
  {
    title: "Blog",
    url: "/blog",
    icon: <IoTextOutline className="w-6 h-6 2xl:w-8 2xl:h-8" />,
    type: "internal",
  },
  {
    title: "Twitter",
    url: "https://twitter.com/danii672",
    icon: <FiTwitter className="w-6 h-6 2xl:w-8 2xl:h-8" />,
    type: "external",
  },
];

export default class Socials extends Component {
  render() {
    return (
      <div
        className="flex justify-evenly items-center w-4/5 md:w-2/4 lg:w-1/3 xl:w-1/4 mt-5"
        id="socials"
      >
        {SOCIALS.map((item, key) => {
          return <SocialIcon item={item} key={key} />;
        })}
      </div>
    );
  }
}
