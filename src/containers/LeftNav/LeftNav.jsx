import React, { Component } from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll'
import './LeftNav.css';


class LeftNav extends Component {
    state = {

    }

    render() {
        return (
            <div className="left-nav">
                <div className="left-nav__profile"></div>

                <ul className="left-nav__link-box">
                    <li className="left-nav__link-box--item"><AnchorLink className="left-nav__link-box--item-link" href="#home"><span></span></AnchorLink></li>
                    <li className="left-nav__link-box--item"><AnchorLink className="left-nav__link-box--item-link" href="#about"><span></span></AnchorLink></li>
                    <li className="left-nav__link-box--item"><AnchorLink className="left-nav__link-box--item-link" href="#skills"><span></span></AnchorLink></li>
                    <li className="left-nav__link-box--item"><AnchorLink className="left-nav__link-box--item-link" href="#projects"><span></span></AnchorLink></li>
                </ul>
            </div>
        )
    }
}

export default LeftNav;