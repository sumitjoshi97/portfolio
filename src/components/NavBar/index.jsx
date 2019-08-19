import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.scss'

export default function NavBar() {
  return (
    <ul className="nav">
      <li>
        <a
          href="https://drive.google.com/file/d/1QkUAVM7ZRFi-nwQb_B3rzB-q6uHn1_4d/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </li>
      <li>
        <NavLink to="/">About</NavLink>
      </li>
      <li>
        <NavLink to="/projects">Projects</NavLink>
      </li>
    </ul>
  )
}
