import { useEffect, useRef, useState } from "react";

import App from "components/App";
import Notification from "components/Notification";
import Dock, { APPS } from "components/Dock";

function Main() {
  const getAppFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const app = urlParams.get("app");
    return app || "about";
  };

  const [app, setApp] = useState<string | null>(getAppFromUrl());
  const appRef = useRef(app);

  useEffect(() => {
    appRef.current = app;
  }, [app]);

  const handleChangeApp = (newApp: string | null) => {
    if (newApp && newApp !== app) {
      setApp(newApp);
    } else {
    }

    // Update URL
    if (newApp !== "about") {
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set("app", newApp || "");
      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?${urlParams.toString()}`,
      );
    } else {
      window.history.replaceState({}, "", `${window.location.pathname}`);
    }
  };

  useEffect(() => {
    // Set theme
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="w-screen h-full flex flex-col justify-between items-center relative overflow-hidden">
      <div className="w-full h-full relative">
        {APPS.map((item, key) => {
          return (
            <App
              closeApp={() => handleChangeApp(null)}
              isOpen={app === item.title.toLowerCase()}
              title={item.title}
            >
              <item.component key={key} />
            </App>
          );
        })}
      </div>
      <Notification />
      <Dock app={app} setApp={handleChangeApp} />
    </div>
  );
}

export default Main;
