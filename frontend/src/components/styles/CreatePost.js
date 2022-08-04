import styled from "styled-components";

export const CreatePost = styled.form`
  form {
    p {
      font-weight: bold;
    }
    margin: 2% 10% 5% 10%;
    button {
      background-color: #eec643;
      font-weight: bold;
      border: non;
      text-transform: uppercase;
      border: none;
      padding: 5px 10px;
    }
    textarea {
      width: 100%;
      border: none;
      border-bottom: 2px solid black;
      margin-bottom: 10px;
      padding: 0 10px;
    }
    textarea:focus,
    input:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }
    div {
      display: flex;
      justify-content: space-between;
    }
  }
  .create_textarea {
    resize: none;
  }
`;
