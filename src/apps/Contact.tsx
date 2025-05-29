import classNames from "classnames";
import { IconType } from "react-icons";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import {
  COLOR_TO_BG,
  COLOR_TO_IMG_BG,
  COLOR_TO_SHADOW,
  COLOR_TO_TEXT_COLOR,
} from "./colors";

type ContactType = {
  text: string;
  url: string;
  color: string;
  type: string;
  icon: IconType;
};

function contactItem(item: ContactType) {
  return (
    <a
      className={classNames(
        "flex bg-gradient-to-t from-transparent rounded-xl p-3 lg:p-5 w-full gap-5 h-full group items-center",
        COLOR_TO_BG[item.color],
      )}
      href={item.url}
      target="_blank"
      rel="noreferrer"
    >
      <item.icon
        className={classNames(
          "w-8 h-8 p-2 lg:w-10 lg:h-10 rounded-md shadow-md",
          COLOR_TO_SHADOW[item.color],
          COLOR_TO_TEXT_COLOR[item.color],
          COLOR_TO_IMG_BG[item.color],
        )}
      />
      <div className="flex flex-col">
        <div
          className={classNames(
            "text-md md:text-lg font-bold",
            COLOR_TO_TEXT_COLOR[item.color],
          )}
        >
          {item.text}
        </div>
      </div>
    </a>
  );
}

const CONTACTS: ContactType[] = [
  {
    type: "Email",
    text: "dmh672@gmail.com",
    url: "mailto:dmh672@gmail.com",
    color: "rose",
    icon: FiMail,
  },
  {
    type: "Twitter",
    text: "@dmelchor672",
    url: "https://twitter.com/dmelchor672",
    color: "cyan",
    icon: FiTwitter,
  },
  {
    type: "LinkedIn",
    text: "danimelchor",
    url: "https://www.linkedin.com/in/danimelchor/",
    color: "blue",
    icon: FiLinkedin,
  },
  {
    type: "GitHub",
    text: "danimelchor",
    url: "https://github.com/danimelchor",
    color: "violet",
    icon: FiGithub,
  },
];

const About = () => {
  return (
    <div id="contact" className="w-full mb-24 flex flex-col gap-10 p-10">
      <h2 className="text-slate-800 dark:text-slate-200 text-4xl font-bold transition-colors">
        Contact
      </h2>
      <p className="text-slate-600 dark:text-slate-400 w-full lg:w-1/2">
        I absolutely love connecting with new people! Whether you have a burning
        question, want to bounce around some ideas, or just fancy a friendly
        chat - count me in! I'm all ears for new opportunities, collaborations,
        or a simple hello.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full items-center">
        {CONTACTS.map((item) => contactItem(item))}
      </div>
    </div>
  );
};

export default About;
