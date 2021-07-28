import "./css/index.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Content from "./containers/Content";
import React from "react";
import Blog from "./pages/blog/Blog";
import Post from "./pages/blog/Post";
import ProjectPage from "./pages/projects/ProjectPage";

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
        <Route exact path="/projects">
          <div className="w-full min-h-full">
            <Content location="projects" />
          </div>
        </Route>
        <Route path="/projects/:slug">
          <ProjectPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
