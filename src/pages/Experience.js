import React, { Component } from "react";
import Title from "../components/Title";
import Job from "../components/Job";

export default class Experience extends Component {
  render() {
    return (
      <div id="experience" className="w-full mb-24 flex flex-col items-center">
        <Title title="experience" />
        <div className="flex py-10 w-4/5 grid grid-cols-1 xl:grid-cols-2 gap-5">
          <Job
            role="Software Engineer"
            company="Intelygenz"
            from="Jun 2021"
            to="Aug 2021"
            duration="3 mos"
            where="Madrid, Community of Madrid, Spain"
            website="https://intelygenz.com/"
          />
        </div>
      </div>
    );
  }
}
