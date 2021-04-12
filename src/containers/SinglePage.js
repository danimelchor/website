import '../css/index.css';

import Content from './Content';
import Menu from './Menu';
import React from 'react';

class SinglePage extends React.Component {
  state = {
    active: 0
  }

  componentDidMount() {
    document.addEventListener('scroll', this.manageScroll.bind(this));
  }

  manageScroll() {
    let currentScroll = document.documentElement.scrollTop + document.documentElement.clientHeight/2

    if (currentScroll > document.getElementById("resume").offsetTop) {
      this.setState({ active:7 });
    } else if (currentScroll > document.getElementById("contact").offsetTop) {
      this.setState({ active:6 });
    } else if (currentScroll > document.getElementById("education").offsetTop) {
      this.setState({ active:5 });
    } else if (currentScroll > document.getElementById("skills").offsetTop) {
      this.setState({ active:4 });
    } else if (currentScroll > document.getElementById("projects").offsetTop) {
      this.setState({ active:3 });
    } else if (currentScroll > document.getElementById("experience").offsetTop) {
      this.setState({ active:2 });
    } else if (currentScroll > document.getElementById("about").offsetTop) {
      this.setState({ active:1 });
    } else {
      this.setState({ active:0 });
    }
  }

  render() {
    return (
      <div className="w-full h-full">
        <Menu active={this.state.active} />
        <Content active={this.state.active} />
      </div>
    );
  }
}

export default SinglePage;
