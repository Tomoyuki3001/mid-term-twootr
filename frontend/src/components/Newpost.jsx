import axios from 'axios';
import React, {useEffect, useState} from 'react'
import Accounts from './Accounts';
import { CreatePost } from './styles/CreatePost';

export default function Newpost() {
  const [newPost, setNewPost] = useState([]);
  const [array, setArray] = useState([])
  const [account, setAccount] = useState({});
  const [content, setContent] = useState("");
  const [post, setPost] = useState("");
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

  useEffect(() => {
    axios.get("http://localhost:8080/twoots").then((res) => {
      setArray(res.data);
    });
  }, [account, content]);

  useEffect(() => {
    axios.get("http://localhost:8080/twoots").then((res) => {
      setArray(res.data);
    });
  }, [newPost]);

  const handleContent = (event) => {
    setContent(event.target.value);
  };

  const submitAccount = (event) => {
    event.preventDefault();
    setContent(event.target.value);
    setPost(newPostObject);
    newPostObject.author = account.name;
    newPostObject.content = newPostObject.content;
    newPostObject.authorSlug = account.slug;
    newPostObject.dateAdded = date;
    console.log("check object", newPostObject);
    axios
      .post("http://localhost:8080/twoot", { newTwoot: newPostObject })
      .then((res) => {
        setNewPost([...newPost, ...{ res }]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
          <Accounts account={account} setAccount={setAccount} />
          <CreatePost>
          <form>
            <p>Create a new post</p>
            {/* <textarea placeholder="What's happening?" value={content} onChange={handleContent}></textarea> */}
            <input
              id="postInput"
              maxLength={140}
              placeholder="What's happening?"
              value={content}
              onChange={handleContent}
            />
            <div>
              {/* <input onClick={submitAccount} value="submit" type = "button" /> */}
              <button onClick={submitAccount}>Twoot</button>
              <span>140</span>
            </div>
          </form>
          </CreatePost>
        </div>
  );
}