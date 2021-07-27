import "./css/index.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Content from "./containers/Content";
import React from "react";
import Blog from "./pages/blog/Blog";
import Post from "./pages/blog/Post";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="w-full min-h-full">
            <Content />
          </div>
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route path="/blog/:slug">
          <Post />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
