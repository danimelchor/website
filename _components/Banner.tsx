"use client";
import {
  COLOR_TO_LIGHT_BG,
  COLOR_TO_RING_COLOR,
  COLOR_TO_TEXT_COLOR,
} from "@/colors";
import classNames from "classnames";
import { ReactNode } from "react";

function Banner({
  title,
  description,
  icon,
  color,
}: {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
}) {
  return (
    <div
      className={classNames(
        "flex flex-col rounded-md px-7 py-5 ring-1 ring-inset mt-4",
        COLOR_TO_RING_COLOR[color],
        COLOR_TO_TEXT_COLOR[color],
        COLOR_TO_LIGHT_BG[color],
      )}
    >
      <div className="flex items-center gap-1">
        {icon}
        <p className="text-lg font-bold">{title}</p>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default Banner;
