// Styles
import { h2style, pstyle, astyle } from "./styles";
import DjangoWebLG from "../../img/projects/djangoweb-lg.png";
import DjangoWeb from "../../img/projects/djangoweb.png";

export const firstdjango = {
  title: "My first django website",
  img: DjangoWeb,
  imgLarge: DjangoWebLG,
  date: "09/11/2020",
  languages: "HTML,CSS,SCSS,Python,Django,JavaScript,VueJS",
  url: "https://github.com/danimelchor/websiteDjango",
  live: "",
  description: (
    <>
      <h2 className={h2style}>Why this exists/existed</h2>
      <p className={pstyle}>
        This is the old version of this website. I used to have a deployed
        Django backend on a linux server, but it was quite the ordeal to
        add/modify my portfolio since I would have to ssh into the machine and
        upload files to it, whereas right now the website is deployed easily
        using github pages. There was also no point in having a backend for the
        ammount of data this website processes.
      </p>
      <h2 className={h2style}>Want to see how this looked?</h2>
      <p className={pstyle}>
        The website is no longer deployed, but feel free to clone{" "}
        <a
          className={astyle}
          href="https://github.com/danimelchor/websiteDjango"
        >
          the GitHub repository
        </a>{" "}
        and follow the instructions in the Readme!
      </p>
      <h2 className={h2style}>Programming languages and tools I used</h2>
    </>
  ),
};
