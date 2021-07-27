import React, { Component } from "react";
import Title from "../components/Title";
import Job from "../components/Job";

import IntelygenzImg from "../img/companies/intelygenz.png";
import BUNexusImg from "../img/companies/bunexus.png";

const getMonthsSince = (date1, date2) => {
  var Difference_In_Time = date1.getTime() - date2.getTime();
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  var Difference_In_Months = Math.ceil(Difference_In_Days / 30);

  if (Difference_In_Months < 12) return Difference_In_Months + "mos";
  else {
    var Difference_In_Years = Math.floor(Difference_In_Months / 12);
    Difference_In_Months = Difference_In_Months % 12;

    return Difference_In_Years + "ys " + Difference_In_Months + "mos";
  }
};

export default class Experience extends Component {
  render() {
    console.log(new Date());
    return (
      <div id="experience" className="w-full mb-24 flex flex-col items-center">
        <Title title="experience" />
        <div className="flex py-10 w-5/6 grid grid-cols-1 2xl:grid-cols-2 gap-5">
          <Job
            role="Machine Learning Software Engineer"
            company="Intelygenz"
            from="Jun 2021"
            to="Aug 2021"
            duration={getMonthsSince(
              new Date("08/20/2021"),
              new Date("06/17/2021")
            )}
            where="Madrid, Community of Madrid, Spain"
            website="https://intelygenz.com/"
            image={IntelygenzImg}
          />
          <Job
            role="Full Stack Developer"
            company="BU Nexus"
            from="Mar 2021"
            to="Present"
            duration={getMonthsSince(new Date(), new Date("03/11/2021"))}
            where="Boston, Massachusetts, USA"
            website="https://bunexus.com/"
            image={BUNexusImg}
          />
        </div>
      </div>
    );
  }
}
