// Styles
import { h2style, pstyle, astyle } from "../styles";
import ThisWebLG from "./thisWeb-lg.png";
import ThisWeb from "./thisWeb.png";

export const thiswebsite = {
  title: "This website",
  img: ThisWeb,
  imgLarge: ThisWebLG,
  date: "04/11/2021",
  languages: "HTML,CSS,JavaScript,ReactJS,JSX,react-markdown,TailwindCSS",
  url: "https://github.com/danimelchor/website/tree/main",
  live: "/",
  description: (
    <>
      <h2 className={h2style}>Why does this exist?</h2>
      <p className={pstyle}>
        I have always liked showcasing my projects. I tend to invest a lot of
        time in coding awesome things, so if I am able to quickly show someone
        what they are about, I am much happier. I also want this website to
        serve me as a way to display my projects through the years, and,
        hopefully, inspire some people.
      </p>
      <h2 className={h2style}>It's features</h2>
      <p className={pstyle}>
        Thanks to this website I am able to group all my social media, projects,
        articles, and ideas in a single place. Here, I have built a blog, a
        detailed project view (like the one you are in right now), and several
        other interactions and visualizations that allow people who are
        interested in what I do to find everything swiftly.
      </p>
      <h2 className={h2style}>What I used</h2>
      <p className={pstyle}>
        This website is mainly built using ReactJS. Currently all the data is
        stored in the frontend since it speeds up the process of gathering it,
        and a backend for a simple portfolio is very unnecessary. The website
        uses several modules like{" "}
        <a
          href="https://www.npmjs.com/package/react-markdown"
          rel="noreferrer"
          target="_blank"
          className={astyle}
        >
          react-markdown
        </a>{" "}
        to display the data, and other times I use javascript objects when it
        makes it simpler/I need a more specific UI.
      </p>
      <h2 className={h2style}>Styling</h2>
      <p className={pstyle}>
        For the styling, I have decided to use the pre-built classes{" "}
        <a
          href="https://tailwindcss.com/"
          rel="noreferrer"
          target="_blank"
          className={astyle}
        >
          TailwindCSS
        </a>{" "}
        offers. For the animations and interactive dom elements I have created
        the css from scratch since I found it easier to make everything
        pixel-perfect.
      </p>
      <h2 className={h2style}>Programming languages and tools I used</h2>
    </>
  ),
};
