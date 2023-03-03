// Styles
import { h2style, pstyle, astyle } from "../styles";

import Conway from "./conway.png";
import ConwayLG from "./conway-lg.png";
import { ProjectType } from "types";

export const conway : ProjectType = {
  title: "Conway's Game of Life",
  img: Conway,
  imgLarge: ConwayLG,
  date: "11/23/2020",
  languages: "Python,PyGame,Numpy",
  url: "https://github.com/danimelchor/conway",
  live: "",
  description: (
    <>
      <h2 className={h2style}>What is this?</h2>
      <p className={pstyle}>
        According to the Wikipedia, "The Game of Life, also known simply as
        Life, is a cellular automaton devised by the British mathematician John
        Horton Conway in 1970. It is a zero-player game, meaning that its
        evolution is determined by its initial state, requiring no further
        input". During my first semester at college they made us create this
        "game" using simple python lists, but I felt like going a step further
        and making it an interactive visualization.
      </p>
      <h2 className={h2style}>Do you want to try it?</h2>
      <p className={pstyle}>
        The visualization is made fully with Python, so it is not deployed
        anywhere. If you want to try it out, check out{" "}
        <a className={astyle} href="https://github.com/danimelchor/conway">
          the GitHub repository
        </a>{" "}
        and follow the instructions in the Readme! It is very simple to start
        and you will definitely enjoy the beautiful colors and interactions!
      </p>
      <h2 className={h2style}>Programming languages and tools I used</h2>
    </>
  ),
};
