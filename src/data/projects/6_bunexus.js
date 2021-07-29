// Styles
import { h2style, pstyle } from "./styles";

import BUNexus from "../../img/projects/BUNexus.png";
import BUNexusLG from "../../img/projects/BUNexus-lg.png";

export const bunexus = {
  title: "BU Nexus",
  img: BUNexus,
  imgLarge: BUNexusLG,
  date: "04/11/2021",
  languages: "HTML,CSS,JSX,Python,Django,JavaScript,ReactJS,NodeJS",
  url: "https://github.com/Boston-University-Nexus",
  live: "https://bunexus.com",
  description: (
    <>
      <h2 className={h2style}>My team</h2>
      <p className={pstyle}>
        BU Nexus has had a few participants that started the project and then
        left, but we are currently three Boston University students and an
        external designer that has done all our ilustration. Our motivation
        comes from being the users of the completely outdated system BU has in
        place.
      </p>
      <h2 className={h2style}>What is BU Nexus?</h2>
      <p className={pstyle}>
        BU Nexus is an application created to improve and add several features
        to Boston University's current registration tool. There are some
        important problems in the current registration system like they have a
        very old UI, the website is very slow, you have to go to different
        websited for related tasks, conflicts between classes are hard to solve,
        you have no backup if one of your classes are taken, etc.
      </p>
      <h2 className={h2style}>What we improved</h2>
      <p className={pstyle}>
        We have improved many things (basically everything), but some of the
        improvements include an interactive graph that shows more information
        (instead of an image), a multi-purpose course search bar with filters
        and sorting (instead of a form), a single page where you can search,
        remove, add and view your courses (instead of multiple websites).
      </p>
      <h2 className={h2style}>Our new features</h2>
      <p className={pstyle}>
        As students, there were clearly many things wrong with the previous
        system, but there were also missing features that are very useful. In
        this application we have included a recommendation system based on
        previous classes, credits, and major; information cards to find all the
        necessary information about courses like hubs, prerequisites, available
        sections, ... at lightning speed; a tool for searching professors,
        courses, and sections in one place, with all their information, and an
        internal rating system.
      </p>
      <h2 className={h2style}>Programming languages and tools I used</h2>
    </>
  ),
};
