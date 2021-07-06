import React, { Component } from "react";
import IntelygenzImg from "../img/companies/intelygenz.png";

export default class Job extends Component {
  render() {
    return (
      <div className="p-10 bg-white dark:bg-gray-800 dark:text-gray-50 w-full w-full rounded shadow-2xl flex items-start">
        <img
          className="w-28 2xl:w-32 h-28 2xl:h-32 rounded-sm mr-5"
          src={IntelygenzImg}
        />
        <div>
          <p className="font-bold text-xl leading-none mb-1">
            {this.props.role}
          </p>
          <a
            href={this.props.website}
            rel="noreferrer"
            target="_blank"
            className="text-primary hover:text-secondary dark:text-secondaryDark dark:hover:text-primaryDark"
          >
            {this.props.company}
          </a>
          <p className="text-gray-500 dark:text-gray-400">
            {this.props.from} - {this.props.to} · {this.props.duration}
          </p>
          <p className="text-gray-500 dark:text-gray-400">{this.props.where}</p>
        </div>
      </div>
    );
  }
}
