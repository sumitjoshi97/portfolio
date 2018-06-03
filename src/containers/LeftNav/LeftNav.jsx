import React, { Component } from 'react';
import './LeftNav.css';

class LeftNav extends Component {
    state = {

    }

    render() {
        return (
            <div className="left-nav">
                <div className="left-nav__profile"></div>

                <div className="left-nav__link-box">
                    <div className="left-nav__link-box--item"><div><a href="#home"></a></div></div>
                    <div className="left-nav__link-box--item"><div><a href="#about"></a></div></div>
                    <div className="left-nav__link-box--item"><div><a href="#skills"></a></div></div>
                    <div className="left-nav__link-box--item"><div><a href="#projects"></a></div></div>
                </div>
            </div>
        )
    }
}

export default LeftNav;