import React, { Component } from "react";

import { Link } from "react-scroll";

export default class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  componentDidMount() {
    this.onScroll();
    window.addEventListener("scroll", this.onScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll.bind(this));
  }

  // Checks window scroll to see if a menu element should be highlighted
  onScroll() {
    if (document.getElementById(this.props.linkTo)) {
      let thisHeight = document.getElementById(this.props.linkTo).clientHeight;
      let thisOffsetTop = document.getElementById(this.props.linkTo).offsetTop;
      let offset = window.innerHeight / 3;
      if (
        window.scrollY + offset > thisOffsetTop &&
        window.scrollY + offset < thisOffsetTop + thisHeight
      ) {
        this.setState({ active: true });
      } else {
        this.setState({ active: false });
      }
    }
  }

  render() {
    let default_class = "cursor-pointer block transition-all pl-4 md:pl-6";
    return (
      <Link
        onClick={this.props.toggleMenuFunc}
        to={this.props.linkTo}
        smooth={true}
        duration={400}
        delay={0}
        spy={true}
        offset={window.innerWidth < 768 ? -84 : 0}
        ignoreCancelEvents={true}
        style={
          window.innerHeight > window.innerWidth
            ? { paddingTop: "2vh", paddingBottom: "2vh" }
            : { paddingTop: "2vh", paddingBottom: "2vh" }
        }
        className={
          default_class +
          (this.state.active
            ? " bg-gray-100 shadow-md relative menuItemActive text-gray-900 border-l-8 border-solid -mr-2 border-secondary dark:bg-gray-700 dark:text-white dark:border-primaryDark"
            : " bg-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 hover:text-black dark:bg-gray-800 dark:text-gray-300 dark:hover:text-gray-100 dark:border-primaryDark")
        }
      >
        <div className="inline-block align-middle text-2xl 2xl:text-3xl pr-5 w-12 text-center">
          {this.props.icon}
        </div>
        <span className="inline-block align-middle text-md xl:text-lg font-mono">
          <span className="text-secondary dark:text-secondaryDark">self</span>
          {this.props.text}
        </span>
      </Link>
    );
  }
}
