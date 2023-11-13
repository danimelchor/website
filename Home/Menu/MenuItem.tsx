import { useState, useEffect, useCallback } from "react";
import { Link } from "react-scroll";

type PropTypes = {
  linkTo: string;
  icon: JSX.Element;
  text: string;
  toggleMenuFunc: () => void;
};

export default function MenuItem({
  linkTo,
  icon,
  text,
  toggleMenuFunc,
}: PropTypes) {
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
          ? " shadow-md relative menuItemActive border-l-8 border-solid -mr-2 bg-gray-700 text-white border-primaryDark"
          : " hover:bg-gray-700 bg-gray-800 text-gray-300 hover:text-gray-100 border-primaryDark")
      }
    >
      <div className="inline-block align-middle text-2xl 2xl:text-3xl pr-5 w-12 text-center">
        {icon}
      </div>
      <span className="inline-block align-middle text-md xl:text-lg font-mono">
        <span className="text-secondaryDark">self</span>
        {text}
      </span>
    </Link>
  );
}
