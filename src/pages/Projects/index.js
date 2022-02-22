import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

import { setThemeFunc } from "../../functions/theme";
import { PROJECTS_LIST } from "../../data/home/projects";

// Icons
import {
  FiChevronLeft,
  FiCode,
  FiPlay,
  FiTwitter,
  FiMail,
} from "react-icons/fi";
import { HiOutlineLink } from "react-icons/hi";
import { toast } from "react-toastify";
import Notification from "../../components/Notification";

const copyToClipboard = (str) => {
  const el = document.createElement("textarea");
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

// POST COMPONENT
export default function ProjectPage() {
  const [project, setProject] = useState();
  const params = useParams();

  useEffect(() => {
    const project_path = params.project;

    for (const p of PROJECTS_LIST) {
      if (p.title.toLowerCase().replaceAll(" ", "") === project_path) {
        setProject(p);
        break;
      }
    }

    setThemeFunc();
  }, [params]);

  if (project === undefined) return <></>;

  let date = new Date(project.date).toDateString().split(" ");
  date = `${date[0]}, ${date[1]} ${date[2]},  ${date[3]}`;

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 dark:text-gray-100 dark:bg-gray-900">
        {/* Image */}
        <div
          className="bg-no-repeat bg-cover absolute top-0 left-0 filter brightness-50"
          style={{
            width: "100vw",
            height: "35vh",
            clipPath:
              "polygon(100% 0, 100% 90%,75% 100%, 25% 100%, 0 90%, 0 0)",
            backgroundImage: `url(${project.imgLarge})`,
          }}
        ></div>

        {/* Share div */}
        <div className="fixed top-3/4 md:top-1/2 right-0 -translate-y-1/2 flex flex-col bg-white rounded-sm dark:bg-gray-800 dark:text-white z-20 p-4 text-primary shadow-md">
          <span className="pb-3 font-bold">Share</span>
          <a
            href={
              "https://twitter.com/intent/tweet?text=Hey! Check out this project by Daniel Melchor: https://danielmelchor.com/projects/" +
              project.title.toLowerCase().replaceAll(" ", "")
            }
            target="_blank"
            rel="noreferrer"
            className="p-3 text-xl border-t-2 border-b-2 border-primary dark:border-gray-300 hover:text-gray-400 dark:hover:text-gray-600"
          >
            <FiTwitter />
          </a>
          <a
            href={
              "mailto:email?subject=Check out this project by Daniel Melchor&body=Hey! Check out this project by Daniel Melchor: https://danielmelchor.com/projects/" +
              project.title.toLowerCase().replaceAll(" ", "")
            }
            className="p-3 text-xl border-b-2 border-primary dark:border-gray-300 hover:text-gray-400 dark:hover:text-gray-600"
          >
            <FiMail />
          </a>
          <div
            className="p-3 pb-0 text-xl cursor-pointer hover:text-gray-400 dark:hover:text-gray-600"
            onClick={() => {
              copyToClipboard(
                "https://danielmelchor.com/projects/" +
                  project.title.toLowerCase().replaceAll(" ", "")
              );
              toast.success("Copied to clipboard");
            }}
          >
            <HiOutlineLink />
          </div>
        </div>

        {/* Project */}
        <div
          className="w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-1/2 border border-gray-200 p-10 rounded-sm flex flex-col h-full bg-white dark:bg-gray-800 dark:border-gray-700 z-10 shadow-md"
          style={{ marginTop: "30vh", paddingBottom: "30vh" }}
        >
          <div className="flex items-center justify-between mb-4">
            <Link
              to="/projects"
              className="text-primary dark:text-gray-300 flex items-center group"
            >
              <FiChevronLeft />
              <span className="group-hover:underline">Go back</span>
            </Link>
            <div className="flex items-center gap-2">
              {project.live !== "" && (
                <a
                  href={project.live}
                  className="border-2 rounded-full border-purple-600 dark:border-purple-400 px-3 py-1 sm:py-0 hover:scale-105 transform transition-transform transition-colors text-purple-600 dark:text-purple-400 font-bold hover:bg-purple-600 dark:hover:bg-purple-400 hover:text-white dark:hover:text-gray-800 flex items-center justify-center gap-2"
                >
                  <FiPlay />
                  <span className="hidden sm:block">Visit project</span>
                </a>
              )}
              {project.url !== "" && (
                <a
                  href={project.url}
                  className="border-2 rounded-full border-blue-600 dark:border-blue-400 px-3 py-1 sm:py-0 hover:scale-105 transform transition-transform transition-colors text-blue-600 dark:text-blue-400 font-bold hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-gray-800 flex items-center justify-center gap-2"
                >
                  <FiCode />
                  <span className="hidden sm:block">See code</span>
                </a>
              )}
            </div>
          </div>
          <div className="flex sm:items-end mb-2 sm:flex-row flex-col">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-gray-800 dark:text-gray-100">
              {project.title}
            </h1>
            <span className="text-gray-700 dark:text-gray-300 sm:ml-2">
              {date}
            </span>
          </div>
          <div className="flex flex-col project-content">
            {project.description}
          </div>
          <div className="flex gap-1 items-center flex-wrap">
            <ul className="list-disc list-inside">
              {project.languages.split(",").map((item, key) => {
                return (
                  <li
                    key={key}
                    className="px-2 text-gray-700 dark:text-gray-300"
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <Notification />
    </>
  );
}
