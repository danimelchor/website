import { FiBookOpen, FiMail, FiPackage } from "react-icons/fi";
import { LiaCompassSolid } from "react-icons/lia";
import { RiQuillPenLine } from "react-icons/ri";

import { ReactNode, useMemo } from "react";
import { usePathname } from "next/navigation";

const slate500 = "#64748b";

interface App {
  title: string;
  tooltip: string;
  icon: ReactNode;
  path: string;
  selected: boolean;
  hidden?: boolean;
  focused?: boolean;
}

export default function useApp() {
  const pathname = usePathname();
  const allApps: App[] = useMemo(
    () => [
      {
        title: "About",
        tooltip: "About",
        icon: (
          <FiBookOpen className="w-6 h-6 2xl:w-8 2xl:h-8" color={slate500} />
        ),
        path: "/",
        selected: /^\/$/.test(pathname),
      },
      {
        title: "Open source projects",
        tooltip: "Projects",
        icon: (
          <FiPackage className="w-6 h-6 2xl:w-8 2xl:h-8" color={slate500} />
        ),
        path: "/projects",
        selected: /^\/projects/.test(pathname),
      },
      {
        title: "Just another blog",
        tooltip: "Blog",
        icon: (
          <RiQuillPenLine
            className="w-6 h-6 2xl:w-8 2xl:h-8"
            color={slate500}
          />
        ),
        path: "/blog",
        selected: /^\/blog/.test(pathname),
        focused: !/^\/blog$/.test(pathname),
      },
      {
        title: "Experience",
        tooltip: "Experience",
        icon: (
          <LiaCompassSolid
            className="w-6 h-6 2xl:w-8 2xl:h-8"
            color={slate500}
          />
        ),
        path: "/experience",
        selected: /^\/experience/.test(pathname),
      },
      {
        title: "Contact",
        tooltip: "Contact",
        icon: <FiMail className="w-6 h-6 2xl:w-8 2xl:h-8" color={slate500} />,
        path: "/contact",
        selected: /^\/contact/.test(pathname),
      },
    ],
    [pathname],
  );

  const app = useMemo(() => {
    for (const app of allApps) {
      if (app.selected) {
        return app;
      }
    }

    throw new Error("Invalid app");
  }, [pathname, allApps]);

  return { allApps, app };
}
