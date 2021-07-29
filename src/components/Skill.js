import React, { Component } from "react";

export default class Skill extends Component {
  render() {
    return (
      <div className="flex items-center justify-center flex-col text-center">
        <img
          className="block max-w-full h-12 m-auto hover:scale-110 transform transition-transform"
          src={this.props.img}
          alt="skillIcon"
        />
        <p className="text-xl text-primary dark:text-gray-400 mt-2">
          {this.props.name}
        </p>
      </div>
    );
  }
}
