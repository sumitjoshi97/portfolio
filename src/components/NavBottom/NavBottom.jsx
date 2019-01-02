import React from 'react'
import './NavBottom.scss'

const NavBottom = () => (
  <nav className="bottom-nav">
    <ul className="bottom-nav__list">
      <li className="bottom-nav__list__item active">
        <a className="bottom-nav__list__item__link" href="#projects/">
          01
        </a>
      </li>
      <li className="bottom-nav__list__item">
        <a className="bottom-nav__list__item__link" href="#projects/1">
          02
        </a>
      </li>
      <li className="bottom-nav__list__item">
        <a className="bottom-nav__list__item__link" href="#projects/2">
          03
        </a>
      </li>
      <li className="bottom-nav__list__item">
        <a className="bottom-nav__list__item__link" href="#projects/3">
          04
        </a>
      </li>
      <li className="bottom-nav__list__item">
        <a className="bottom-nav__list__item__link" href="#projects/4">
          05
        </a>
      </li>
    </ul>
  </nav>
)

export default NavBottom
