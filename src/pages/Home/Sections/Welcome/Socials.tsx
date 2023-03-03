import SocialIcon from "./SocialIcon";

// Icons
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiFileText,
  FiTool,
} from "react-icons/fi";
import { IoTextOutline } from "react-icons/io5";
import { SocialType } from "types";

const SOCIALS : SocialType[] = [
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

export default function Socials() {
  return (
    <div
      className="flex flex-col justify-evenly items-center w-4/5 md:w-2/4 lg:w-1/3 xl:w-1/4 mt-2"
      id="socials"
    >
      <div className="flex justify-evenly items-center w-full select-none">
        {SOCIALS.map((item, key) => {
          return (
            <SocialIcon
              url={item.url}
              title={item.title}
              icon={item.icon}
              type={item.type}
              key={key}
            />
          );
        })}
      </div>
      <div className="text-center w-full text-sm text-gray-500 leading-none md:hidden">
        Tip: hold for a second on each icon to see what each of them are.
      </div>
    </div>
  );
}
