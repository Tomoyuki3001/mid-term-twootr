import axios from "axios";
import React, { useRef } from "react";
import Accounts from "./Accounts";
import { CreatePost } from "./styles/CreatePost";
import { NavStyles } from "./styles/NavStyles";

export default function Newpost(props) {
  const { account, setAccount } = props;
  const { content, setContent } = props;
  const { array, setArray } = props;

  const inputElement = useRef(null);

  const realDate = new Date();
  const date = realDate.toLocaleDateString("en-CA");

  // console.log("date", (new Date(date)- new Date("1991-02-27"))/1000/60/60/24)

  const newPostObject = {
    author: "",
    authorSlug: "",
    content: content,
    dateAdded: "",
  };

  const handleContent = (event) => {
    setContent(event.target.value);
  };

  const handlefocus = () => {
    inputElement.current.focus();
  };

  const submitAccount = (event) => {
    event.preventDefault();
    setContent(event.target.value);
    newPostObject.author = account.firstName + " " + account.lastName;
    // newPostObject.content = newPostObject.content;
    newPostObject.authorSlug = account.slug;
    newPostObject.dateAdded = date;
    axios
      .post("/twoot", { newTwoot: newPostObject })
      .then((res) => {
        console.log("check data", res.data);
        setArray([{ ...res.data }, ...array]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getChars = (content) => {
    if (content) {
      const charLength = content.length;
      return 140 - charLength;
    }
    return 140;
  };

  return (
    <div>
      <NavStyles>
        <nav>
          <span>Twootr</span>
          <button onClick={handlefocus}>Write a new tweet</button>
        </nav>
      </NavStyles>
      <Accounts account={account} setAccount={setAccount} />
      <CreatePost>
        <div>
          <form>
            <p>Create a new post</p>
            <textarea
              className="create_textarea"
              placeholder="What's happening?"
              value={content}
              onChange={handleContent}
              ref={inputElement}
            ></textarea>
            <div>
              <button
                disabled={getChars(content) < 0 || getChars(content) === 140}
                onClick={submitAccount}
              >
                Twoot
              </button>
              <span
                id="countChars"
                className={getChars(content) < 0 ? "negative" : ""}
              >
                {getChars(content)}
              </span>
            </div>
          </form>
        </div>
      </CreatePost>
    </div>
  );
}
