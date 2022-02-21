import React, { Component } from "react";
import { FiExternalLink } from "react-icons/fi";

export default class Job extends Component {
  render() {
    return (
      <div className="p-10 bg-white dark:bg-gray-800 dark:text-gray-50 w-full w-full rounded shadow-lg flex items-start hover:shadow-2xl">
        <img
          className="h-16 lg:h-28 rounded-sm mr-5"
          src={this.props.image}
          alt={this.props.company + " Logo"}
        />
        <div>
          <p className="font-bold text-xl leading-none mb-1">
            {this.props.role}
          </p>
          <a
            href={this.props.website}
            rel="noreferrer"
            target="_blank"
            className="text-primary group hover:text-secondary dark:text-secondaryDark dark:hover:text-primaryDark text-lg mb-3 block flex items-center"
          >
            {this.props.company}{" "}
            <FiExternalLink className="ml-1 opacity-0 group-hover:opacity-100" />
          </a>
          <p className="text-blue-700 dark:text-blue-300 block font-mono text-sm flex items-center">
            from({this.props.from}, {this.props.to}) -&gt; {this.props.duration}
            :
          </p>
          <p className="text-primary dark:text-gray-400 font-mono italic text-sm">
            # {this.props.where}
          </p>
        </div>
      </div>
    );
  }
}
