import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";

const COLORS = [
  "lg:hover:bg-red-200 lg:dark:hover:bg-red-800",
  "lg:hover:bg-orange-200 lg:dark:hover:bg-orange-800",
  "lg:hover:bg-yellow-200 lg:dark:hover:bg-yellow-800",
  "lg:hover:bg-green-200 lg:dark:hover:bg-green-800",
  "lg:hover:bg-blue-200 lg:dark:hover:bg-blue-800",
  "lg:hover:bg-indigo-200 lg:dark:hover:bg-indigo-800",
  "lg:hover:bg-purple-200 lg:dark:hover:bg-purple-800",
  "lg:hover:bg-pink-200 lg:dark:hover:bg-pink-800",
  "lg:hover:bg-rose-200 lg:dark:hover:bg-rose-800",
  "lg:hover:bg-cyan-200 lg:dark:hover:bg-cyan-800",
  "lg:hover:bg-emerald-200 lg:dark:hover:bg-emerald-800",
  "lg:hover:bg-violet-200 lg:dark:hover:bg-violet-800",
];

const SIZE = 60;

function GridItem({ x, y }: { x: number; y: number }) {
  const [transition, setTransition] = useState("background 0.1s ease-out");
  const [to, setTo] = useState<NodeJS.Timeout>();

  const i = x + y;
  const color = COLORS[i % COLORS.length];

  const handleMouseLeave = () => {
    setTransition("background 1s ease-in");
    setTo(
      setTimeout(() => {
        setTransition("background 0.1s ease-out");
      }, 1000),
    );
  };

  useEffect(() => {
    return () => {
      if (to) {
        clearTimeout(to);
      }
    };
  }, [to]);

  return (
    <div
      className={classNames(
        "bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 cursor-pointer absolute",
        color,
      )}
      style={{
        width: SIZE,
        height: SIZE,
        top: y * SIZE,
        left: x * SIZE,
        transition: transition,
      }}
      onMouseLeave={handleMouseLeave}
    ></div>
  );
}

export default function Background({ interactive }: { interactive: boolean }) {
  const getCols = () => {
    return Math.ceil(window.innerWidth / SIZE);
  };

  const getRows = () => {
    return Math.ceil(window.innerHeight / SIZE);
  };

  const [cols, setCols] = useState(getCols());
  const [rows, setRows] = useState(getRows());

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

  const cells = useMemo(() => {
    let cells = [];
    for (let x = 0; x < 2 * cols; x++) {
      for (let y = 0; y < 2 * rows; y++) {
        cells.push(<GridItem x={x} y={y} key={`${x}-${y}`} />);
      }
    }
    return cells;
  }, [cols, rows]);

  return (
    <div
      className={classNames(
        "w-screen h-screen fixed top-0 left-0 pointer-events-none",
        {
          "lg:pointer-events-auto": interactive,
        },
      )}
    >
      <div className="w-screen h-screen relative">{cells}</div>
    </div>
  );
}
