import React from 'react'
import './styles.scss'

const NavLink = props => (
  <li className="nav-link" data-menuanchor={props.anchor}>
    <a className="nav-link__anchor" href={`${props.link}`}>
      <span />
    </a>
  </li>
)

export default NavLink
