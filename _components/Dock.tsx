"use client";
import {
  FiGithub,
  FiTwitter,
  FiFileText,
  FiBookOpen,
  FiSun,
  FiMoon,
  FiMail,
  FiPackage,
} from "react-icons/fi";
import { LiaCompassSolid } from "react-icons/lia";
import { MdSlowMotionVideo } from "react-icons/md";
import { RiQuillPenLine } from "react-icons/ri";
import { PiSneakerMoveBold } from "react-icons/pi";

import DockIcon from "@/_components/DockIcon";
import { useTheme } from "@/providers/ThemeProvider";

import { Dispatch, ReactNode, SetStateAction } from "react";
import { usePathname, useRouter } from "next/navigation";

const slate500 = "#64748b";

interface App {
  title: string;
  tooltip: string;
  icon: ReactNode;
  hidden?: boolean;
  path: string;
  match: RegExp;
}

export const APPS: App[] = [
  {
    title: "About",
    tooltip: "About",
    icon: <FiBookOpen className="w-6 h-6 2xl:w-8 2xl:h-8" color={slate500} />,
    path: "/",
    match: /^\/$/,
  },
  {
    title: "Open source projects",
    tooltip: "Projects",
    icon: <FiPackage className="w-6 h-6 2xl:w-8 2xl:h-8" color={slate500} />,
    path: "/projects",
    match: /^\/projects/,
  },
  {
    title: "Just another blog",
    tooltip: "Blog",
    icon: (
      <RiQuillPenLine className="w-6 h-6 2xl:w-8 2xl:h-8" color={slate500} />
    ),
    hidden: false,
    path: "/blog",
    match: /^\/blog/,
  },
  {
    title: "Experience",
    tooltip: "Experience",
    icon: (
      <LiaCompassSolid className="w-6 h-6 2xl:w-8 2xl:h-8" color={slate500} />
    ),
    path: "/experience",
    match: /^\/experience/,
  },
  {
    title: "Contact",
    tooltip: "Contact",
    icon: <FiMail className="w-6 h-6 2xl:w-8 2xl:h-8" color={slate500} />,
    path: "/contact",
    match: /^\/contact/,
  },
];

export const getSelectedApp = (path: string): App => {
  for (const app of APPS) {
    if (app.match.test(path)) {
      return app;
    }
  }

  throw new Error("Invalid app");
};

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
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const { darkMode, reducedMotion, toggleDarkMode, toggleReducedMotion } =
    useTheme();

  return (
    <div className="w-full flex justify-center items-center px-2 z-10 pointer-events-none select-none">
      <div className="rounded-full bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 mb-2 bg-opacity-95 shadow-md flex lg:justify-center items-center gap-2 transiton-all overflow-x-auto overflow-y-hidden lg:overflow-x-visible lg:overflow-y-visible pointer-events-auto border-8 border-slate-100 dark:border-slate-900">
        {APPS.filter((a) => !a.hidden).map((item, key) => {
          const selected = item.match.test(pathname);
          return (
            <DockIcon
              tooltip={item.tooltip}
              icon={item.icon}
              key={key}
              selected={selected}
              onClick={() => {
                if (selected) {
                  setOpen((o) => !o);
                } else {
                  setOpen(true);
                  router.replace(item.path);
                }
              }}
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
        <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded-full border-0 w-0.5">
          &nbsp;
        </div>
        {SOCIALS.map((item, key) => {
          return (
            <DockIcon
              tooltip={item.tooltip}
              icon={item.icon}
              key={key}
              selected={false}
              onClick={() => window.open(item.url, "_blank")}
            />
          );
        })}
      </div>
    </div>
  );
}
