import React, { Component } from "react";

export default class Skill extends Component {
  render() {
    return (
      <div className="inline-block text-center m-7 h-20 text-center">
        <img
          className="block max-w-full max-h-full m-auto hover:scale-110 transform transition-transform"
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
