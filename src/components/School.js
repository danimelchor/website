import React, { Component } from "react";

export default class School extends Component {
  state = {
    types: [],
  };

  componentDidMount() {
    // Renders all things I did at a school
    let typesHtml = this.props.type.map((i, index) => {
      return <li key={index}>{i}</li>;
    });
    this.setState({ types: typesHtml });
  }

  render() {
    return (
      <div className="p-10 my-5 lg:my-0 bg-white dark:bg-gray-800 dark:text-gray-50 w-full md:w-5/6 lg:w-2/5 lg:mx-5 rounded shadow-lg hover:shadow-2xl">
        <a
          href={this.props.url}
          rel="noreferrer"
          target="_blank"
          className="uppercase text-lg md:text-2xl text-primary hover:text-secondary dark:text-gray-400 dark:hover:text-secondaryDark font-mono italic"
        >
          <p href={this.props.url} target="_blank" rel="noreferrer">
            &#47;&#47; {this.props.school}
          </p>
        </a>
        <span className="text-blue-700 dark:text-blue-300 block mb-3 font-mono">
          from({this.props.year.slice(0, 4)},
          {this.props.year.slice(7, this.props.year.length)})
        </span>
        <ul className="list-disc list-inside">{this.state.types}</ul>
      </div>
    );
  }
}
