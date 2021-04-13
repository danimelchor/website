import './css/index.css';

import Content from './Content';
import Menu from './Menu';
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
