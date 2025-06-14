"use client";
import classNames from "classnames";
import { useTheme } from "@/providers/ThemeProvider";
import { ReactNode, useEffect, useState } from "react";

function Tooltip({
  tooltip,
  show,
  reducedMotion,
}: {
  tooltip: string;
  show: boolean;
  reducedMotion: boolean;
}) {
  return (
    <div
      className={classNames(
        "absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full mb-10 text-xs text-slate-600 dark:text-slate-300 bg-slate-300 dark:bg-slate-600 px-2 py-1 rounded-md shadow-md text-center select-none w-28",
        {
          "opacity-0": !show,
          "opacity-0 lg:opacity-100": show,
          "transition-opacity duration-300 scale-75": !reducedMotion,
        },
      )}
    >
      {tooltip}
      <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-300 dark:border-t-slate-600" />
    </div>
  );
}

export default function DockIcon({
  onClick,
  tooltip,
  icon,
  selected,
}: {
  tooltip: string;
  icon: ReactNode;
  selected: boolean;
  onClick: () => void;
}) {
  const { reducedMotion } = useTheme();

  const [showTooltip, setShowTooltip] = useState(false);

  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout>();
  const [disappearTimeout, setDisappearTimeout] = useState<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    if (!reducedMotion) {
      setHoverTimeout(
        setTimeout(() => {
          setShowTooltip(true);

          setDisappearTimeout(
            setTimeout(() => {
              setShowTooltip(false);
            }, 3000),
          );
        }, 500),
      );
    } else {
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout);
    setShowTooltip(false);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeout) clearTimeout(hoverTimeout);
      if (disappearTimeout) clearTimeout(disappearTimeout);
    };
  }, [hoverTimeout, disappearTimeout]);

  return (
    <div
      className={classNames(
        "bg-slate-200 dark:bg-slate-800 rounded-full relative cursor-pointer w-12 h-12 2xl:w-14 2xl:h-14 flex items-center justify-center shrink-0 border-2 box-border",
        {
          "transform transition-all duration-300 lg:hover:scale-150 lg:hover:-translate-y-3 lg:hover:mx-4 ":
            !reducedMotion,
          "border-slate-400 dark:border-slate-600": selected,
          "border-slate-200 dark:border-slate-800 hover:border-slate-300 hover:dark:border-slate-700":
            !selected,
        },
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {icon}
      <Tooltip
        tooltip={tooltip}
        show={showTooltip}
        reducedMotion={reducedMotion}
      />
    </div>
  );
}
