import React, { Component } from "react";

import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Education from "../sections/Education";
import Footer from "../sections/Footer";
import Welcome from "../sections/Welcome";
import Menu from "./Menu";

export default class Content extends Component {
  state = {
    active: 0,
  };

  componentDidMount() {
    if (this.props.location) {
      let loc = document.getElementById(this.props.location).offsetTop;
      setTimeout(() => {
        window.scroll(0, loc);
      }, 500);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.active !== this.props.active) {
      this.setState({ active: this.props.active });
    }
  }

  render() {
    return (
      <div className="w-screen right-0 z-0 absolute">
        <div className="relative z-10">
          <Welcome active={this.state.active} />
          <div className="flex flex-col md:flex-row items-start w-full">
            <Menu />
            <div className="flex flex-col justify-start items-end w-screen md:w-2/3 lg:w-3/4 2xl:w-4/5">
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Education />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
