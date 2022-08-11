import React, { useState, useEffect } from "react";
import Newpost from "./Newpost";
import axios from "axios";

export default function MainComponents() {
  const [array, setArray] = useState([]);
  const [account, setAccount] = useState({});
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get("/twoots").then((res) => {
      setArray(res.data);
    });
  }, []);

  function calculateDate(date) {
    const dif = (new Date() - new Date(date)) / 1000 / 60 / 60 / 24;

    if (dif < 1) {
      return "Posted Today";
    }
    if (dif === 1) {
      return "Posted one day ago";
    }
    if (dif > 2) {
      return `Posted ${String(dif).slice(0, 2)} days ago`;
    }
  }

  const twootsElements = array.map((element) => (
    <div className="post_user_box">
      <div className="post_user_information">
        <div className="user-profile">
          <img
            className="post_user_image"
            src={`https://avatars.dicebear.com/api/bottts/${element.authorSlug}.svg`}
            alt=""
          />
          <span className="post_user_name">{element.author}</span>
        </div>
        <div>
          <span className="post_user_name_id">@{element.authorSlug}</span>
        </div>
      </div>
      <div className="post_user_contents">
        <p className="post_user_contents_sentence">{element.content}</p>
      </div>
      <div className="post_user_date_icons">
        <span className="post_user_date">
          {calculateDate(element.dateAdded)}
        </span>
        <div className="post_user_icons">
          <span className="post_user_icon" onClick={changeColor}>
            <i class="fas fa-flag"></i>
          </span>
          <span className="post_user_icon" onClick={changeColor}>
            <i class="fas fa-retweet"></i>
          </span>
          <span className="post_user_icon" onClick={changeColor}>
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
    <div>
      <Newpost
        account={account}
        setAccount={setAccount}
        content={content}
        setContent={setContent}
        array={array}
        setArray={setArray}
      />
      <div>{twootsElements}</div>
    </div>
  );
}
