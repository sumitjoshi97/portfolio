import React, {Component} from 'react';
import NavLink from '../../../components/NavLink/NavLink';
import './LeftNav.css';

class LeftNav extends Component {
    render() {
        return (
            <div className="left-nav">
                <div className="left-nav__profile">
                   S U M I T
                </div>

                <ul className="left-nav__link-box" id="fixed-nav">
                    <NavLink link="home" anchor="home"/>
                    <NavLink link="about" anchor="about"/>
                    <NavLink link="skills" anchor="skills"/>
                    <NavLink link="recents" anchor="recents"/>
                </ul>
            </div>
        )
    }
}

export default LeftNav;