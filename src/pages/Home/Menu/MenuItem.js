import React, { useState, useEffect, useCallback } from "react";

import { Link } from "react-scroll";

export default function MenuItem({ linkTo, icon, text, toggleMenuFunc }) {
  const [active, setActive] = useState(false);

  // Checks window scroll to see if a menu element should be highlighted
  const onScroll = useCallback(() => {
    const el = document.getElementById(linkTo);

    if (el) {
      let thisHeight = el.clientHeight;
      let thisOffsetTop = el.offsetTop;
      let offset = window.innerHeight / 3;

      if (
        window.scrollY + offset > thisOffsetTop &&
        window.scrollY + offset < thisOffsetTop + thisHeight
      )
        setActive(true);
      else setActive(false);
    }
  }, [linkTo]);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  let default_class = "cursor-pointer block transition-all pl-4 md:pl-6";

  return (
    <Link
      onClick={toggleMenuFunc}
      to={linkTo}
      smooth={true}
      duration={400}
      delay={0}
      spy={true}
      offset={window.innerWidth < 768 ? -84 : 0}
      ignoreCancelEvents={true}
      style={
        window.innerHeight > window.innerWidth
          ? { paddingTop: "2vh", paddingBottom: "2vh" }
          : { paddingTop: "2vh", paddingBottom: "2vh" }
      }
      className={
        default_class +
        (active
          ? " bg-gray-100 shadow-md relative menuItemActive text-gray-900 border-l-8 border-solid -mr-2 border-secondary dark:bg-gray-700 dark:text-white dark:border-primaryDark"
          : " bg-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 hover:text-black dark:bg-gray-800 dark:text-gray-300 dark:hover:text-gray-100 dark:border-primaryDark")
      }
    >
      <div className="inline-block align-middle text-2xl 2xl:text-3xl pr-5 w-12 text-center">
        {icon}
      </div>
      <span className="inline-block align-middle text-md xl:text-lg font-mono">
        <span className="text-secondary dark:text-secondaryDark">self</span>
        {text}
      </span>
    </Link>
  );
}
