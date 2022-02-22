import { HashRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import React from "react";
import Blog from "./pages/Blog";
import Post from "./pages/Blog/Post";
import ProjectPage from "./pages/Projects";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blog/:post" element={<Post />} />
          <Route exact path="/projects/:project" element={<ProjectPage />} />
          <Route
            exact
            path="/:section"
            element={<Home location={window.location.hash} />}
          />
        </Routes>
      </HashRouter>
      <ToastContainer />
    </>
  );
}

export default App;
