import React from "react";
import School from "./School";
import Title from "../../Title";
import { EDUCATION_LIST } from "data/home/education";

export default function Education() {
  return (
    <div id="education" className="w-full mb-24">
      <Title title="education" />
      <div className="flex py-10 justify-center content-center flex-wrap px-2">
        {EDUCATION_LIST.map((e, key) => (
          <School
            url={e.url}
            school={e.school}
            year={e.year}
            type={e.type}
            location={e.location}
            key={key}
          />
        ))}
      </div>
    </div>
  );
}
