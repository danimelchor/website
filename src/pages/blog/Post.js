import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

import "./style.css";
import grid from "../../img/grid2.png";
import darkGrid from "../../img/darkGrid.png";
import { Link } from "react-router-dom";

import { GoChevronLeft } from "react-icons/go";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
/* Use `…/dist/cjs/…` if you’re not in ESM! */
import { prism, dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

// CODE SYNTAX
const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={localStorage.getItem("blog-theme") == "light" ? prism : dracula}
        language={match[1]}
        PreTag="div"
        children={String(children).replace(/\n$/, "")}
        {...props}
        className="bg-red-500"
        customStyle={{
          boxShadow: "0px 3px 6px 0px rgba(0, 0, 0, 0.3)",
          borderRadius: "5px",
        }}
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
    };
  }

  componentWillMount() {
    let path = window.location.pathname.split("blog/");
    path = path[path.length - 1].replaceAll("/", "");

    import(`./posts/${path}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => this.setState({ post: res, postname: path }))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));

    // Dark mode
    let current = localStorage.getItem("blog-theme");
    if (current === null || current === "dark") {
      this.setState({ moon: "far fa-moon" });
      document.documentElement.classList.add("dark");
      document.body.style.backgroundImage = "url(" + darkGrid + ")";
    } else {
      this.setState({ moon: "fas fa-moon" });
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundImage = "url(" + grid + ")";
    }
  }

  // When the user clicks the dark-mode icon
  changeTheme() {
    let current = localStorage.getItem("blog-theme");
    if (current === null || current === "dark") {
      localStorage.setItem("blog-theme", "light");
      document.documentElement.classList.remove("dark");
      this.setState({ moon: "fas fa-moon" });
      document.body.style.backgroundImage = "url(" + grid + ")";
    } else if (current === "light") {
      localStorage.setItem("blog-theme", "dark");
      document.documentElement.classList.add("dark");
      this.setState({ moon: "far fa-moon" });
      document.body.style.backgroundImage = "url(" + darkGrid + ")";
    }
  }

  render() {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="bg-white dark:bg-gray-900 shadow-2xl w-full lg:w-2/3 xl:w-1/2 lg:my-2 lg:rounded-md h-full p-6 lg:p-10">
          <div className="flex items-center justify-between mb-10">
            <Link
              to="/blog"
              className="text-blue-500 flex items-center hover:text-blue-600 hover:underline"
            >
              <GoChevronLeft />
              Go back
            </Link>
            <button
              className="p-3 dark:text-white focus:outline-none text-lg"
              onClick={this.changeTheme.bind(this)}
            >
              <i className={this.state.moon + " block"}></i>
            </button>
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
