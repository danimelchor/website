import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { SocialType } from "types";

export default function SocialIcon({ url, title, icon, type } : SocialType) {
  const style =
    "text-white p-2 w-12 h-12 2xl:w-16 2xl:h-16 group-hover:bg-gray-800 flex items-center justify-center rounded-full transition-colors duration-200 cursor-pointer";

  return (
    <div className="relative group social-icon">
      <div className="tooltip">
        <div className="arrow left-4 2xl:left-6"></div>
        {title}
      </div>
      {type === "internal" && (
        <Link className={style} to={url}>
          {icon}
        </Link>
      )}
      {type === "external" && (
        <a className={style} href={url}>
          {icon}
        </a>
      )}
      {type === "scroll" && (
        <ScrollLink
          className={style}
          to={url}
          smooth={true}
          duration={400}
          delay={0}
          spy={true}
          offset={window.innerWidth < 768 ? -84 : 0}
          ignoreCancelEvents={true}
        >
          {icon}
        </ScrollLink>
      )}
    </div>
  );
}
