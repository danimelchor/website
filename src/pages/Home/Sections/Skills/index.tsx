import React from "react";

import SkillContainer from "./SkillContainer";
import Title from "../../Title";
import { SKILLS_LIST } from "../../../../data/home/skills";

export default function Skills() {
  return (
    <div id="skills" className="w-full mb-24">
      <Title title="skills" />
      <div className="py-10 px-2 m-auto w-full md:w-5/6">
        {SKILLS_LIST.map((s, key) => (
          <SkillContainer
            title={s.title}
            imgs={s.imgs}
            names={s.names}
            key={key}
          />
        ))}
      </div>
    </div>
  );
}
