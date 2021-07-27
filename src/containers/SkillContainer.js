import React, { Component } from "react";
import Skill from "../components/Skill";

export default class SkillContainer extends Component {
  state = {
    itemsHtml: [],
  };

  componentDidMount() {
    let arr = [];
    // Creating the skills icons + text
    for (let i = 0; i < this.props.names.length; i++) {
      arr.push(
        <Skill key={i} img={this.props.imgs[i]} name={this.props.names[i]} />
      );
    }
    this.setState({ itemsHtml: arr });
  }

  render() {
    return (
      <div className="block my-10 bg-white dark:bg-gray-800 dark:text-gray-50 rounded p-8 shadow-2xl">
        <h2 className="text-3xl uppercase w-full border-b-2 pb-3 text-primary border-secondary dark:text-gray-400 dark:border-primaryDark font-mono italic">
          &#47;&#47; {this.props.title}
        </h2>
        <div className="grid grid-cols-2 lg:block">{this.state.itemsHtml}</div>
      </div>
    );
  }
}
