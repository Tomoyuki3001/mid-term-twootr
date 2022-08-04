import styled from "styled-components";

export const NavStyles = styled.nav`
  nav {
    display: flex;
    align-items: center;
    padding: 0 10%;
    justify-content: space-between;
    background-color: #eec643;
    height: 50px;
    color: black;
    font-weight: bold;
    text-transform: uppercase;
  }

  nav button {
    background-color: black;
    border: none;
    color: white;
    padding: 10px 20px;
    text-transform: uppercase;
    cursor: pointer;
  }
`;
