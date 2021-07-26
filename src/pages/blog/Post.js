import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

import "./style.css";
import grid from "../../img/grid2.png";
import darkGrid from "../../img/darkGrid.png";
import { Link, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

import { GoChevronLeft } from "react-icons/go";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
/* Use `…/dist/cjs/…` if you’re not in ESM! */
import { ghcolors, nord } from "react-syntax-highlighter/dist/esm/styles/prism";

import { POSTS } from "./PostsList";

// CODE SYNTAX
const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={localStorage.getItem("blog-theme") == "light" ? ghcolors : nord}
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

    import(`./posts/${path}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) =>
            this.setState({ post: res, postname: path, info: POSTS[path] })
          )
          .catch((err) => this.setState({ redirect: <Redirect to="/blog" /> }));
      })
      .catch((err) => this.setState({ redirect: <Redirect to="/blog" /> }));

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
      <div className="w-full h-full flex flex-col items-center justify-center bg-white dark:bg-gray-900">
        {this.state.redirect}
        <Helmet>
          <title>{this.state.info.title}</title>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@dmh672" />
          <meta name="twitter:creator" content="@dmh672" />
          <meta name="twitter:title" content={this.state.info.title} />
          <meta name="twitter:description" content={this.state.info.subtitle} />
          <meta
            name="twitter:image"
            content={`https://danielmelchor.com${process.env.PUBLIC_URL}/blog/img/${this.state.postname}.png`}
          />
        </Helmet>
        <div
          className="overflow-hidden flex items-center justify-center w-full relative bg-yellow-50 dark:bg-gray-800"
          style={
            window.innerWidth > 640 ? { height: "65vh" } : { height: "100vw" }
          }
        >
          <Link
            to="/"
            className="absolute left-0 top-0 p-5 z-50 dark:text-white font-black text-lg sm:text-xl hover:text-gray-700 dark:hover:text-gray-300 hover:underline"
          >
            danielmelchor.com
          </Link>
          <img
            src={`${process.env.PUBLIC_URL}/blog/img/${this.state.postname}.png`}
            className="h-full filter absolute top-1/2 transform -translate-y-1/2"
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
              <a
                href={this.state.info["link"]}
                style={{ backgroundColor: "#355876" }}
                className="px-4 py-1 text-white rounded-full transition-transform hover:scale-105 transform"
              >
                See on Towards Data Science
              </a>
              <button
                className="p-3 dark:text-white focus:outline-none text-lg hover:text-gray-700 dark:hover:text-gray-300"
                onClick={this.changeTheme.bind(this)}
              >
                <i className={this.state.moon + " block"}></i>
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
