// Images
import OldWebsite from "./img/oldwebsite.png";
import DjangoWeb from "./img/djangoweb.png";
import Conway from "./img/conway.png";
import SSimage from "./img/ss.png";
import ThisWeb from "./img/thisWeb.png";
import BUNexus from "./img/BUNexus.png";
import Sorting from "./img/Sorting.png";

// For simplicity and ease updating my projects I decided to keep them as a Dictionary
// Very simple/shabby but works well
export const PROJECTS = [
  {
    title: "My first website",
    img: OldWebsite,
    date: "10/23/2018",
    languages: "HTML,CSS,SCSS,SQL,PHP,JavaScript,JQuery",
    url: "https://github.com/danimelchor/oldWeb",
  },
  {
    title: "My first django website",
    img: DjangoWeb,
    date: "09/11/2020",
    languages: "HTML,CSS,SCSS,Python,Django,JavaScript,VueJS",
    url: "https://github.com/danimelchor/websiteDjango",
  },
  {
    title: "Conway's Game of Life",
    img: Conway,
    date: "11/23/2020",
    languages: "Python",
    url: "https://github.com/danimelchor/conway",
  },
  {
    title: "Symptom Survey Bot",
    img: SSimage,
    date: "03/24/2021",
    languages: "Python",
    url: "https://github.com/danimelchor/buSurveyAndAppointment",
  },
  {
    title: "This website",
    img: ThisWeb,
    date: "04/11/2021",
    languages: "HTML,CSS,JSX,JavaScript,ReactJS",
    url: "https://github.com/danimelchor/website/tree/main",
  },
  {
    title: "BU Nexus",
    img: BUNexus,
    date: "04/11/2021",
    languages: "HTML,CSS,JSX,Python,Django,JavaScript,ReactJS,Apache",
    url: "https://bunexus.com/",
  },
  {
    title: "Sorting Visualizer",
    img: Sorting,
    date: "04/20/2021",
    languages: "HTML,CSS,JavaScript,JQuery",
    url: "https://danimelchor.github.io/sorting-visualizer/",
  },
];
