"use client";

import classNames from "classnames";
import { useTheme } from "@/providers/ThemeProvider";
import { useEffect, useRef, useState } from "react";
import { FiMaximize2, FiX, FiMinus } from "react-icons/fi";
import useApp from "@/_hooks/useApp";

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

function TopBar({ closeApp, title }: { closeApp: () => void; title: string }) {
  return (
    <div className="w-full h-8 flex items-center justify-between bg-slate-200 dark:bg-slate-800 px-2">
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
      <div className="text-slate-600 dark:text-slate-400 text-sm font-bold">
        {title}
      </div>
      <div className="opacity-0 pointer-events-none flex items-center justify-center gap-1">
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
    </div>
  );
}

export default function App({
  children,
  open,
  setOpen,
}: {
  children: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const { reducedMotion } = useTheme();
  const contentRef = useRef<HTMLDivElement>(null);
  const { app } = useApp();

  useEffect(() => {
    if (open) {
      contentRef.current?.scrollTo(0, 0);
    }
  }, [open]);

  return (
    <div
      className={classNames(
        "flex justify-center items-center z-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full",
        {
          "scale-0 translate-y-1/2": !open,
          "scale-100 -translate-y-1/2": open,
          "w-[95%] pt-4 pb-22": !app.focused,
          "px-2 py-2 w-full md:px-0 md:w-[98%] md:py-4": app.focused,
        },
      )}
      style={{
        transition: reducedMotion
          ? ""
          : [
              "scale 300ms cubic-bezier(0.4, 0, 0.2, 1)",
              "translate 300ms cubic-bezier(0.4, 0, 0.2, 1)",
              "width 300ms cubic-bezier(0.4, 0, 0.2, 1)",
              "height 300ms cubic-bezier(0.4, 0, 0.2, 1)",
              "padding 300ms cubic-bezier(0.4, 0, 0.2, 1)",
            ].join(", "),
      }}
    >
      <div
        className={classNames(
          "rounded-xl bg-slate-100 dark:bg-slate-900 shadow-md flex flex-col items-center justify-center overflow-hidden pointer-events-auto w-full h-full",
        )}
        style={{
          transition: reducedMotion
            ? ""
            : ["background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)"].join(
                ", ",
              ),
        }}
      >
        <TopBar closeApp={() => setOpen(false)} title={app.title} />
        <div className="w-full h-full flex flex-col items-center relative overflow-x-hidden">
          <div
            className="w-full h-full flex justify-center overflow-y-auto overflow-x-hidden"
            ref={contentRef}
          >
            <div className="max-w-5xl w-full h-full py-5 md:py-10 xl:py-20 px-5 md:px-10 xl:px-0 flex flex-col">
              {children}
            </div>
          </div>
          <div className="w-full absolute flex-none h-5 md:h-10 xl:h-20 bg-gradient-to-t from-transparent to-60% to-slate-100 dark:to-slate-900" />
          <div className="w-full absolute bottom-0 flex-none h-5 md:h-10 xl:h-20 bg-gradient-to-b from-transparent to-60% to-slate-100 dark:to-slate-900" />
        </div>
      </div>
    </div>
  );
}
