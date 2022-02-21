import { FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import { SiProtonmail } from "react-icons/si";

export const CONTACT_WAYS = [
  {
    text: "dmelchor@pm.me",
    href: "mailto:dmelchor@pm.me",
    icon: <SiProtonmail />,
    copyText: "dmelchor@pm.me",
    color: "blue",
  },
  {
    text: "danimelchor",
    href: "https://www.linkedin.com/in/danimelchor/",
    icon: <FiLinkedin />,
    copyText: "danimelchor",
    color: "indigo",
  },
  {
    text: "dmh672@gmail.com",
    href: "mailto:dmh672@gmail.com",
    icon: <FiMail />,
    copyText: "dmh672@gmail.com",
    color: "purple",
  },
  {
    text: "@danii672",
    href: "https://twitter.com/danii672",
    icon: <FiTwitter />,
    copyText: "@danii672",
    color: "pink",
  },
];
