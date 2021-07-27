import React, { Component } from "react";
import me from "../img/me.jpg";
import Title from "../components/Title";

const getAge = () => {
  let now = new Date();
  let birth = new Date(2002, 6, 6);
  let diff = now - birth;
  return Math.floor(diff / 1000 / 3600 / 365 / 24);
};

export default class About extends Component {
  render() {
    return (
      <div id="about" className="w-full z-10 mb-24">
        <Title title="about" />
        <div className="py-10 px-2 m-auto w-full md:w-5/6">
          <div className="block my-5 bg-white dark:bg-gray-800 dark:text-gray-50 rounded p-5 md:p-10 shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            <div className="rounded-sm overflow-hidden lg:mr-5 lg:mb-0 mb-5 flex items-center justify-center w-full lg:w-auto lg:items-start 2xl:items-center">
              <img className="w-96" src={me} />
            </div>
            <div className="flex flex-col justify-center h-full ml-4 w-full">
              <div className="text-gray-300 dark:text-gray-700 -ml-4 select-none font-mono">
                &#60;h1&#62;
              </div>
              <h1 className="font-black text-black dark:text-white text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-8xl">
                Hi, I am Dani.
              </h1>
              <div className="text-gray-300 dark:text-gray-700 -ml-4 select-none font-mono">
                &#60;/h1&#62;
              </div>
              <div className="text-gray-300 dark:text-gray-700 -ml-4 select-none font-mono">
                &#60;p&#62;
              </div>
              <p className="leading-relaxed text-lg dark:text-gray-300 text-gray-700">
                I'm a {getAge()}-year-old student from Spain studying at Boston
                University. I am pursuing a major in Computer Science, and, most
                likely, completing an accelerated Master's degree program while
                there.
              </p>
              <div className="text-gray-300 dark:text-gray-700 -ml-4 select-none font-mono">
                &#60;/p&#62;
              </div>
              <div className="text-gray-300 dark:text-gray-700 -ml-4 select-none font-mono">
                &#60;p&#62;
              </div>
              <p className="leading-relaxed text-lg dark:text-gray-300 text-gray-700">
                During the summer, I have been working as a Machine Learning
                developer at Intelygenz, an international company focused on
                process automation using AI.
              </p>
              <div className="text-gray-300 dark:text-gray-700 -ml-4 select-none font-mono">
                &#60;/p&#62;
              </div>
              <div className="text-gray-300 dark:text-gray-700 -ml-4 select-none font-mono">
                &#60;p&#62;
              </div>
              <p className="leading-relaxed text-lg dark:text-gray-300 text-gray-700">
                People describe me as: naturally curious, extroverted, and hard
                working.
              </p>
              <div className="text-gray-300 dark:text-gray-700 -ml-4 select-none font-mono">
                &#60;/p&#62;
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
