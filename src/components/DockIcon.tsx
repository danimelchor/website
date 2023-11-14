import classNames from "classnames";
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
  const [hovered, setHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout>();
  const [disappearTimeout, setDisappearTimeout] = useState<NodeJS.Timeout>();

  const handleMouseEnter = () => {
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
      className="bg-slate-200 dark:bg-slate-800 p-3 rounded-full transform transition-all duration-300 lg:hover:scale-150 lg:hover:-translate-y-3 lg:hover:mx-4 relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {icon}
      <div
        className={classNames(
          "absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full mb-10 text-xs text-slate-600 dark:text-slate-300 bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded-md shadow-md transition-opacity duration-300 scale-75",
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
            "bg-slate-400 dark:bg-slate-600": selected,
            "lg:opacity-0": hovered,
            "opacity-100": !hovered,
          },
        )}
      />
    </div>
  );
}
