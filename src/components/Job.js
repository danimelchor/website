import React, { Component } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

export default class Job extends Component {
  render() {
    return (
      <a
        href={this.props.website}
        rel="noreferrer"
        target="_blank"
        className="p-10 bg-white dark:bg-gray-800 dark:text-gray-50 w-full w-full rounded shadow-lg flex items-start group hover:shadow-2xl"
      >
        <img
          className="h-16 lg:h-28 xl:h- rounded-sm mr-5"
          src={this.props.image}
        />
        <div>
          <p className="font-bold text-xl leading-none mb-1">
            {this.props.role}
          </p>
          <p className="text-primary group-hover:text-secondary dark:text-secondaryDark dark:group-hover:text-primaryDark text-lg mb-3 block flex items-center">
            {this.props.company}{" "}
            <FiExternalLink className="ml-1 opacity-0 group-hover:opacity-100" />
          </p>
          <p className="text-blue-700 dark:text-blue-300 block font-mono text-sm flex items-center">
            from({this.props.from}, {this.props.to}):
            <BsArrowRight className="mx-2" />
            {this.props.duration}
          </p>
          <p className="text-primary dark:text-gray-400 font-mono italic text-sm">
            # {this.props.where}
          </p>
        </div>
      </a>
    );
  }
}
