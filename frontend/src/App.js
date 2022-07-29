import React from "react";
import Header from "./components/Header";
import Post from "./components/Post";
import Allposts from "./components/Allposts";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Post />
      <Allposts />
    </div>
  );
}

export default App;
