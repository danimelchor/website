import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

import "../../css/blog.css";
import grid from "../../img/grid2.png";
import darkGrid from "../../img/darkGrid.png";
import { Link, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

import { GoChevronLeft } from "react-icons/go";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
/* Use `…/dist/cjs/…` if you’re not in ESM! */
import { ghcolors, nord } from "react-syntax-highlighter/dist/esm/styles/prism";

import { POSTS } from "./PostsList";
import { changeTheme, setTheme } from "../../functions/cookies";
import { FiMoon, FiSun } from "react-icons/fi";

// CODE SYNTAX
const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={localStorage.getItem("theme") === "light" ? ghcolors : nord}
        language={match[1]}
        PreTag="div"
        children={String(children).replace(/\n$/, "")}
        {...props}
        customStyle={{
          marginBottom: "20px",
        }}
        showLineNumbers={true}
        showInlineLineNumbers={true}
      />
    ) : (
      <code className={className} {...props} />
    );
  },
};

// POST COMPONENT
export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: "",
      postname: "",
      redirect: "",
      info: "",
    };
  }

  componentWillMount() {
    let path = window.location.hash.split("blog/");
    path = path[path.length - 1].replaceAll("/", "");

    import(`../../data/posts/${path}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) =>
            this.setState({ post: res, postname: path, info: POSTS[path] })
          )
          .catch((err) => this.setState({ redirect: <Redirect to="/blog" /> }));
      })
      .catch((err) => this.setState({ redirect: <Redirect to="/blog" /> }));

    let current = setTheme();
    this.setState({ moon: current === "dark" ? <FiSun /> : <FiMoon /> });
    document.body.style.backgroundImage =
      current === "dark" ? "url(" + darkGrid + ")" : "url(" + grid + ")";
  }

  // When the user clicks the dark-mode icon
  changeTheme() {
    let current = changeTheme();
    this.setState({ moon: current === "dark" ? <FiSun /> : <FiMoon /> });
    document.body.style.backgroundImage =
      current === "dark" ? "url(" + darkGrid + ")" : "url(" + grid + ")";
  }

  render() {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-white dark:bg-gray-900">
        {this.state.redirect}
        <Helmet>
          <title>{this.state.info.title}</title>
        </Helmet>
        <div
          className="overflow-hidden flex-col lg:flex-row flex lg:justify-center w-full relative bg-blue-50 dark:bg-gray-800"
          style={
            window.innerWidth > 640 ? { height: "65vh" } : { height: "100vw" }
          }
        >
          <Link
            to="/"
            className="lg:absolute w-full lg:w-auto left-0 top-0 p-5 z-50 text-gray-800 dark:text-white font-black text-lg sm:text-xl hover:text-gray-700 dark:hover:text-gray-300 hover:underline"
          >
            danielmelchor.com
          </Link>
          <img
            src={`${process.env.PUBLIC_URL}/blog/img/${this.state.postname}.png`}
            className="md:h-full filter transform p-4"
            alt={this.state.postname + " header image"}
          />
        </div>
        <div className="w-full lg:w-1/2 xl:w-5/12 w-full h-full p-6 lg:p-10">
          <div className="flex items-center justify-between mb-10">
            <Link
              to="/blog"
              className="text-blue-500 flex items-center hover:text-blue-600 hover:underline"
            >
              <GoChevronLeft />
              Go back
            </Link>
            <div className="flex items-center">
              {this.state.info["towardsDataLink"] && (
                <a
                  href={this.state.info["link"]}
                  style={{ backgroundColor: "#355876" }}
                  className="px-4 py-1 text-white rounded-full transition-transform hover:scale-105 transform"
                >
                  {window.innerWidth > 640
                    ? "See on Towards Data Science"
                    : "See on TDS"}
                </a>
              )}
              <button
                className="p-3 dark:text-white focus:outline-none text-xl hover:text-gray-700 dark:hover:text-gray-300"
                onClick={this.changeTheme.bind(this)}
              >
                {this.state.moon}
              </button>
            </div>
          </div>
          <div id="blog-post">
            <ReactMarkdown
              children={this.state.post}
              components={components}
              transformImageUri={(uri) =>
                uri.startsWith("http")
                  ? uri
                  : `${process.env.PUBLIC_URL}/blog/${this.state.postname}/${uri}`
              }
            />
          </div>
        </div>
      </div>
    );
  }
}
