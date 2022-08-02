import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Accounts from './Accounts'
import { CreatePost } from './styles/CreatePost'

export default function Newpost(props) {
  const [account, setAccount] = useState({})
  const [post, setPost] = useState("")
  const [content, setContent] = useState("");
  const {newPost, setNewPost} = props

  const realDate = new Date();
  const date = realDate.getFullYear() + '|' + (realDate.getMonth()+1) + '|' + realDate.getDate();
  console.log(date);

  useEffect(() => {
    console.log(account, content);

  }, [account, content])

  const newTweet = {
    content: content, 
  }

  const newPostObject = {
    author:"",
    authorSlug:"",
    content: "",
    dateAdded:"",
  }


  const handleContent = (event) => {
    console.log("check", event.target.value);
    setContent(event.target.value)
  };

  const submitAccount = (event) => {
    event.preventDefault();
    setContent(event.target.value)
    setPost(newTweet)
    newPostObject.author = account.name
    newPostObject.content = newTweet.content;
    newPostObject.authorSlug = account.slug
    newPostObject.dateAdded = date
    console.log("check object", newPostObject);
    axios
      .post("http://localhost:8080/twoot", {newTwoot:newPostObject})
      .then((res) => {
        console.log('res post', res);
        setNewPost([...newPost, ...{res}])
      }).catch((err) => {
        console.log(err);
      })
 
  };

  return (
    <div>
        <Accounts account={account} setAccount={setAccount}/>
        <CreatePost>
        <form>
        <p>Create a new post</p>
        {/* <textarea placeholder="What's happening?" value={content} onChange={handleContent}></textarea> */}
        <input id="postInput" maxLength={140} placeholder="What's happening?" value={content} onChange={handleContent}/>
        <div>
            {/* <input onClick={submitAccount} value="submit" type = "button" /> */}
            <button onClick={submitAccount}>Twoot</button>
            <span>140</span>
        </div>
        </form>
        </CreatePost>
    </div>
  )
}
