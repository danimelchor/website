import me from "./img/me.jpg";
import Title from "../../Title";

const getAge = () => {
  let now = new Date().getTime();
  let birth = new Date(2002, 6, 6).getTime();
  let diff = now - birth;
  return Math.floor(diff / 1000 / 3600 / 365 / 24);
};

export default function About() {
  const htmlTagsStyle =
    "text-gray-700 -ml-4 select-none pointer-events-none font-mono transition-colors duration-200";

  return (
    <div id="about" className="w-full z-10 mb-24">
      <Title title="about" />
      <div className="py-10 px-2 m-auto w-full md:w-5/6">
        <div className="block my-5 bg-gray-800 text-gray-50 rounded p-5 md:p-10 shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          <div className="rounded-sm overflow-hidden lg:mr-5 lg:mb-0 mb-5 flex items-center justify-center w-full lg:w-auto lg:items-start 2xl:items-center">
            <img
              className="w-96"
              src={me}
              alt="Daniel Melchor portrait"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center h-full ml-4 w-full">
            <div className={htmlTagsStyle}>&#60;h1&#62;</div>
            <h1 className="font-black text-white text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-8xl transition-colors duration-200">
              Hi, I am Dani.
            </h1>
            <div className={htmlTagsStyle}>&#60;/h1&#62;</div>
            <div className={htmlTagsStyle}>&#60;p&#62;</div>
            <p className="leading-relaxed text-lg text-gray-300 transition-colors duration-200">
              I'm a {getAge()}-year-old from Spain working at Stripe as a SWE. I am
              part of the data platform org, where I work on the data transformation
              team. I build tools that help Stripe's data engineers and data
              scientists do their job faster, better, and more efficiently.
            </p>
            <div className={htmlTagsStyle}>&#60;/h1&#62;</div>
            <div className={htmlTagsStyle}>&#60;p&#62;</div>
            <p className="leading-relaxed text-lg text-gray-300 transition-colors duration-200">
              Previously, I was a student at Boston
              University, where I pursued a major in Computer Science and ended
              up graduating in 3 years (1 year early)
            </p>
            <div className={htmlTagsStyle}>&#60;/p&#62;</div>
            <div className={htmlTagsStyle}>&#60;p&#62;</div>
            <p className="leading-relaxed text-lg text-gray-300 transition-colors duration-200">
              Lately, you can find me traveling, reading, working on side projects, or
              working out.
            </p>
            <div className={htmlTagsStyle}>&#60;/p&#62;</div>
          </div>
        </div>
      </div>
    </div>
  );
}
