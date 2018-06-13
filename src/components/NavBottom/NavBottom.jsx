import React from 'react';
import './NavBottom.css';

const NavBottom = () => (
    <nav className="bottom-nav">
        <ul className="bottom-nav__list">
            <li className="bottom-nav__list__item active">
                <a className="bottom-nav__list__item__link" href="#firstPage/">01</a>
            </li>
            <li className="bottom-nav__list__item">
                <a className="bottom-nav__list__item__link" href="#firstPage/1">02</a>
            </li>
            {/* <li className="bottom-nav__list__item active">
                <a className="bottom-nav__list__item__link" href="#firstPage/">03</a>
            </li>
            <li className="bottom-nav__list__item">
                <a className="bottom-nav__list__item__link" href="#firstPage/1">04</a>
            </li> */}
        </ul>
    </nav>
)

export default NavBottom;