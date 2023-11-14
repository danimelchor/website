import classNames from "classnames";
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
        "absolute md:right-3 left-1/2 md:left-auto transform -translate-x-1/2 md:translate-x-0 top-16 lg:top-3 bg-slate-200/50 dark:bg-slate-800/70 shadow-lg rounded-lg py-3 px-5 backdrop-blur-sm group transition-all duration-300 cursor-pointer w-9.5/10 md:w-auto shadow-slate-300/60 dark:shadow-slate-700/60",
        {
          "opacity-0 translate-x-full": !notification.show,
        },
      )}
      onClick={notification.onClick}
    >
      <div
        className="absolute left-0 top-0 transform -translate-x-1/3 -translate-y-1/3 text-slate-800 hidden group-hover:flex items-center justify-center rounded-full w-5 h-5 bg-slate-300/80 dark:bg-slate-700/80 cursor-pointer backdrop-blur-sm shadow-md"
        onClick={(e) => {
          e.stopPropagation();
          dismiss();
        }}
      >
        <FiX className="w-3 h-3" />
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
