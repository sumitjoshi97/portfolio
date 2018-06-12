import React from 'react'
import './NavLink.css';

const NavLink = props => (
    <li className="left-nav__link-box--item" data-menuanchor={props.anchor}>
        <a className="left-nav__link-box--item-link" href={`#${props.link}`}>
            <span className="active"></span>
        </a>
    </li>
)

export default NavLink;