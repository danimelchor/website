import React, { Component } from "react";
import SkillContainer from "../containers/SkillContainer";
import Title from "../components/Title";

// Importing all the images for the skills
import HTML from "../img/skills/HTML-logo.png";
import CSS from "../img/skills/CSS-logo.png";
import SCSS from "../img/skills/SCSS-logo.png";
import JavaScript from "../img/skills/JavaScript-logo.png";
import ReactJS from "../img/skills/ReactJS-logo.png";
import VueJS from "../img/skills/VueJS-logo.png";
import JQuery from "../img/skills/JQuery-logo.png";
import PHP from "../img/skills/PHP-logo.png";
import Python from "../img/skills/Python-logo.png";
import Django from "../img/skills/Django-logo.png";
import SQL from "../img/skills/SQL-logo.png";
import Java from "../img/skills/Java-logo.png";
import CSharp from "../img/skills/CSharp-logo.png";
import CPlus from "../img/skills/CPlus-logo.png";
import Photoshop from "../img/skills/Photoshop-logo.png";
import GitHub from "../img/skills/GitHub-logo.png";

export default class Skills extends Component {
  render() {
    return (
      <div id="skills" className="w-full mb-24">
        <Title title="skills" />
        <div className="py-10 px-2 m-auto w-full md:w-5/6">
          <SkillContainer
            title="Front-End"
            imgs={[HTML, CSS, JavaScript, SCSS, ReactJS, VueJS, JQuery]}
            names={[
              "HTML",
              "CSS",
              "JavaScript",
              "SCSS",
              "ReactJS",
              "VueJS",
              "JQuery",
            ]}
          />
          <SkillContainer
            title="Back-End"
            imgs={[PHP, Python, Django, SQL]}
            names={["PHP", "Python", "Django", "SQL"]}
          />
          <SkillContainer
            title="Other Languages"
            imgs={[Java, CSharp, CPlus, Python]}
            names={["Java", "C#", "C++", "Python"]}
          />
          <SkillContainer
            title="Other"
            imgs={[Photoshop, GitHub]}
            names={["Photoshop", "GitHub"]}
          />
        </div>
      </div>
    );
  }
}
