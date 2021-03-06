import React, { useEffect, useState } from "react";
import bg from "./img/blog-bg.jpg";

import { Link } from "react-router-dom";
import { POSTS_LIST } from "../../data/posts";

import { FaSearch } from "react-icons/fa";
import { Helmet } from "react-helmet";

import { FiMoon, FiSun } from "react-icons/fi";
import { changeThemeFunc, setThemeFunc } from "../../functions/theme";

export default function Blog() {
  const [moon, setMoon] = useState(<FiSun />);
  const [posts, setPosts] = useState(Object.values(POSTS_LIST));

  // When the user clicks the dark-mode icon
  const changeTheme = () => {
    let current = changeThemeFunc();
    setMoon(current === "dark" ? <FiSun /> : <FiMoon />);
  };

  useEffect(() => {
    let current = setThemeFunc();
    setMoon(current === "dark" ? <FiSun /> : <FiMoon />);
  }, []);

  const filterBlogs = (e) => {
    let query = e.target.value;
    let new_posts = Object.values(POSTS_LIST);

    if (query !== "") {
      new_posts = new_posts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    setPosts(new_posts);
  };

  return (
    <div className="w-full h-full flex flex-col items-center bg-white dark:bg-gray-900 min-h-screen">
      <Helmet>
        <title>Blog</title>
      </Helmet>
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
          danielmelchor.com
        </Link>
        <div className="text-white z-50 flex items-center justify-center flex-col">
          <h1
            className="text-3xl sm:text-5xl lg:text-7xl font-bold font-mono"
            id="blog-title"
          >
            <span className="text-secondary dark:text-secondaryDark">self</span>
            .blog()
          </h1>
          <h2
            className="text-base sm:text-lg lg:text-2xl text-gray-300"
            id="blog-subtitle"
          >
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
          alt="Opinaca Reservoir, Quebec"
          className="h-full sm:h-auto sm:w-full filter brightness-50 absolute top-1/2 transform -translate-y-1/2"
          loading="lazy"
        />
        <button
          className="p-3 absolute right-0 top-0 text-white focus:outline-none text-lg"
          onClick={changeTheme}
        >
          {moon}
        </button>
      </div>
      <div className="my-2 h-full p-6 md:p-10 w-full md:w-2/3 lg:w-1/2">
        <div className="mb-10 relative">
          <input
            type="text"
            placeholder="Search..."
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Search...")}
            className="w-full bg-transparent border focus:outline-none dark:text-gray-200 p-3 pr-10e text-lg placeholder-gray-500"
            onChange={filterBlogs}
          />
          <FaSearch className="dark:text-gray-200 text-2xl absolute right-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        {posts.map((post, key) => {
          return (
            <Link
              to={"/blog/" + post.internallink}
              className="py-8 cursor-pointer flex flex-col transition-none mb-5 border-t border-gray-300 dark:border-gray-700 group"
              key={key}
            >
              <h1 className="font-bold text-xl xl:text-2xl text-black dark:text-white group-hover:text-secondary dark:group-hover:text-secondaryDark">
                {post.title}
              </h1>
              <h2 className="text-gray-700 dark:text-gray-300 mb-5">
                {post.subtitle}
              </h2>
              <span className="text-gray-600 dark:text-gray-400">
                Published on {post.date} ?? {post.readtime} read
              </span>
            </Link>
          );
        })}
        {posts.length === 0 && (
          <div className="w-full font-bold text-xl xl:text-2xl text-black dark:text-white group-hover:text-secondary dark:group-hover:text-secondaryDark">
            No blogs found matching that search.
          </div>
        )}
      </div>
    </div>
  );
}
