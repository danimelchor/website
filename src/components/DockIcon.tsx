import classNames from "classnames";
import { useTheme } from "providers/ThemeProvider";
import { useEffect, useState } from "react";

export default function DockIcon({
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
  const { reducedMotion } = useTheme();

  const [hovered, setHovered] = useState(false);
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
    setHovered(true);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout);
    setHovered(false);
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
        "bg-slate-200 dark:bg-slate-800 rounded-full relative cursor-pointer w-12 h-12 2xl:w-14 2xl:h-14 flex items-center justify-center shrink-0",
        {
          "transform transition-all duration-300 lg:hover:scale-150 lg:hover:-translate-y-3 lg:hover:mx-4 ":
            !reducedMotion,
        },
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {icon}
      <div
        className={classNames(
          "absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full mb-10 text-xs text-slate-600 dark:text-slate-300 bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded-md shadow-md text-center select-none",
          {
            "opacity-0": !showTooltip,
            "opacity-0 lg:opacity-100": showTooltip,
            "transition-opacity duration-300 scale-75": !reducedMotion,
          },
        )}
      >
        {tooltip}
      </div>
      <div
        className={classNames(
          "h-1 w-1 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 transition-all duration-300",
          {
            "bg-slate-400 dark:bg-slate-600": selected,
            "lg:opacity-0": hovered && !reducedMotion,
            "opacity-100": !hovered || reducedMotion,
          },
        )}
      />
    </div>
  );
}
