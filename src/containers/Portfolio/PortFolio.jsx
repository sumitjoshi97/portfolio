import React, { Component } from 'react'
import LeftNav from './LeftNav/LeftNav';
import RightNav from './RightNav/RightNav';
import Home from './Home/Home';
import NavToggle from './NavToggle/NavToggle';
import Navigation from './Navigation/Navigation';
import './PortFolio.css';

const fullpageOptions = {
    anchors: ["home", "about", "skills", "recents"],
    menu: "#fixed-nav"
}

class Portfolio extends Component {
    state = {
        isNavActive: false
    }

    handleToggle = () => {
        this.setState({
            isNavActive: !this.state.isNavActive
        });
    }

    renderNav = () => {
        if (this.state.isNavActive) {
            return <Navigation toggle={this.handleToggle} isNavActive={this.state.isNavActive} />
        }
        return (
            <div className="portfolio">
                <LeftNav />
                <Home {...fullpageOptions} />
                <RightNav />
            </div>
        )
    }

    render() {
        return (
            <div className="home ">
                <NavToggle toggle={this.handleToggle} />
                {this.renderNav()}
            </div>
        )
    }
}

export default Portfolio;