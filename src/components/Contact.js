import React, { Component } from "react";

// Icons
import { IoMdClose, IoMdCopy } from "react-icons/io";
import { FiLinkedin, FiMail, FiTwitter, FiExternalLink } from "react-icons/fi";
import { SiProtonmail } from "react-icons/si";

const copyToClipboard = (str) => {
  const el = document.createElement("textarea");
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
      timeout: "",
    };

    this.copiedText = this.copiedText.bind(this);
  }

  copiedText() {
    this.setState({ copied: true });
    window.setTimeout(
      function () {
        this.setState({ copied: false });
      }.bind(this),
      2000
    );
  }

  render() {
    return (
      <div
        className="fixed top-0 left-0 bg-black bg-opacity-70 w-screen h-screen flex items-center justify-center animated__fadeIn"
        style={{ zIndex: 1000 }}
        onClick={() => this.props.closeMenu()}
      >
        <div
          className="w-11/12 w-3/4 lg:w-2/3 xl:w-1/2 bg-white dark:bg-gray-800 rounded-sm relative flex flex-col py-8 sm:py-16 px-4 sm:px-10"
          onClick={(e) => e.stopPropagation()}
        >
          <IoMdClose
            className="absolute top-5 right-5 h-6 w-6 rounded-full cursor-pointer"
            onClick={() => this.props.closeMenu()}
          />
          <h2 className="text-4xl 2xl:text-5xl 3xl:text-7xl font-black text-gray-800 dark:text-gray-100">
            Contact me!
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg xl:text-xl mt-2">
            If you want to have me as a part of your team, or know more about
            what I do, you can contact me via:
          </p>
          <div className="h-full w-full flex items-center justify-center mt-5">
            <div className="grid md:grid-cols-2 gap-4 w-full">
              <div
                className={`bg-blue-100 dark:bg-blue-900 border-2 border-blue-400 dark:border-blue-900 rounded-sm flex items-center justify-between py-2 sm:py-4 px-3 sm:px-6`}
              >
                <div className="flex items-center">
                  <div
                    className={`text-xl sm:text-3xl mr-4 text-blue-400 dark:text-blue-300`}
                  >
                    <SiProtonmail />
                  </div>
                  <a
                    href="mailto:dmelchor@pm.me"
                    className={`sm:text-lg text-blue-900 dark:text-blue-200 hover:underline`}
                  >
                    dmelchor@pm.me
                  </a>
                </div>
                <div
                  className={`flex items-center text-lg sm:text-xl text-blue-400 dark:text-blue-300 gap-2`}
                >
                  <IoMdCopy
                    className={`cursor-pointer hover:text-blue-800 dark:hover:text-blue-500 transform hover:scale-110 transition-transform`}
                    onClick={() => {
                      copyToClipboard("dmelchor@pm.me");
                      this.copiedText();
                    }}
                  />
                  <a
                    href="mailto:dmelchor@pm.me"
                    className={`cursor-pointer hover:text-blue-800 dark:hover:text-blue-500 transform hover:scale-110 transition-transform`}
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
              <div
                className={`bg-indigo-100 dark:bg-indigo-900 border-2 border-indigo-400 dark:border-indigo-900 rounded-sm flex items-center justify-between py-2 sm:py-4 px-3 sm:px-6`}
              >
                <div className="flex items-center">
                  <div
                    className={`text-xl sm:text-3xl mr-4 text-indigo-400 dark:text-indigo-300`}
                  >
                    <FiLinkedin />
                  </div>
                  <a
                    href="https://www.linkedin.com/in/danimelchor/"
                    className={`sm:text-lg text-indigo-900 dark:text-indigo-200 hover:underline`}
                  >
                    danimelchor
                  </a>
                </div>
                <div
                  className={`flex items-center text-lg sm:text-xl text-indigo-400 dark:text-indigo-300 gap-2`}
                >
                  <IoMdCopy
                    className={`cursor-pointer hover:text-indigo-800 dark:hover:text-indigo-500 transform hover:scale-110 transition-transform`}
                    onClick={() => {
                      copyToClipboard("danimelchor");
                      this.copiedText();
                    }}
                  />
                  <a
                    href="https://www.linkedin.com/in/danimelchor/"
                    className={`cursor-pointer hover:text-indigo-800 dark:hover:text-indigo-500 transform hover:scale-110 transition-transform`}
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
              <div
                className={`bg-purple-100 dark:bg-purple-900 border-2 border-purple-400 dark:border-purple-900 rounded-sm flex items-center justify-between py-2 sm:py-4 px-3 sm:px-6`}
              >
                <div className="flex items-center">
                  <div
                    className={`text-xl sm:text-3xl mr-4 text-purple-400 dark:text-purple-300`}
                  >
                    <FiMail />
                  </div>
                  <a
                    href="mailto:dmh672@gmail.com"
                    className={`sm:text-lg text-purple-900 dark:text-purple-200 hover:underline`}
                  >
                    dmh672@gmail.com
                  </a>
                </div>
                <div
                  className={`flex items-center text-lg sm:text-xl text-purple-400 dark:text-purple-300 gap-2`}
                >
                  <IoMdCopy
                    className={`cursor-pointer hover:text-purple-800 dark:hover:text-purple-500 transform hover:scale-110 transition-transform`}
                    onClick={() => {
                      copyToClipboard("dmh672@gmail.com");
                      this.copiedText();
                    }}
                  />
                  <a
                    href="mailto:dmh672@gmail.com"
                    className={`cursor-pointer hover:text-purple-800 dark:hover:text-purple-500 transform hover:scale-110 transition-transform`}
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
              <div
                className={`bg-pink-100 dark:bg-pink-900 border-2 border-pink-400 dark:border-pink-900 rounded-sm flex items-center justify-between py-2 sm:py-4 px-3 sm:px-6`}
              >
                <div className="flex items-center">
                  <div
                    className={`text-xl sm:text-3xl mr-4 text-pink-400 dark:text-pink-300`}
                  >
                    <FiTwitter />
                  </div>
                  <a
                    href="https://twitter.com/danii672"
                    className={`sm:text-lg text-pink-900 dark:text-pink-200 hover:underline`}
                  >
                    @danii672
                  </a>
                </div>
                <div
                  className={`flex items-center text-lg sm:text-xl text-pink-400 dark:text-pink-300 gap-2`}
                >
                  <IoMdCopy
                    className={`cursor-pointer hover:text-pink-800 dark:hover:text-pink-500 transform hover:scale-110 transition-transform`}
                    onClick={() => {
                      copyToClipboard("@danii672");
                      this.copiedText();
                    }}
                  />
                  <a
                    href="https://twitter.com/danii672"
                    className={`cursor-pointer hover:text-pink-800 dark:hover:text-pink-500 transform hover:scale-110 transition-transform`}
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.copied && (
          <div
            className="fixed bg-green-100 rounded-sm text-center w-64 py-2 text-green-900"
            id="copied-div"
          >
            Copied!
          </div>
        )}
      </div>
    );
  }
}
