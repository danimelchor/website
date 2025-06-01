import classNames from "classnames";
import { useTheme } from "providers/ThemeProvider";
import { ReactNode, useEffect, useState } from "react";
import { FiUserPlus, FiX } from "react-icons/fi";

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
    // Display notif once an hour at most
    let lastShown = localStorage.getItem("notification");
    if (lastShown) {
      const timeDiff = Date.now() - parseInt(lastShown, 10);
      if (timeDiff < 1000 * 60 * 60) {
        return;
      }
    }

    let clearTo: NodeJS.Timeout | undefined;
    let newTo = setTimeout(() => {
      localStorage.setItem("notification", Date.now().toString());
      setNotification({
        title: "Want to connect?",
        message: "I'm always open to chat, feel free to reach out!",
        show: true,
        icon: (
          <FiUserPlus className="mt-1 w-5 h-5 stroke-slate-800 dark:stroke-slate-200" />
        ),
        onClick: dismiss,
      });
      clearTo = setTimeout(dismiss, 4000);
    }, 4000);

    return () => {
      if (newTo) clearTimeout(newTo);
      if (clearTo) clearTimeout(clearTo);
    };
  }, []);

  const dismiss = () => {
    setNotification((n: NotificationType) => ({ ...n, show: false }));
  };

  const bgColor =
    "bg-gradient-to-r from-blue-400/70 to-emerald-400/70 dark:from-emerald-700/70 dark:to-blue-700/70";

  return (
    <div
      className={classNames(
        "absolute md:right-3 left-1/2 md:left-auto transform top-3 shadow-lg rounded-lg py-3 px-4 backdrop-blur-sm group cursor-pointer w-9.5/10 md:w-auto shadow-slate-300/60 dark:shadow-slate-700/60 z-20",
        {
          "opacity-0 -translate-x-1/2 -translate-y-full md:translate-x-full md:translate-y-0":
            !notification.show,
          "opacity-1 -translate-x-1/2 translate-y-0 md:translate-x-0 md:translate-y-0":
            notification.show,
        },
        bgColor,
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
          "absolute left-0 top-0 transform -translate-x-1/3 -translate-y-1/3 opacity-0 md:group-hover:opacity-100 flex items-center justify-center rounded-full w-5 h-5 cursor-pointer backdrop-blur-sm shadow-md",
          {
            transition: !reducedMotion,
          },
          bgColor,
        )}
        onClick={(e) => {
          e.stopPropagation();
          dismiss();
        }}
      >
        <FiX className="w-3 h-3 text-slate-800 dark:text-slate-200 " />
      </div>
      <div className="flex gap-3 h-full">
        {notification.icon}
        <div className="flex h-full flex-col">
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
