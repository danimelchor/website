import React, { Component } from "react";

import { setCookie } from "../functions/cookies";

const setCookies = (val) => {
  localStorage.setItem("danielmelchor.com__cookiesAccepted", val);

  if (val) {
    setCookie(
      "danielmelchor.com__joinDate",
      new Date().toISOString(),
      365 * 100
    );
    setCookie("danielmelchor.com__firstVisit", window.location.href, 365 * 100);
  }
};

export default class Cookies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
  }

  componentDidMount() {
    let val = localStorage.getItem("danielmelchor.com__cookiesAccepted");
    if (val !== null) {
      this.setState({ display: false });
    }
  }

  componentDidUpdate() {
    let val = localStorage.getItem("danielmelchor.com__cookiesAccepted");
    if (val !== null && this.state.display) {
      this.setState({ display: false });
    }
  }

  chooseCookies(val) {
    setCookies(val);
    this.setState({ display: false });
  }

  render() {
    return (
      this.state.display && (
        <div
          className="w-full bg-white dark:bg-gray-700 flex bg-opacity-90 fixed bottom-0 left-0 p-3 items-center justify-center border-t border-gray-200 dark:border-gray-600"
          style={{ zIndex: 1000 }}
          id="cookies"
        >
          <div className="w-full lg:w-3/4 2xl:w-1/2 flex flex-col md:flex-row items-center justify-between">
            <span className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0 w-2/3 flex">
              By continuing to use this site, you consent to our use of cookies
              for tracking site usage.
            </span>
            <div className="flex flex-col sm:flex-row items-center justify-center md:w-1/2 gap-2">
              <button
                onClick={() => this.chooseCookies(true)}
                className="rounded-full border-2 border-green-600 bg-green-600 px-2 text-white py-1 hover:border-green-500 hover:bg-green-500 transition-colors w-full sm:w-auto"
              >
                Accept Cookies
              </button>
              <button
                onClick={() => this.chooseCookies(false)}
                className="rounded-full border-2 border-primary dark:border-primaryDark text-primary dark:text-primaryDark hover:border-gray-500 dark:hover:text-gray-400 dark:hover:border-gray-400 hover:text-gray-500 px-2 py-1 transition-colors w-full sm:w-auto"
              >
                I prefer to stay anonymous
              </button>
            </div>
          </div>
        </div>
      )
    );
  }
}
