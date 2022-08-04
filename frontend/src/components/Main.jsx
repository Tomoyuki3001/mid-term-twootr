import React, { useState, useEffect } from "react";
import Newpost from "./Newpost";
import { WholeStyles } from "../components/styles/WholeStyles";
import { TwootsList } from "../components/styles/TwootsList";
import axios from "axios";

export default function MainComponents() {
    const [array, setArray] = useState([])
    const [account, setAccount] = useState({});
    const [content, setContent] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8080/twoots").then((res) => {
          setArray(res.data);
        });
      }, []);

  const twootsElements = array.map((element) => (
    <div className="post_user_box">
      <div className="post_user_information">
        <div className="user-profile">
        <img src={`https://avatars.dicebear.com/api/bottts/${element.authorSlug}.svg`} alt=""/>
        <span>{element.author}</span>
        </div>
        <div>
        <span>{element.authorSlug}</span>
        </div>
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
    if (e.currentTarget.style.color !== "rgb(238, 198, 67)") {
      e.currentTarget.style.color = "rgb(238, 198, 67)";
    } else {
      e.currentTarget.style.color = "black";
    }
  }

  return (
    <WholeStyles>
      <div>
        <Newpost account={account} setAccount={setAccount}  content={content} setContent={setContent} array={array} setArray={setArray}/>
        <TwootsList>
          <div>{twootsElements}</div>
        </TwootsList>
      </div>
    </WholeStyles>
  );
}