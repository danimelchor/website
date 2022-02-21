// Styles
import { h2style, pstyle, astyle } from "../styles";

import SSimage from "./ss.png";
import SSimageLG from "./ss-lg.png";

export const ss = {
  title: "Symptom Survey Bot",
  img: SSimage,
  imgLarge: SSimageLG,
  date: "03/24/2021",
  languages: "Python,Selenium",
  url: "https://github.com/danimelchor/buSurveyAndAppointment",
  live: "",
  description: (
    <>
      <h2 className={h2style}>Why this exists</h2>
      <p className={pstyle}>
        The real reason why this project exists is because it made my life
        simpler. That's it. Boston University made us complete a long and
        repetitive survey every morning to make sure we declared any COVID-19
        symptoms if we had them. In addition, we also had to schedule a COVID
        test every 4 days. Therefore, since I didn't feel like spending time on
        doing the same thing every day when I could just make it fully
        automatic, I built a bot.
      </p>
      <h2 className={h2style}>How I built it</h2>
      <p>
        A friend of mine already had a similar bot in place, and, since I didn't
        know what{" "}
        <a
          href="https://selenium-python.readthedocs.io/"
          rel="noreferrer"
          target="_blank"
          className={astyle}
        >
          selenium
        </a>{" "}
        was, he told me about it, which was a major discovery in my life. I use
        selenium with a bit of default python to navigate around BU's website,
        complete the checkboxes, calculate when my next COVID test is due based
        on previous tests, and schedule it.
      </p>
      <h2 className={h2style}>Programming languages and tools I used</h2>
    </>
  ),
};
