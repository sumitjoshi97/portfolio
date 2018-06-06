import React from 'react'

const NavToggle = props => {
    return (
        <div className="navigation">
            <input type="checkbox" id="navi-toggle" className="navigation__checkbox"/>>

            <label for="navi-toggle" className="navigation__btn">
                <span className="navigation__icon">&nbsp;</span>
            </label>
            <div className="nav-toggle"></div>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__list__item">
                        <a href="#" className="navigation__link">
                            <span>01</span>About</a>
                    </li>
                    <li className="navigation__list__item">
                        <a href="#" className="navigation__link">
                            <span>02</span>your Benefits</a>
                    </li>
                    <li className="navigation__list__item">
                        <a href="#" className="navigation__link">
                            <span>03</span>Popular Tours</a>
                    </li>
                    <li className="navigation__list__item">
                        <a href="#" className="navigation__link">
                            <span>04</span>Stories</a>
                    </li>
                    <li className="navigation__list__item">
                        <a href="#" className="navigation__link">
                            <span>05</span>Book NOw</a>
                    </li>
                </ul>
            </nav>
        </div>