import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.scss'

export default function NavBar() {
  return (
    <ul className="nav">
      <li>
        <NavLink to="/">About</NavLink>
      </li>
      <li>
        <NavLink to="/projects">Projects</NavLink>
      </li>
    </ul>
  )
}
