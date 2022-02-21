// Styles
import { h2style, pstyle, astyle, announcementstyle } from "../styles";

import OldWebsite from "./oldwebsite.png";
import OldWebsiteLG from "./oldwebsite-lg.png";
import { Link } from "react-router-dom";

export const firstwebsite = {
  title: "My first website",
  img: OldWebsite,
  imgLarge: OldWebsiteLG,
  date: "10/23/2018",
  languages: "HTML,CSS,SCSS,SQL,PHP,JavaScript,JQuery",
  url: "https://github.com/danimelchor/oldWeb",
  live: "https://danielmelchoroldwebsite.000webhostapp.com/",
  description: (
    <>
      <div className={announcementstyle}>
        If the visit project link doesn't work, it might be because the hosting
        service I use for the website archives them afer a while. If you want to
        see it,{" "}
        <Link to="/contact" className={astyle}>
          contact me
        </Link>
        !
      </div>
      <h2 className={h2style}>Why this is featured</h2>
      <p className={pstyle}>
        This is not a great project. To be honest, the code is probably
        terrible, but it means something to me. I built this website when I was
        10 years old, which is quite an acomplishment for a kid that age. I like
        this project because it's a great way to see my progress over all these
        years, and, specially, how my code is way more structured than it was
        before.
      </p>
      <h2 className={h2style}>How it's built</h2>
      <p>
        The website uses PHP to read the database (which no longer exists) to
        display some very basic projects. I used SASS to make styling a bit
        easier, and JQuery to display some animations and create some
        interactions in the website.
      </p>
      <h2 className={h2style}>Programming languages and tools I used</h2>
    </>
  ),
};
