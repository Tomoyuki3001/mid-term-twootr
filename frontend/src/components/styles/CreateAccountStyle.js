import styled from "styled-components";

export const CreateAccountStyles = styled.div`
  div {
    background-color: black;
    textarea:focus,
    input:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }
  }
  form input {
    background-color: #eef0f2;
    border: none;
    margin-right: 10px;
    height: 24px;
  }
  button {
    border: none;
    color: black;
    background-color: #eec643;
    font-weight: bold;
    height: 26px;
    cursor: pointer;
  }
  div img {
    background-color: #eef0f2;
    border-radius: 50%;
    padding: 2%;
    width: 180px;
    margin-bottom: 14px;
  }

  div p {
    color: #eec643;
    text-align: center;
    margin: 0;
  }
  div p:first-child {
    font-size: 26px;
    font-weight: bold;
  }

  .account-form {
    padding: 4% 0 2% 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .create-account-box {
    display: flex;
    align-items: center;
    button {
      margin-left: 10px;
    }
  }
  .create-account-name {
    margin: 0%;
  }
  .account-input-box {
    display: flex;
  }
  .create-account-input {
    margin: 0% 3% 0% 0%;
  }
  .create-account-name-box {
    text-align: center;
    margin-top: 20px;
  }
`;
