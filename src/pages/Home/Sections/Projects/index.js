import React, { useEffect, useState } from "react";
import Project from "./Project";
import Title from "../../Title";

import { PROJECTS_LIST } from "../../../../data/home/projects";

export default function Projects() {
  const [projectsHtml, setProjectsHtml] = useState([]);

  useEffect(() => {
    // Opens the project dictionary and creates
    // Project components with the appropiate propertiess
    let projectsArr = PROJECTS_LIST.map((item, index) => {
      return (
        <Project
          key={index}
          title={item.title}
          img={item.img}
          date={item.date}
          url={item.url}
          languages={item.languages}
        />
      );
    });
    setProjectsHtml(projectsArr);
  }, []);

  return (
    <div id="projects" name="projects" className="w-full mb-24">
      <Title title="projects" />
      <div className="flex py-10 justify-center content-center flex-wrap px-2">
        {projectsHtml}
      </div>
    </div>
  );
}
