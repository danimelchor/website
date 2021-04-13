import '../css/index.css';

import Content from './Content';
import Menu from './Menu';
import React from 'react';

class SinglePage extends React.Component {
  render() {
    return (
      <div className="w-full h-full">
        <Menu />
        <Content />
      </div>
    );
  }
}

export default SinglePage;
