// Styles
import { h2style, pstyle, astyle } from "../styles";
import WordelLG from "./wordel-lg.png";
import Wordel from "./wordel.png";
import { ProjectType } from "types";

export const wordel : ProjectType = {
  title: "Wordel*",
  img: Wordel,
  imgLarge: WordelLG,
  date: "02/18/2022",
  languages: "HTML,CSS,TypeScript,ReactJS,JavaScript,JSX",
  url: "https://github.com/danimelchor/word-game",
  live: "https://danimelchor.github.io/word-game/",
  description: (
    <>
      <h2 className={h2style}>Why does this exist?</h2>
      <p className={pstyle}>
        This year, the game known as Wordle became extremely popular. After
        getting addicted to playing it with some of my friends, I decided to
        take on a challenge of creating my own version of Wordle: "Wordel*".
      </p>
      <h2 className={h2style}>What I used</h2>
      <p className={pstyle}>
        This website is mainly built using ReactJS and TypeScript. All the data
        like the list of words, or every days' correct word is stored in the
        frontend. I decided to learn TypeScript for this project since I believe
        it will be useful in the future for bigger and more complex projects.
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
        offers.
      </p>
      <h2 className={h2style}>Programming languages and tools I used</h2>
    </>
  ),
};
