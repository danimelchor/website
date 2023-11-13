import classNames from "classnames";
import { ContactType } from "types";
import { FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import { SiProtonmail } from "react-icons/si";

export const CONTACT_WAYS: ContactType[] = [
  {
    text: "dmelchor@pm.me",
    href: "mailto:dmelchor@pm.me",
    icon: <SiProtonmail className="w-8 h-8 text-purple-800" />,
    copyText: "dmelchor@pm.me",
    color: "purple",
  },
  {
    text: "danimelchor",
    href: "https://www.linkedin.com/in/danimelchor/",
    icon: <FiLinkedin className="w-8 h-8 text-sky-800" />,
    copyText: "danimelchor",
    color: "sky",
  },
  {
    text: "dmh672@gmail.com",
    href: "mailto:dmh672@gmail.com",
    icon: <FiMail className="w-8 h-8 text-red-800" />,
    copyText: "dmh672@gmail.com",
    color: "red",
  },
  {
    text: "@dmelchor672",
    href: "https://twitter.com/dmelchor672",
    icon: <FiTwitter className="w-8 h-8 text-sky-500" />,
    copyText: "@dmelchor672",
    color: "sky-light",
  },
];

type Mapping = {
  [key: string]: string;
};

const COLOR_TO_BG: Mapping = {
  purple:
    "from-purple-200 to-purple-100 hover:to-purple-200 hover:from-purple-300",
  red: "from-red-200 to-red-100 hover:to-red-200 hover:from-red-300",
  sky: "from-blue-200 to-blue-100 hover:to-blue-200 hover:from-blue-300",
  "sky-light": "from-sky-200 to-sky-100 hover:to-sky-200 hover:from-sky-300",
};

const COLOR_TO_TEXT_COLOR: Mapping = {
  purple: "text-purple-700",
  red: "text-red-700",
  sky: "text-sky-700",
  "sky-light": "text-sky-600",
};

const ContactItem = (item: ContactType) => {
  return (
    <a
      className={classNames(
        "flex gap-3 bg-gradient-to-t rounded-xl p-5 w-full items-center",
        COLOR_TO_BG[item.color],
      )}
      href={item.href}
      target="_blank"
      rel="noreferrer"
    >
      {item.icon}
      <h3
        className={classNames(
          "text-2xl font-bold",
          COLOR_TO_TEXT_COLOR[item.color],
        )}
      >
        {item.text}
      </h3>
    </a>
  );
};

const Contact = () => {
  return (
    <div
      id="experience"
      className="w-full mb-24 flex flex-col gap-3 p-10 gap-5"
    >
      <h2 className="text-slate-800 text-4xl font-bold">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full items-center">
        {CONTACT_WAYS.map((item, key) => (
          <ContactItem key={key} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Contact;
