import { useEffect, useRef, useState } from "react";

import App from "components/App";
import Notification from "components/Notification";
import Dock, { APPS } from "components/Dock";
import Background from "components/Background";
import classNames from "classnames";

function Home() {
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
      setApp(null);
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

  return (
    <div className="w-screen h-full flex flex-col justify-between items-center relative overflow-hidden">
      <Background />
      <div
        className={classNames("w-full h-full relative z-10", {
          "pointer-events-none": !app,
        })}
      >
        {APPS.map((item, key) => {
          return (
            <App
              closeApp={() => handleChangeApp(null)}
              isOpen={app === item.title.toLowerCase()}
              title={item.title}
              key={key}
            >
              <item.component />
            </App>
          );
        })}
      </div>
      <Notification />
      <Dock app={app} setApp={handleChangeApp} />
    </div>
  );
}

export default Home;
