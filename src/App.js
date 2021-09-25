import "./css/index.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Content from "./containers/Content";
import React from "react";
import Blog from "./pages/blog/Blog";
import Post from "./pages/blog/Post";
import ProjectPage from "./pages/projects/ProjectPage";
import Cookies from "./components/Cookies";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Content />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route path="/blog/:slug">
          <Post />
        </Route>
        <Route path="/projects/:slug">
          <ProjectPage />
        </Route>
        <Route exact path="/:slug">
          <Content location={window.location.hash} />
        </Route>
      </Switch>
      <Cookies />
    </Router>
  );
}

export default App;
