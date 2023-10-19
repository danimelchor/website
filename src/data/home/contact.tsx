import { FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import { SiProtonmail } from "react-icons/si";
import { ContactType } from "types";

export const CONTACT_WAYS : ContactType[] = [
  {
    text: "dmelchor@pm.me",
    href: "mailto:dmelchor@pm.me",
    icon: <SiProtonmail />,
    copyText: "dmelchor@pm.me",
  },
  {
    text: "danimelchor",
    href: "https://www.linkedin.com/in/danimelchor/",
    icon: <FiLinkedin />,
    copyText: "danimelchor",
  },
  {
    text: "dmh672@gmail.com",
    href: "mailto:dmh672@gmail.com",
    icon: <FiMail />,
    copyText: "dmh672@gmail.com",
  },
  {
    text: "@dmelchor672",
    href: "https://twitter.com/dmelchor672",
    icon: <FiTwitter />,
    copyText: "@dmelchor672",
  },
];
