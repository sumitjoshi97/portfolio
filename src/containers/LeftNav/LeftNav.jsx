import React, {Component} from 'react';
import NavLink from './NavLink/NavLink';
import './LeftNav.css';

class LeftNav extends Component {
    state = {}

    render() {
        return (
            <div className="left-nav">
                <div className="left-nav__profile"></div>

                <ul className="left-nav__link-box" id="fixed-nav">
                    <NavLink link="home" anchor="home"/>
                    <NavLink link="about" anchor="about"/>
                    <NavLink link="skills" anchor="skills"/>
                    <NavLink link="projects" anchor="projects"/>
                </ul>
            </div>
        )
    }
}

export default LeftNav;