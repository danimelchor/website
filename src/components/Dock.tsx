import {
  FiGithub,
  FiTwitter,
  FiFileText,
  FiBookOpen,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { LiaCompassSolid } from "react-icons/lia";

import { useEffect, useState } from "react";

import About from "apps/About";
import Projects from "apps/Projects";
import Experience from "apps/Experience";
import DockIcon from "components/DockIcon";
// import { lazy } from "react";
// const About = lazy(() => import("./apps/About"));
// const Projects = lazy(() => import("./apps/Projects"));
// const Experience = lazy(() => import("./apps/Experience"));
// const Education = lazy(() => import("./apps/Education"));

const slate500 = "#64748b";

export const APPS = [
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
];

const SOCIALS = [
  {
    tooltip: "Github",
    url: "https://github.com/danimelchor",
    icon: <FiGithub className="w-6 h-6 2xl:w-8 2xl:h-8 stroke-slate-500" />,
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

export default function Dock({
  app,
  setApp,
}: {
  app: string | null;
  setApp: (app: string) => void;
}) {
  const [dark, setDark] = useState<boolean>(false);

  const handleToggleTheme = () => {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      setDark(false);
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  };

  useEffect(() => {
    if (localStorage.theme === "dark") {
      setDark(true);
    }
  }, []);

  return (
    <div className="w-full flex justify-center items-center px-2">
      <div className="rounded-full p-3 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 mb-2 bg-opacity-95 shadow-md flex lg:justify-center items-center gap-2 transiton-all overflow-x-auto lg:overflow-x-visible z-50">
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
        <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded-full border-0 w-0.5">
          &nbsp;
        </div>
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
        <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded-full border-0 w-0.5">
          &nbsp;
        </div>
        <DockIcon
          tooltip="Change theme"
          icon={
            dark ? (
              <FiSun className="w-6 h-6 2xl:w-8 2xl:h-8" color={slate500} />
            ) : (
              <FiMoon className="w-6 h-6 2xl:w-8 2xl:h-8" color={slate500} />
            )
          }
          selected={false}
          onClick={handleToggleTheme}
        />
      </div>
    </div>
  );
}
