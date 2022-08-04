import styled from "styled-components";

export const TwootsList = styled.div`
  div {
    background-color: #eef0f2;
  }
  .post_user_box {
    padding: 10px;
    margin: 5% 10%;
    border: 2px solid black;
    img {
      max-width: 60px;
    }
  }
  .post_user_box {
    padding: 20px;
  }
  .post_user_information {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .post_user_date_icons {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    span {
      margin-right: 10px;
    }
  }
  .post_user_contents p {
    border-bottom: 2px solid black;
    padding-bottom: 4px;
  }
  .user-profile {
    display: flex;
    align-items: center;
    flex-direction: row;
    span {
      min-width: 320px;
      font-weight: bold;
      margin-left: 10px;
    }
  }
`;
