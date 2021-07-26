import React, { Component } from "react";

import About from "../pages/About";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Education from "../pages/Education";
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";
import Menu from "./Menu";
import Welcome from "../pages/Welcome";

export default class Content extends Component {
  state = {
    active: 0,
  };

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
              <Contact />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
