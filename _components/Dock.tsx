"use client";
import { FiGithub, FiTwitter, FiFileText, FiSun, FiMoon } from "react-icons/fi";
import { MdSlowMotionVideo } from "react-icons/md";
import { PiSneakerMoveBold } from "react-icons/pi";

import DockIcon from "@/_components/DockIcon";
import { useTheme } from "@/providers/ThemeProvider";

import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import classNames from "classnames";
import useApp from "@/_hooks/useApp";

const slate500 = "#64748b";

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
  const router = useRouter();
  const { app, allApps } = useApp();

  const { darkMode, reducedMotion, toggleDarkMode, toggleReducedMotion } =
    useTheme();

  return (
    <div
      className={classNames(
        "w-full flex justify-center items-center px-2 z-4 pointer-events-none select-none absolute transform bottom-0 h-22",
        {
          "translate-y-full scale-0 h-0": app.focused,
          "transition-transform": !reducedMotion,
        },
      )}
    >
      <div className="rounded-full bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 bg-opacity-95 shadow-md flex lg:justify-center items-center gap-2 transiton-all overflow-x-auto overflow-y-hidden lg:overflow-x-visible lg:overflow-y-visible pointer-events-auto border-8 border-slate-100 dark:border-slate-900">
        {allApps
          .filter((a) => !a.hidden)
          .map((item, key) => {
            return (
              <DockIcon
                tooltip={item.tooltip}
                icon={item.icon}
                key={key}
                selected={item.selected}
                onClick={() => {
                  if (item.selected) {
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
