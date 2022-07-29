# App Idea

twootr - React Version

# User stories

User Story | Job Story
as a <role> | When I <action>
I want <goal> | I want <goal>
so that <gain> | so that <gain>

## Story 1 (User profile Form):

As a user,
I want create a new account and posts
so that I can make both

When I create my account my profile image is also selected

# Story 2 (Create new pots Form):

As a user,
I want create a new posts
Also, I can see the all of posts that are already made

# Story 3 (All of tweeets form):

As a user,
I can see the all of posts one by one
And, there are some icons that I can use

# Data Structure

```js

//Post
const post = {
    userName:"Henry David Thoreau",
    content:"Many men go fishing all of their lives without knowing that it is not fish they are after.",
    userSlug:"henry-david-thoreau",
    dateAdded:"2022-07-06"
}

//list of posts
const posts = [post1,post2,... ]

```

# HTML Structure

- body
  - header
    - h1 title
  - main
    - create new account
      - form new account
    - create new post
      - form new posts
    - show all of tweets
      - ul
        - li userName + content + dataAdded

# Component Structure

- App
  - Header
  - Main (accounts, tweets)
    - Account
    - Tweets
      - CreateNewPosts
      - AllOfAccounts

# Data Map
