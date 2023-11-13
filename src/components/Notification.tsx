import classNames from "classnames";
import { FiX } from "react-icons/fi";
import { NotificationType } from "types";

export default function Notification({
  message,
  title,
  icon,
  show,
  onClick,
  dismiss,
}: NotificationType & {
  dismiss: () => void;
}) {
  return (
    <div
      className={classNames(
        "absolute right-3 top-3 bg-slate-200/50 shadow-2xl rounded-lg py-3 px-5 backdrop-blur-sm group transition-all duration-300 cursor-pointer",
        {
          "opacity-0 translate-x-full": !show,
        },
      )}
      onClick={onClick}
    >
      <div
        className="absolute left-0 top-0 transform -translate-x-1/3 -translate-y-1/3 text-slate-800 hidden group-hover:flex items-center justify-center rounded-full w-5 h-5 bg-slate-300/80 cursor-pointer backdrop-blur-sm shadow-md"
        onClick={(e) => {
          e.stopPropagation();
          dismiss();
        }}
      >
        <FiX className="w-3 h-3" />
      </div>
      <div className="flex justify-center gap-3">
        {icon}
        <div>
          <div className="text-slate-800 text-md font-bold">{title}</div>
          <div className="text-slate-800 text-sm">{message}</div>
        </div>
      </div>
    </div>
  );
}
