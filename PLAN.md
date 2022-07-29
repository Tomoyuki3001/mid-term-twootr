# App Idea

twootr - React Version

# User stories

User Story | Job Story
as a <role> | When I <action>
I want <goal> | I want <goal>
so that <gain> | so that <gain>

## Story 1 (User profile Form):

As a user,
I want create a new account.
so that I can make post with my name in it.

When I create my account my profile image is also selected.

## Story 2 (User profile Form):

As a user,
I want type in a input
so that I can creat a new post

When I click the button to post my post will be show in the list.

# Story 3 (Create new pots Form):

As a user,
I want to red the post
So that I can like, save or...."change colors"

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
    - nav
      - h1 title
      - button (write...)
    - avatar
    - create new account
    - slug
  - main
    - section
      - create new post
      - form new posts
      - button twootr
    - section
      - show all of tweets
      - ul
        - li userName + content + dataAdded

# Component Structure

- App
  - Header
  - Main (accounts, tweets)
    - CreatAccount
    - Tweets
      - CreateNewPosts
      - AllAccounts

# Data Map
