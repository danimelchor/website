import React, { Component } from "react";

import { IoMdCopy } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";

const copyToClipboard = (str) => {
  const el = document.createElement("textarea");
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

export default class ContactItem extends Component {
  render() {
    return (
      <div
        className={`bg-blue-100 dark:bg-blue-900 border-2 border-blue-400 dark:border-blue-900 rounded-sm flex items-center justify-between py-2 sm:py-4 px-3 sm:px-6`}
      >
        <div className="flex items-center">
          <div
            className={`text-xl sm:text-3xl mr-4 text-blue-400 dark:text-blue-300`}
          >
            {this.props.icon}
          </div>
          <a
            href={this.props.url}
            className={`sm:text-lg text-blue-900 dark:text-blue-200 hover:underline`}
          >
            {this.props.text}
          </a>
        </div>
        <div
          className={`flex items-center text-lg sm:text-xl text-blue-400 dark:text-blue-300 gap-2`}
        >
          <IoMdCopy
            className={`cursor-pointer hover:text-blue-800 dark:hover:text-blue-500 transform hover:scale-110 transition-transform`}
            onClick={() => {
              copyToClipboard(this.props.text);
              this.props.copiedText();
            }}
          />
          <a
            href={this.props.url}
            className={`cursor-pointer hover:text-blue-800 dark:hover:text-blue-500 transform hover:scale-110 transition-transform`}
          >
            <FiExternalLink />
          </a>
        </div>
      </div>
    );
  }
}
