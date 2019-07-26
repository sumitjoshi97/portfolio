import React from 'react'
import NavLink from '../NavLink'
import './styles.scss'

const SectionsNav = props => {
  const navLinks = props.navs.map(nav => (
    <NavLink key={nav.anchor} anchor={nav.anchor} link={nav.link} />
  ))

  return (
    <nav className="sections-nav">
      <ul className="sections-nav__list">{navLinks}</ul>
    </nav>
  )
}
export default SectionsNav
