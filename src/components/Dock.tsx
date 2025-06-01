import {
  FiGithub,
  FiTwitter,
  FiFileText,
  FiBookOpen,
  FiSun,
  FiMoon,
  FiMail,
  FiFeather,
  FiPackage,
} from "react-icons/fi";
import { LiaCompassSolid } from "react-icons/lia";
import { MdSlowMotionVideo } from "react-icons/md";
import { PiSneakerMoveBold } from "react-icons/pi";

import DockIcon from "components/DockIcon";
import { useTheme } from "providers/ThemeProvider";

import { lazy, LazyExoticComponent, ReactNode } from "react";
const About = lazy(() => import("apps/About"));
const Blog = lazy(() => import("apps/Blog"));
const Projects = lazy(() => import("apps/Projects"));
const Experience = lazy(() => import("apps/Experience"));
const Contact = lazy(() => import("apps/Contact"));

const slate500 = "#64748b";

type App = {
  title: string;
  tooltip: string;
  icon: ReactNode;
  component: LazyExoticComponent<any>;
  hidden?: boolean;
};

export const APPS: App[] = [
  {
    title: "About",
    tooltip: "About",
    icon: <FiBookOpen className="w-6 h-6 2xl:w-8 2xl:h-8" color={slate500} />,
    component: About,
  },
  {
    title: "Open Source Projects",
    tooltip: "Projects",
    icon: <FiPackage className="w-6 h-6 2xl:w-8 2xl:h-8" color={slate500} />,
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
    title: "Nuggets",
    tooltip: "Nuggets",
    icon: <FiFeather className="w-6 h-6 2xl:w-8 2xl:h-8" color={slate500} />,
    component: Blog,
    hidden: false,
  },
  {
    title: "Contact",
    tooltip: "Contact",
    icon: <FiMail className="w-6 h-6 2xl:w-8 2xl:h-8" color={slate500} />,
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
  const { darkMode, reducedMotion, toggleDarkMode, toggleReducedMotion } =
    useTheme();

  return (
    <div className="w-full flex justify-center items-center px-2 z-10 pointer-events-none">
      <div className="rounded-full p-3 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 mb-2 bg-opacity-95 shadow-md flex lg:justify-center items-center gap-2 transiton-all overflow-x-auto lg:overflow-x-visible pointer-events-auto">
        {APPS.filter((a) => !a.hidden).map((item, key) => {
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
          tooltip={darkMode ? "Light Mode" : "Dark Mode"}
          icon={
            darkMode ? (
              <FiSun className="w-6 h-6 2xl:w-8 2xl:h-8" color={slate500} />
            ) : (
              <FiMoon className="w-6 h-6 2xl:w-8 2xl:h-8" color={slate500} />
            )
          }
          selected={false}
          onClick={toggleDarkMode}
        />
        <DockIcon
          tooltip={reducedMotion ? "Enable Motion" : "Disable Motion"}
          icon={
            reducedMotion ? (
              <PiSneakerMoveBold
                className="w-6 h-6 2xl:w-8 2xl:h-8"
                color={slate500}
              />
            ) : (
              <MdSlowMotionVideo
                className="w-6 h-6 2xl:w-8 2xl:h-8"
                color={slate500}
              />
            )
          }
          selected={false}
          onClick={toggleReducedMotion}
        />
      </div>
    </div>
  );
}
