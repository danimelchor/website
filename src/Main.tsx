import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiFileText,
  FiBookOpen,
} from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { LiaGraduationCapSolid, LiaCompassSolid } from "react-icons/lia";
import { TbMessageCirclePlus } from "react-icons/tb";
import { FaRegAddressCard } from "react-icons/fa";

import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

import "./styles/new.css";
import App from "components/App";
import Notification from "components/Notification";
import { NotificationType } from "types";

import About from "./apps/About";
import Projects from "./apps/Projects";
import Experience from "./apps/Experience";
import Education from "./apps/Education";
import Contact from "./apps/Contact";
// import { lazy } from "react";
// const About = lazy(() => import("./apps/About"));
// const Projects = lazy(() => import("./apps/Projects"));
// const Experience = lazy(() => import("./apps/Experience"));
// const Education = lazy(() => import("./apps/Education"));
// const Contact = lazy(() => import("./apps/Contact"));

const slate500 = "#64748b";

const APPS = [
  {
    title: "About",
    tooltip: "About",
    icon: <FiBookOpen className="w-6 h-6 2xl:w-8 2xl:h-8" color={slate500} />,
    component: About,
  },
  {
    title: "Open Source Projects",
    tooltip: "Projects",
    icon: (
      <HiOutlineLightBulb
        className="w-6 h-6 2xl:w-8 2xl:h-8"
        color={slate500}
      />
    ),
    component: Projects,
  },
  {
    title: "Experience",
    tooltip: "Experience",
    icon: (
      <LiaCompassSolid className="w-6 h-6 2xl:w-8 2xl:h-8" color={slate500} />
    ),
    component: Experience,
  },
  {
    title: "Education",
    tooltip: "Education",
    icon: (
      <LiaGraduationCapSolid
        className="w-6 h-6 2xl:w-8 2xl:h-8"
        color={slate500}
      />
    ),
    component: Education,
  },
  {
    title: "Contact",
    tooltip: "Contact",
    icon: (
      <FaRegAddressCard className="w-6 h-6 2xl:w-8 2xl:h-8" color={slate500} />
    ),
    component: Contact,
  },
];

const SOCIALS = [
  {
    tooltip: "Github",
    url: "https://github.com/danimelchor",
    icon: <FiGithub className="w-6 h-6 2xl:w-8 2xl:h-8 stroke-slate-500" />,
  },
  {
    tooltip: "LinkedIn",
    url: "https://www.linkedin.com/in/danimelchor/",
    icon: <FiLinkedin className="w-6 h-6 2xl:w-8 2xl:h-8 stroke-slate-500" />,
  },
  {
    tooltip: "Resume",
    url: "/danielmelchor_resume.pdf",
    icon: <FiFileText className="w-6 h-6 2xl:w-8 2xl:h-8 stroke-slate-500" />,
  },
  {
    tooltip: "Twitter",
    url: "https://twitter.com/dmelchor672",
    icon: <FiTwitter className="w-6 h-6 2xl:w-8 2xl:h-8 stroke-slate-500" />,
  },
];

function DockIcon({
  onClick,
  tooltip,
  icon,
  selected,
}: {
  tooltip: string;
  icon: any;
  selected: boolean;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    setHoverTimeout(
      setTimeout(() => {
        setShowTooltip(true);
      }, 500),
    );
    setHovered(true);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout);
    setHovered(false);
    setShowTooltip(false);
  };

  return (
    <div
      className="bg-slate-200 p-3 rounded-full transform transition-all duration-300 lg:hover:scale-150 lg:hover:-translate-y-3 lg:hover:mx-4 relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {icon}
      <div
        className={classNames(
          "absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full mb-10 text-xs text-slate-600 bg-slate-200 px-2 py-1 rounded-md shadow-md transition-opacity duration-300 scale-75",
          {
            "opacity-0": !showTooltip,
            "lg:opacity-100": showTooltip,
          },
        )}
      >
        {tooltip}
      </div>
      <div
        className={classNames(
          "h-1 w-1 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 transition-all duration-300",
          {
            "bg-slate-400": selected,
            "lg:opacity-0": hovered,
            "opacity-100": !hovered,
          },
        )}
      />
    </div>
  );
}

function Dock({
  app,
  setApp,
}: {
  app: string | null;
  setApp: (app: string) => void;
}) {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="rounded-full p-3 bg-slate-100 text-slate-900 mb-2 bg-opacity-95 shadow-md flex lg:justify-center items-center gap-2 transiton-all overflow-x-auto lg:overflow-x-visible">
        {APPS.map((item, key) => {
          return (
            <DockIcon
              tooltip={item.tooltip}
              icon={item.icon}
              key={key}
              selected={app === item.title.toLowerCase()}
              onClick={() => setApp(item.title.toLowerCase())}
            />
          );
        })}
        <hr className="h-9 w-0.5 bg-slate-200 rounded-full" />
        {SOCIALS.map((item, key) => {
          return (
            <DockIcon
              tooltip={item.tooltip}
              icon={item.icon}
              key={key}
              selected={app === item.tooltip.toLowerCase()}
              onClick={() => window.open(item.url, "_blank")}
            />
          );
        })}
      </div>
    </div>
  );
}

function Main() {
  const [app, setApp] = useState<string | null>("about");
  const appRef = useRef(app);
  const [notification, setNotification] = useState<NotificationType>({
    show: false,
  });

  useEffect(() => {
    appRef.current = app;
  }, [app]);

  const handleChangeApp = (newApp: string) => {
    if (newApp !== app) {
      setApp(newApp);
    } else {
      setApp(null);
    }
  };

  useEffect(() => {
    // Send connect notification
    let to = setTimeout(() => {
      if (appRef.current !== "contact") {
        setNotification({
          title: "Want to connect?",
          message: "I'm always open to chat, feel free to reach out!",
          show: true,
          icon: <TbMessageCirclePlus className="w-6 h-6" color={slate500} />,
          onClick: () => {
            setApp("contact");
            setNotification((n: NotificationType) => ({ ...n, show: false }));
          },
        });
      }
    }, 4000);

    return () => {
      if (to) clearTimeout(to);
    };
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col justify-between items-center relative overflow-hidden">
      <div className="w-full h-full relative">
        {APPS.map((item, key) => {
          return (
            <App
              closeApp={() => setApp(null)}
              isOpen={app === item.title.toLowerCase()}
              title={item.title}
            >
              <item.component key={key} />
            </App>
          );
        })}
      </div>
      <Notification
        title={notification.title}
        message={notification.message}
        icon={notification.icon}
        onClick={notification.onClick}
        dismiss={() =>
          setNotification((n: NotificationType) => ({ ...n, show: false }))
        }
        show={notification.show}
      />
      <Dock app={app} setApp={handleChangeApp} />
    </div>
  );
}

export default Main;
