type Mapping = {
  [key: string]: string;
};

export const COLOR_TO_SHADOW: Mapping = {
  indigo: "shadow-indigo-300 dark:shadow-indigo-700",
  orange: "shadow-orange-300 dark:shadow-orange-700",
  cyan: "shadow-cyan-300 dark:shadow-cyan-700",
  emerald: "shadow-emerald-300 dark:shadow-emerald-700",
  rose: "shadow-rose-300 dark:shadow-rose-700",
  blue: "shadow-blue-300 dark:shadow-blue-700",
  slate: "shadow-slate-500",
  violet: "shadow-violet-300 dark:shadow-violet-700",
};

export const COLOR_TO_BG: Mapping = {
  indigo:
    "to-indigo-100 hover:to-indigo-200 dark:to-indigo-900 dark:hover:to-indigo-800",
  orange:
    "to-orange-100 hover:to-orange-200 dark:to-orange-900 dark:hover:to-orange-800",
  cyan: "to-cyan-100 hover:to-cyan-200 dark:to-cyan-900 dark:hover:to-cyan-800",
  emerald:
    "to-green-100 hover:to-green-200 dark:to-green-900 dark:hover:to-green-800",
  rose: "to-rose-100 hover:to-rose-200 dark:to-rose-900 dark:hover:to-rose-800",
  slate:
    "to-slate-200 dark:to-slate-800 hover:to-slate-300 dark:hover:to-slate-700",
  blue: "to-blue-100 dark:to-blue-900 hover:to-blue-200 dark:hover:to-blue-800",
  violet:
    "to-violet-100 dark:to-violet-900 hover:to-violet-200 dark:hover:to-violet-800",
};

export const COLOR_TO_IMG_BG: Mapping = {
  indigo: "bg-indigo-300 dark:bg-indigo-700",
  orange: "bg-orange-300 dark:bg-orange-700",
  cyan: "bg-cyan-300 dark:bg-cyan-700",
  emerald: "bg-emerald-300 dark:bg-emerald-700",
  rose: "bg-rose-300 dark:bg-rose-700",
  slate: "bg-slate-300 dark:bg-slate-700",
  blue: "bg-blue-300 dark:bg-blue-700",
  violet: "bg-violet-300 dark:bg-violet-700",
};

export const COLOR_TO_TEXT_COLOR: Mapping = {
  indigo: "text-indigo-700 dark:text-indigo-300",
  orange: "text-orange-700 dark:text-orange-300",
  cyan: "text-cyan-700 dark:text-cyan-300",
  emerald: "text-green-700 dark:text-green-300",
  rose: "text-rose-700 dark:text-rose-300",
  slate: "text-slate-700 dark:text-slate-300",
  blue: "text-blue-700 dark:text-blue-300",
  violet: "text-violet-700 dark:text-violet-300",
};
