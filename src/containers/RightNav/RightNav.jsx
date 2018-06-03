import React, { Component } from 'react';

import './RightNav.css';

class RightNav extends Component {
    state = {

    }

    render() {
        return (
            <div className="right-nav">
                <div className="nav-toggle"></div>
                <div className="social">
                    <div className="social--item"></div>
                    <div className="social--item"></div>
                    <div className="social--item"></div>
                </div>
            </div>
        )
    }
}

export default RightNav;