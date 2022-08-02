import React from 'react'
import { NavStyles } from './styles/NavStyles';


export default function Header() {
  return (
  <header>
    <NavStyles>
    <nav>
        <span>Twootr</span>
        <button>Write a new tweet</button>
    </nav>
    </NavStyles>
  </header>
  );
}
