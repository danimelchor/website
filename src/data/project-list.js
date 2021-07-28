// Images
import OldWebsite from "../img/projects/oldwebsite.png";
import DjangoWeb from "../img/projects/djangoweb.png";
import Conway from "../img/projects/conway.png";
import SSimage from "../img/projects/ss.png";
import ThisWeb from "../img/projects/thisWeb.png";
import BUNexus from "../img/projects/BUNexus.png";
import Sorting from "../img/projects/Sorting.png";
import Decentrapass from "../img/projects/decentrapass.png";

// Large Images
import OldWebsiteLG from "../img/projects/oldwebsite-lg.png";
import DjangoWebLG from "../img/projects/djangoweb-lg.png";
import ConwayLG from "../img/projects/conway-lg.png";
import SSimageLG from "../img/projects/ss-lg.png";
import ThisWebLG from "../img/projects/thisWeb-lg.png";
import BUNexusLG from "../img/projects/BUNexus-lg.png";
import SortingLG from "../img/projects/Sorting-lg.png";
import DecentrapassLG from "../img/projects/decentrapass-lg.png";

// Styles
let h2style =
  "font-bold text-2xl lg:text-4xl text-primary dark:text-gray-200 mt-7 mb-3";
let pstyle = "text-gray-700 dark:text-gray-200 leading-relaxed";
let astyle = "underline hover:text-gray-900 dark:text-gray-400";

// For simplicity and ease updating my projects I decided to keep them as a Dictionary
// Very simple/shabby but works well
export const PROJECTS = [
  {
    title: "This website",
    img: ThisWeb,
    imgLarge: ThisWebLG,
    date: "04/11/2021",
    languages: "HTML,CSS,JSX,JavaScript,ReactJS",
    url: "https://github.com/danimelchor/website/tree/main",
    live: "/",
    description: "",
  },
  {
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
          websited for related tasks, conflicts between classes are hard to
          solve, you have no backup if one of your classes are taken, etc.
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
          previous classes, credits, and major; information cards to find all
          the necessary information about courses like hubs, prerequisites,
          available sections, ... at lightning speed; a tool for searching
          professors, courses, and sections in one place, with all their
          information, and an internal rating system.
        </p>
        <h2 className={h2style}>Programming languages I used</h2>
      </>
    ),
  },
  {
    title: "Decentrapass",
    img: Decentrapass,
    imgLarge: DecentrapassLG,
    date: "06/18/2021",
    languages:
      "HTML,CSS,JavaScript,ReactJS,Solidity,Chrome Extension API,Firefox Extension API,Infura Storage",
    url: "https://github.com/Decentrapass",
    live: "https://decentrapass.org",
    description: (
      <>
        <h2 className={h2style}>Who created Decentrapass?</h2>
        <p className={pstyle}>
          Decentrapass has been coded 100% by me. I had difficulties finding
          qualified people for the project so I decided to take it as a
          challenge to complete the organization's website, web app, mobile app,
          and extension by myself. I will probably try to find other people
          interested in the future but I am currently too busy for this project.
          I will re-start the progress on Sept 2, 2021.
        </p>
        <h2 className={h2style}>What is Decentrapass?</h2>
        <p className={pstyle}>
          The best way to learn about Decentrapass is to go to{" "}
          <a className={astyle} href="https://decentrapass.org">
            it's organization's website
          </a>
          . To sum' it up, Decentrapass is a decentralized protocol for securely
          storing passwords inside the Ethereum network. The cyphered passwords
          are stored in a decentralized storage using AES encryption (the one
          used by the U.S. government).
        </p>
        <h2 className={h2style}>Why I created it</h2>
        <p className={pstyle}>
          The motivation for this project comes from two sources. First, a
          family member of mine felt uneasy about a company storing all their
          passwords, since this can go bankrupt or have a breach. Secondly,
          modern and secure password managers nowadays cost money. Therefore, I
          decided to create Decentrapass as a way to make sure passwords are
          never lost (since a shutdown in the Ethereum network is very
          unlikely), and as a free password manager (except{" "}
          <a
            className={astyle}
            rel="noreferrer"
            target="_blank"
            href="https://etherscan.io/gastracker"
          >
            the small fee
          </a>{" "}
          for the transaction in Ether).
        </p>
        <h2 className={h2style}>It's features</h2>
        <p className={pstyle}>
          The main features Decentrapass offers are the following: secure and
          protected password storage, full control over your passwords, super
          fast and easy to use, easily accessible from a new device, user
          governance for future upgrades/longevity of the project, and full
          transparency of the management and storing of your data.
        </p>
        <h2 className={h2style}>Programming languages I used</h2>
      </>
    ),
  },
  {
    title: "Symptom Survey Bot",
    img: SSimage,
    imgLarge: SSimageLG,
    date: "03/24/2021",
    languages: "Python",
    url: "https://github.com/danimelchor/buSurveyAndAppointment",
    live: "",
    description: (
      <>
        <h2 className={h2style}>Programming languages I used</h2>
      </>
    ),
  },
  {
    title: "Sorting Visualizer",
    img: Sorting,
    imgLarge: SortingLG,
    date: "04/20/2021",
    languages: "HTML,CSS,JavaScript,JQuery",
    url: "https://github.com/danimelchor/sorting-visualizer",
    live: "https://danimelchor.github.io/sorting-visualizer/",
    description: (
      <>
        <h2 className={h2style}>Programming languages I used</h2>
      </>
    ),
  },
  {
    title: "My first website",
    img: OldWebsite,
    imgLarge: OldWebsiteLG,
    date: "10/23/2018",
    languages: "HTML,CSS,SCSS,SQL,PHP,JavaScript,JQuery",
    url: "https://github.com/danimelchor/oldWeb",
    live: "",
    description: (
      <>
        <h2 className={h2style}>Programming languages I used</h2>
      </>
    ),
  },
  {
    title: "My first django website",
    img: DjangoWeb,
    imgLarge: DjangoWebLG,
    date: "09/11/2020",
    languages: "HTML,CSS,SCSS,Python,Django,JavaScript,VueJS",
    url: "https://github.com/danimelchor/websiteDjango",
    live: "",
    description: (
      <>
        <h2 className={h2style}>Programming languages I used</h2>
      </>
    ),
  },
  {
    title: "Conway's Game of Life",
    img: Conway,
    imgLarge: ConwayLG,
    date: "11/23/2020",
    languages: "Python",
    url: "https://github.com/danimelchor/conway",
    live: (
      <>
        <h2 className={h2style}>Programming languages I used</h2>
      </>
    ),
  },
];
