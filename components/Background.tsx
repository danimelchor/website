"use client";
import classNames from "classnames";
import { useTheme } from "@/providers/ThemeProvider";
import { useCallback, useEffect, useRef, useState } from "react";

const COLORS = [
  "hover:bg-red-200 dark:hover:bg-red-800",
  "hover:bg-orange-200 dark:hover:bg-orange-800",
  "hover:bg-yellow-200 dark:hover:bg-yellow-800",
  "hover:bg-green-200 dark:hover:bg-green-800",
  "hover:bg-blue-200 dark:hover:bg-blue-800",
  "hover:bg-indigo-200 dark:hover:bg-indigo-800",
  "hover:bg-purple-200 dark:hover:bg-purple-800",
  "hover:bg-pink-200 dark:hover:bg-pink-800",
  "hover:bg-rose-200 dark:hover:bg-rose-800",
  "hover:bg-cyan-200 dark:hover:bg-cyan-800",
  "hover:bg-emerald-200 dark:hover:bg-emerald-800",
  "hover:bg-violet-200 dark:hover:bg-violet-800",
];

const SIZE = 60;

function GridItem({
  x,
  y,
  rows,
  cols,
  reducedMotion,
}: {
  x: number;
  y: number;
  rows: number;
  cols: number;
  reducedMotion: boolean;
}) {
  const [tout, setTout] = useState<NodeJS.Timeout>();
  const boxRef = useRef<HTMLDivElement>(null);

  const i = x + y;
  const color = COLORS[i % COLORS.length];

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    const handleMouseEnter = () => {
      box.style.transition = "background 0s ease";
    };

    const handleMouseLeave = () => {
      box.style.transition = "background 2s ease";
      setTout(
        setTimeout(() => {
          box.style.transition = "";
        }, 2000),
      );
    };

    const totalAnimTime = 1500;
    const numCells = rows * cols;
    const step = totalAnimTime / numCells;
    const cellNum = x + y * cols;
    const delay = step * cellNum;

    if (!reducedMotion) {
      setTimeout(() => {
        box.style.opacity = "1";
        box.style.pointerEvents = "auto";
      }, delay);

      box.addEventListener("mouseenter", handleMouseEnter);
      box.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      box.removeEventListener("mouseenter", handleMouseEnter);
      box.removeEventListener("mouseleave", handleMouseLeave);
      if (tout) clearTimeout(tout);
    };
  }, [boxRef, tout, x, y, cols, reducedMotion]);

  return (
    <div
      className={classNames(
        "bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 cursor-pointer absolute",
        {
          [color]: !reducedMotion,
        },
      )}
      style={{
        width: SIZE,
        height: SIZE,
        top: y * SIZE,
        left: x * SIZE,
        opacity: reducedMotion ? 1 : 0,
        pointerEvents: reducedMotion ? "auto" : "none",
        transition: reducedMotion ? "" : "opacity 1s ease",
      }}
      ref={boxRef}
    ></div>
  );
}

export default function Background() {
  const getCols = () => {
    return Math.ceil(window.innerWidth / SIZE);
  };

  const getRows = () => {
    return Math.ceil(window.innerHeight / SIZE);
  };

  const [cols, setCols] = useState(getCols());
  const [rows, setRows] = useState(getRows());
  const [cells, setCells] = useState<JSX.Element[]>([]);
  const { reducedMotion } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      setCols(getCols());
      setRows(getRows());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getCells = useCallback(() => {
    let cells = [];
    for (let x = 0; x < 2 * cols; x++) {
      for (let y = 0; y < 2 * rows; y++) {
        cells.push(
          <GridItem
            x={x}
            y={y}
            key={`${x}-${y}`}
            rows={rows}
            cols={cols}
            reducedMotion={reducedMotion}
          />,
        );
      }
    }
    return cells;
  }, [cols, rows, reducedMotion]);

  useEffect(() => {
    if (cells) setCells([]);

    if (!reducedMotion) {
      setTimeout(() => {
        setCells(getCells());
      }, 50);
    } else {
      setCells(getCells());
    }
  }, [cols, rows, getCells, reducedMotion]);

  return (
    <div className="w-screen h-screen fixed top-0 left-0">
      <div className="w-screen h-screen relative">{cells}</div>
    </div>
  );
}
