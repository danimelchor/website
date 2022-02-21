import React from "react";
import School from "./School";
import Title from "../../Title";

export default function Education() {
  return (
    <div id="education" className="w-full mb-24">
      <Title title="education" />
      <div className="flex py-10 justify-center content-center flex-wrap px-2">
        <School
          url="https://logosinternationalschool.es/"
          school="Logos International School"
          year="2005 - 2020"
          type={["International Baccalaureate"]}
          location="Madrid, Spain"
        />
        <School
          url="https://www.bu.edu/"
          school="Boston University"
          year="2020 - Present"
          type={[
            "B.A. in Computer Science",
            "Planning on entering the BA/MS program for A.I.",
          ]}
          location="Boston, MA, USA"
        />
      </div>
    </div>
  );
}
