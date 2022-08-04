import axios from 'axios';
import React, { useRef } from 'react'
import Accounts from './Accounts';
import { CreatePost } from './styles/CreatePost';
import { NavStyles } from './styles/NavStyles';

export default function Newpost(props) {
  const {account, setAccount} = props
  const {content, setContent} = props
  const {array, setArray} = props

  const inputElement = useRef(null);
  const realDate = new Date();

  const date =
    realDate.getFullYear() +
    "-" +
    (realDate.getMonth() + 1) +
    "-" +
    realDate.getDate();

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
  }

  const submitAccount = (event) => {
    event.preventDefault();
    setContent(event.target.value);
    newPostObject.author = account.firstName + " " + account.lastName;
    newPostObject.content = newPostObject.content;
    newPostObject.authorSlug = account.slug;
    newPostObject.dateAdded = date;
    axios
      .post("http://localhost:8080/twoot", { newTwoot: newPostObject })
      .then((res) => {
        setArray([...array, {...res.data }]);
      })
      .catch((err) => {
        console.log(err);
      });
      axios.get("http://localhost:8080/twoots").then((res) => {
        setArray(res.data);
      });
  };

  const getChars = (content) => {
    if(content) {
      const charLength = content.length;
      return 140 - charLength;
    }
    if(content.length > 140) {
      return 0 - content.length
    }
    else{
      return 140
    }
  }
  
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
          <form>
            <p>Create a new post</p>
            <textarea id="postInput"
              placeholder="What's happening?"
              value={content}
              onChange={handleContent}
              ref={inputElement}>
              </textarea>
            <div>
              <button onClick={submitAccount}>Twoot</button>
              <span id='countChars'>{getChars(content)}</span>
            </div>
          </form>
          </CreatePost>
    </div>
  );
}