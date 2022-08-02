import React, { useState, useEffect } from "react";
import Newpost from "./Newpost";
import { WholeStyles } from "../components/styles/WholeStyles";
import { TwootsList } from "../components/styles/TwootsList";
import axios from "axios";

export default function MainComponents() {
    const [array, setArray] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/twoots").then((res) => {
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
          <span>IC1</span>
          <span>IC2</span>
          <span>IC3</span>
        </div>
      </div>
    </div>
  ));

  return (
    <WholeStyles>
      <div>
        <Newpost/>
        <TwootsList>
          <div>{twootsElements}</div>
        </TwootsList>
      </div>
    </WholeStyles>
  );
}