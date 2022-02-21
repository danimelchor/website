// Styles
import { h2style, pstyle, astyle } from "../styles";

import Sorting from "./Sorting.png";
import SortingLG from "./Sorting-lg.png";

export const sortingvisualizer = {
  title: "Sorting Visualizer",
  img: Sorting,
  imgLarge: SortingLG,
  date: "04/20/2021",
  languages: "HTML,CSS,JavaScript,JQuery",
  url: "https://github.com/danimelchor/sorting-visualizer",
  live: "https://danimelchor.github.io/sorting-visualizer/",
  description: (
    <>
      <h2 className={h2style}>Why does this exist?</h2>
      <p className={pstyle}>
        During the semester of Spring 2021, I took a class called{" "}
        <a
          href="https://www.bu.edu/phpbin/course-search/search.php?page=w0&pagesize=10&adv=1&nolog=&search_adv_all=cascs112&yearsem_adv=2021-FALL&credits=*&pathway=&hub_match=all"
          rel="noreferrer"
          target="_blank"
          className={astyle}
        >
          Introduction to Computer Science 2
        </a>
        . This class mainly taught students how to program in Java, but it
        included some other important aspects of Computer Science such as
        sorting algorithms. Before the final exam I had a few friends struggling
        to understand some of them, so I decided to spend my time building a
        fully customizable visualization to try to help them understand them
        better (instead of studying).
      </p>
      <h2 className={h2style}>It's features</h2>
      <p className={pstyle}>
        The visualizer offers five of the most used sorting algorithms:
        quicksort, merge sort, insert sort, bubble sort, and selection sort. You
        can change the width and number of bars that will be displayed, and the
        time speed you want the algorithm to sort them at. If you prefer, you
        can also disable the color animations to improve performance. Finally,
        it also displays a bit of information about these algorithms such as the
        time complexity of these.
      </p>
      <h2 className={h2style}>How I built it</h2>
      <p className={pstyle}>
        At first I tried building this project with ReactJS because I was using
        it a lot at that time. It ended up being super hard to display these
        animations with react since it is not what React is built for, so I
        decided to switch to JQuery. This worked much better and it is what I
        ended up using. For styling it uses{" "}
        <a
          href="https://tailwindcss.com/"
          rel="noreferrer"
          target="_blank"
          className={astyle}
        >
          TailwindCSS
        </a>
        's pre-built classes and some custom css to fix some mobile
        compatibility with the dropdowns and buttons.
      </p>
      <h2 className={h2style}>Programming languages and tools I used</h2>
    </>
  ),
};
