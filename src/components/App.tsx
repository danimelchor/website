import classNames from "classnames";
import { useTheme } from "providers/ThemeProvider";
import { useEffect, useRef, useState } from "react";
import { FiMaximize2, FiX, FiMinus } from "react-icons/fi";

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
  title,
  isOpen,
  closeApp,
}: {
  children: React.ReactNode;
  title: string;
  isOpen: boolean;
  closeApp: () => void;
}) {
  const { reducedMotion } = useTheme();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      contentRef.current?.scrollTo(0, 0);
    }
  }, [isOpen]);

  return (
    <div
      className={classNames(
        "w-9.5/10 h-9.5/10 md:w-9/10 rounded-xl bg-slate-100 dark:bg-slate-900 shadow-md flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 overflow-hidden pointer-events-auto",
        {
          "scale-0 translate-y-1/2": !isOpen,
          "scale-100 -translate-y-1/2": isOpen,
        },
      )}
      style={{
        transition: reducedMotion
          ? ""
          : "transform 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <TopBar closeApp={closeApp} title={title} />
      <div
        className="w-full max-w-6xl my-10 xl:my-20 h-full flex flex-col overflow-y-auto overflow-x-hidden"
        ref={contentRef}
      >
        {children}
      </div>
    </div>
  );
}
