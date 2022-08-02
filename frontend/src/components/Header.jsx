import React from 'react'
import { NavStyles } from './styles/NavStyles';


export default function Header() {
  const inputFocus = document.getElementById('postInput')

  function handlefocus(e){
    inputFocus.focus()
  }
  return (
  <header>
    <NavStyles>
    <nav>
        <span>Twootr</span>
        <button onClick={handlefocus}>Write a new tweet</button>
    </nav>
    </NavStyles>
  </header>
  );
}
