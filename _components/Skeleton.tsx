import classNames from "classnames";

export default function Skeleton({
  width,
  extra,
}: {
  width: number;
  extra?: string;
}) {
  return (
    <div
      className={classNames(
        "rounded-full h-3 bg-slate-500 dark:bg-slate-200 grow-0",
        extra,
      )}
      style={{ width: `${width}%` }}
    />
  );
}
