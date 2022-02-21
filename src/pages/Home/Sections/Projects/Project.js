import React, { useState } from "react";
import { Link } from "react-router-dom";

// Icons
import { FiCode, FiEye } from "react-icons/fi";

const Lang = ({ text, index }) => {
  return (
    <span
      key={index}
      className="px-1 inline-block rounded text-white bg-primary dark:bg-gray-800 border-gray-600 dark:border-gray-700 border shadow-2xl"
    >
      {text}
    </span>
  );
};

export default function Project({ languages, title, img, date, url }) {
  const [projectShow, setProjectShow] = useState(false);

  return (
    <button
      className="block my-5 md:m-5 lg:w-5/12 2xl:w-1/4 shadow-2xl hover:shadow-2xl hover:scale-105 transform transition-transform focus:outline-none group"
      onMouseEnter={() => {
        if (window.innerWidth < 768)
          setTimeout(function () {
            setProjectShow(true);
          }, 400);
        else setProjectShow(true);
      }}
      onMouseLeave={() => {
        setProjectShow(false);
      }}
    >
      <div className="relative h-6 w-full bg-gray-300 dark:bg-gray-800">
        <h2
          className="absolute inline-block align-middle transform overflow-hidden -translate-x-2/4 dark:text-gray-100"
          style={{ left: "50%" }}
        >
          {title}
        </h2>
        <div className="inline-block align-middle float-right">
          <div
            className="rounded-full h-3 w-3 inline-block mx-1"
            style={{ backgroundColor: "#FFC800" }}
          ></div>
          <div
            className="rounded-full h-3 w-3 inline-block mx-1"
            style={{ backgroundColor: "#2FA963" }}
          ></div>
          <div
            className="rounded-full h-3 w-3 inline-block mx-1"
            style={{ backgroundColor: "#2F4858" }}
          ></div>
        </div>
      </div>
      <div className="relative">
        <div className="w-full h-full overflow-hidden">
          <img src={img} alt={title + " Image"} className="z-0" />
        </div>
        <div
          className="absolute top-0 w-full h-full transition-opacity flex flex-col items-center justify-center bg-primary dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 z-30 opacity-0 group-hover:opacity-100"
          style={
            projectShow ? { pointerEvents: "all" } : { pointerEvents: "none" }
          }
        >
          <span className="absolute right-0 top-0 m-3 text-gray-200 w-1/4 flex items-start justify-end">
            {date}
          </span>
          <div className="p-3 absolute left-0 top-0 w-3/4 gap-1 flex flex-wrap">
            {languages.split(",").map((i, idx) => {
              if (idx < 6) return <Lang key={idx} index={idx} text={i} />;
              else if (idx === 6)
                return <Lang key={idx} index={idx} text="..." />;
              else return <div className="hidden" key={idx}></div>;
            })}
          </div>
          <div className="p-5 flex flex-col w-full items-center justify-center">
            <a
              href={url}
              className="px-3 py-2 rounded-full border-2 border-gray-800 bg-gray-800 my-2 dark:border-primary dark:bg-primary text-white hover:bg-opacity-50 transform hover:scale-110 transition-transform dark:hover:scale-110 hover:border-secondary dark:hover:border-secondaryDark dark:hover:bg-opacity-50 w-4/5 sm:w-3/4 2xl:w-1/2 flex items-center justify-center"
            >
              <FiCode className="w-8 mr-1 text-xl" />
              <span>See code</span>
            </a>
            <Link
              to={"/projects/" + title.toLowerCase().replaceAll(" ", "") + "/"}
              className="px-3 py-2 rounded-full border-2 border-gray-800 bg-gray-800 my-2 dark:border-primary dark:bg-primary text-white hover:bg-opacity-50 transform hover:scale-110 transition-transform dark:hover:scale-110 hover:border-secondary dark:hover:border-secondaryDark dark:hover:bg-opacity-50 w-4/5 sm:w-3/4 2xl:w-1/2 flex items-center justify-center"
            >
              <FiEye className="w-8 mr-1 text-xl" />
              <span>See more</span>
            </Link>
          </div>
        </div>
      </div>
    </button>
  );
}
