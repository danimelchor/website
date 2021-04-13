import './css/index.css';

import Content from './containers/Content';
import Menu from './containers/Menu';
import React from 'react';

function App() {
  return (
    <div className="w-full h-full">
      <Menu />
      <Content />
    </div>
  );
}

export default App;
