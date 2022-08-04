import styled from "styled-components";

export const CreateAccountStyles = styled.div`
  div {
    padding: 4% 0 2% 0;
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
    max-width: 180px;
  }

  div p {
    color: #eec643;
    margin: 0;
  }
  div p:first-child {
    font-size: 26px;
    font-weight: bold;
  }
`;
