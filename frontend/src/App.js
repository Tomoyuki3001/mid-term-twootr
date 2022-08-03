import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import "./App.css";
import axios from "axios";
import Newpost from "./components/Newpost";
import { WholeStyles } from "./components/styles/WholeStyles";
import { TwootsList } from "./components/styles/TwootsList";

function App() {
  const [newPost, setNewPost] = useState([]);
  const [array, setArray] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/twoots").then((res) => {
      console.log("res get", res);
      setArray(res.data);
    });
  }, []);

  const twootsElements = array.map((element) => (
    <div className="post_user_box">
      <div className="post_user_information">
        <img src="" alt="" />
        <span>{element.author}</span>
        <span>@{element.authorSlug}</span>
      </div>
      <div className="post_user_contents">
        <p>{element.content}</p>
      </div>
      <div className="post_user_date_icons">
        <span>{element.dateAdded}</span>
        <div className="post_user_icons">
          <span onClick={changeColor}>
            <i class="fas fa-flag"></i>
          </span>
          <span onClick={changeColor}>
            <i class="fas fa-retweet"></i>
          </span>
          <span onClick={changeColor}>
            <i class="fas fa-heart"></i>
          </span>
        </div>
      </div>
    </div>
  ));

  function changeColor(e) {
    if (e.currentTarget.style.color != "pink") {
      e.currentTarget.style.color = "pink";
    } else {
      e.currentTarget.style.color = "black";
    }
  }

  return (
    <WholeStyles>
      <div>
        <Header />
        <Newpost newPost={newPost} setNewPost={setNewPost} />
        <TwootsList>
          <div>{twootsElements}</div>
        </TwootsList>
      </div>
    </WholeStyles>
  );
}

export default App;
