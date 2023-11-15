import classNames from "classnames";
import { useTheme } from "providers/ThemeProvider";
import { ReactNode, useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { TbMessageCirclePlus } from "react-icons/tb";

type NotificationType = {
  title?: string;
  message?: string;
  icon?: ReactNode;
  show: boolean;
  onClick?: () => void;
};

export default function Notification() {
  const { reducedMotion } = useTheme();
  const [notification, setNotification] = useState<NotificationType>({
    show: false,
  });

  useEffect(() => {
    let to = setTimeout(() => {
      setNotification({
        title: "Want to connect?",
        message: "I'm always open to chat, feel free to reach out!",
        show: true,
        icon: (
          <TbMessageCirclePlus className="w-6 h-6 stroke-slate-800 dark:stroke-slate-200" />
        ),
        onClick: () => {
          setNotification((n: NotificationType) => ({ ...n, show: false }));
        },
      });
    }, 4000);

    return () => {
      if (to) clearTimeout(to);
    };
  }, []);

  const dismiss = () => {
    setNotification((n: NotificationType) => ({ ...n, show: false }));
  };

  return (
    <div
      className={classNames(
        "absolute md:right-3 left-1/2 md:left-auto transform top-16 lg:top-3 bg-gradient-to-r from-blue-600/70 to-emerald-500/70 dark:from-emerald-700/70 dark:to-blue-700/70 shadow-lg rounded-lg py-3 px-5 backdrop-blur-sm group cursor-pointer w-9.5/10 md:w-auto shadow-slate-300/60 dark:shadow-slate-700/60 z-20",
        {
          "opacity-0 translate-x-full": !notification.show,
          "opacity-1 -translate-x-1/2 md:translate-x-0": notification.show,
        },
      )}
      onClick={notification.onClick}
      style={{
        transitionProperty: reducedMotion
          ? ""
          : "transform, background-color, opacity",
        transitionDuration: reducedMotion ? "" : "150ms",
        transitionTimingFunction: reducedMotion
          ? ""
          : "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div
        className={classNames(
          "absolute left-0 top-0 transform -translate-x-1/3 -translate-y-1/3 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-full w-5 h-5 cursor-pointer backdrop-blur-sm shadow-md bg-gradient-to-r from-blue-600/70 to-emerald-500/70 dark:from-emerald-700/70 dark:to-blue-700/70",
          {
            transition: !reducedMotion,
          },
        )}
        onClick={(e) => {
          e.stopPropagation();
          dismiss();
        }}
      >
        <FiX className="w-3 h-3 text-slate-800 dark:text-slate-200 " />
      </div>
      <div className="flex justify-center gap-3">
        {notification.icon}
        <div>
          <div className="text-slate-800 dark:text-slate-200 text-md font-bold">
            {notification.title}
          </div>
          <div className="text-slate-800 dark:text-slate-200 text-sm">
            {notification.message}
          </div>
        </div>
      </div>
    </div>
  );
}
