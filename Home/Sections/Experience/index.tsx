import React from "react";
import { EXPERIENCE_LIST } from "data/home/experience";

import Title from "../../Title";
import Job from "./Job";

export default function Experience() {
  return (
    <div id="experience" className="w-full mb-24 flex flex-col items-center">
      <Title title="experience" />
      <div className="flex py-10 w-5/6 grid grid-cols-1 2xl:grid-cols-2 gap-5">
        {EXPERIENCE_LIST.map((e, key) => (
          <Job
            role={e.role}
            company={e.company}
            from={e.from}
            to={e.to}
            duration={e.duration}
            where={e.where}
            website={e.website}
            image={e.image}
            key={key}
          />
        ))}
      </div>
    </div>
  );
}
