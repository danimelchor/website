import React, { Component } from "react";
import bg from "../../img/blog-bg.jpg";

import { POSTS } from "./PostsList";
import { Link } from "react-router-dom";

export default class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postlist: "",
      page: 0,
    };
  }

  componentWillMount() {
    // Dark mode
    let current = localStorage.getItem("blog-theme");
    if (current === null || current === "dark") {
      this.setState({ moon: "far fa-moon" });
      document.documentElement.classList.add("dark");
    } else {
      this.setState({ moon: "fas fa-moon" });
      document.documentElement.classList.remove("dark");
    }
  }

  // When the user clicks the dark-mode icon
  changeTheme() {
    let current = localStorage.getItem("blog-theme");
    if (current === null || current === "dark") {
      localStorage.setItem("blog-theme", "light");
      document.documentElement.classList.remove("dark");
      this.setState({ moon: "fas fa-moon" });
    } else if (current === "light") {
      localStorage.setItem("blog-theme", "dark");
      document.documentElement.classList.add("dark");
      this.setState({ moon: "far fa-moon" });
    }
  }

  render() {
    return (
      <div className="w-full h-full flex flex-col items-center bg-white dark:bg-gray-900 min-h-screen">
        <div
          className="overflow-hidden flex items-center justify-center w-full relative"
          style={
            window.innerWidth > 640 ? { height: "65vh" } : { height: "100vw" }
          }
        >
          <Link
            to="/"
            className="absolute left-0 top-0 p-5 z-50 text-white font-black text-lg sm:text-xl hover:text-gray-300 hover:underline"
          >
            dmelchor.com
          </Link>
          <div className="text-white z-50 flex items-center justify-center flex-col">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold font-mono">
              <span className="text-secondary dark:text-secondaryDark">
                this
              </span>
              .blog()
            </h1>
            <h2 className="text-base sm:text-lg lg:text-2xl text-gray-300">
              Tutorials, life experiences, and ideas.
            </h2>
          </div>
          <div className="absolute left-0 bottom-0 p-5 z-50 text-white opacity-50">
            <a
              href="https://www.google.com/maps/place/Opinaca+Reservoir/@52.5794933,-76.4643102,11.25z/data=!4m5!3m4!1s0x4d025facd1ece485:0x64e46dcdb2f97677!8m2!3d52.643!4d-76.335"
              className="text-xs sm:text-sm hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Opinaca Reservoir, Quebec
            </a>
          </div>
          <img
            src={bg}
            className="h-full sm:h-auto sm:w-full filter brightness-50 absolute top-1/2 transform -translate-y-1/2"
          />
          <button
            className="p-3 absolute right-0 top-0 text-white focus:outline-none text-lg"
            onClick={this.changeTheme.bind(this)}
          >
            <i className={this.state.moon + " block"}></i>
          </button>
        </div>
        <div className="dark:bg-gray-900 my-2 rounded-sm h-full p-6 md:p-10">
          {POSTS.map((post, div) => {
            return (
              <Link
                to={"blog/" + post.link}
                className="py-8 cursor-pointer flex flex-col transition-none mb-5 border-b border-gray-300 dark:border-gray-700 group"
              >
                <h1 className="font-bold text-xl text-black dark:text-white group-hover:text-secondary dark:group-hover:text-secondaryDark">
                  {post.title}
                </h1>
                <h2 className="text-gray-700 dark:text-gray-300 mb-5">
                  {post.subtitle}
                </h2>
                <span className="text-gray-500">
                  Published on {post.date} · {post.readtime} read
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
