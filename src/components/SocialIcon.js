import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SocialIcon extends Component {
  render() {
    let url = this.props.item.url;
    let title = this.props.item.title;
    let icon = this.props.item.icon;
    let type = this.props.item.type;

    return (
      <div className="relative group">
        <div className="opacity-0 group-hover:opacity-100 bg-secondary dark:bg-secondaryDark text-white dark:text-black px-3 py-1 rounded-sm absolute bottom-0 left-0 transform translate-y-full transition-opacity duration-200 delay-300 text-center xl:text-lg">
          <div className="arrow left-4 2xl:left-6"></div>
          {title}
        </div>
        {type == "internal" && (
          <Link
            className="text-primary dark:text-white p-2 w-12 h-12 2xl:w-16 2xl:h-16 group-hover:bg-gray-200 dark:group-hover:bg-gray-800 flex items-center justify-center rounded-full transition-colors duration-200"
            to={url}
          >
            {icon}
          </Link>
        )}
        {type == "external" && (
          <a
            className="text-primary dark:text-white p-2 w-12 h-12 2xl:w-16 2xl:h-16 group-hover:bg-gray-200 dark:group-hover:bg-gray-800 flex items-center justify-center rounded-full transition-colors duration-200"
            href={url}
          >
            {icon}
          </a>
        )}
      </div>
    );
  }
}
