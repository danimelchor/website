"use client";

import classNames from "classnames";
import { useTheme } from "@/providers/ThemeProvider";
import { useEffect, useRef, useState } from "react";
import { FiMaximize2, FiX, FiMinus } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { getSelectedApp } from "./Dock";

const TOP_ICONS = [
  {
    color: "red",
    icon: <FiX className="w-2 h-2 stroke-red-900" />,
  },
  {
    color: "orange",
    icon: <FiMinus className="w-2 h-2 stroke-orange-900" />,
  },

  {
    color: "green",
    icon: <FiMaximize2 className="w-2 h-2 stroke-green-900" />,
  },
];

function TopBarIcon({
  icon,
  closeApp,
  color,
}: {
  icon: React.ReactNode;
  closeApp: () => void;
  color: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      className={classNames(
        "w-3 h-3 rounded-full flex items-center justify-center",
        {
          "bg-red-500": color === "red",
          "bg-yellow-500": color === "orange",
          "bg-green-500": color === "green",
        },
      )}
      onClick={closeApp}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && icon}
    </button>
  );
}

function TopBar({
  closeApp,
  title,
  focus,
  setFocus,
}: {
  closeApp: () => void;
  title: string;
  focus: boolean;
  setFocus: (focus: boolean) => void;
}) {
  return (
    <div className="w-full h-8 flex items-center justify-between bg-slate-200 dark:bg-slate-800 px-2 relative">
      <div className="flex items-center justify-center gap-1">
        {TOP_ICONS.map((item, key) => {
          return (
            <TopBarIcon
              icon={item.icon}
              closeApp={closeApp}
              color={item.color}
              key={key}
            />
          );
        })}
      </div>
      <div className="text-slate-600 dark:text-slate-400 text-sm font-bold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {title}
      </div>
      <button
        className={classNames(
          "flex justify-center gap-1 rounded-full px-2 text-sm text-slate-700 dark:text-slate-400 ring-2 ring-slate-400 dark:ring-slate-700 cursor-pointer",
          {
            "bg-slate-400 dark:bg-slate-700": focus,
          },
        )}
        onClick={() => setFocus(!focus)}
      >
        Focus mode
      </button>
    </div>
  );
}

export default function App({
  children,
  open,
  setOpen,
  focus,
  setFocus,
}: {
  children: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  focus: boolean;
  setFocus: (focus: boolean) => void;
}) {
  const { reducedMotion } = useTheme();
  const contentRef = useRef<HTMLDivElement>(null);

  const path = usePathname();
  const title = getSelectedApp(path).title;

  useEffect(() => {
    if (open) {
      contentRef.current?.scrollTo(0, 0);
    }
  }, [open]);

  return (
    <div
      className={classNames(
        "rounded-xl bg-slate-100 dark:bg-slate-900 shadow-md flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden pointer-events-auto",
        {
          "scale-0 translate-y-1/2": !open,
          "scale-100 -translate-y-1/2": open,
        },
        {
          "w-[95%] h-[98%]": !focus,
          "w-[98%] h-[98%]": focus,
        },
      )}
      style={{
        transition: reducedMotion
          ? ""
          : [
              "scale 300ms cubic-bezier(0.4, 0, 0.2, 1)",
              "translate 300ms cubic-bezier(0.4, 0, 0.2, 1)",
              "width 150ms cubic-bezier(0.4, 0, 0.2, 1)",
              "height 150ms cubic-bezier(0.4, 0, 0.2, 1)",
              "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)",
            ].join(", "),
      }}
    >
      <TopBar
        closeApp={() => setOpen(false)}
        title={title}
        focus={focus}
        setFocus={setFocus}
      />
      <div
        className="w-full max-w-5xl h-full flex flex-col overflow-x-hidden"
        ref={contentRef}
      >
        <div className="w-full h-full py-5 md:py-10 xl:py-32 px-5 md:px-10 xl:px-0 flex flex-col overflow-y-auto overflow-x-hidden">
          {children}
        </div>
        <div className="w-full fixed flex-none max-w-6xl h-5 md:h-10 xl:h-32 bg-gradient-to-t from-transparent to-60% to-slate-100 dark:to-slate-900" />
        <div className="w-full fixed bottom-0 flex-none max-w-6xl h-5 md:h-10 xl:h-32 bg-gradient-to-b from-transparent to-60% to-slate-100 dark:to-slate-900" />
      </div>
    </div>
  );
}
