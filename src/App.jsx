import React from "react";
import AboutMe from "./pages/AboutMe";
import InfiniteScrollPage from "./pages/InfiniteScroll";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-header">LWANDISO ZWANE</h1>
      <h2 className="app-subheader">MACHINE LEARNING ENGINEER</h2>
      <InfiniteScrollPage />
    </div>
  );
};

export default App;
