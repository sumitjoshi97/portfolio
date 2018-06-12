import React, {Component} from 'react';
import NavLink from '../../../components/NavLink/NavLink';
import './LeftNav.css';

class LeftNav extends Component {
    render() {
        return (
            <div className="left-nav">
                <div className="left-nav__profile">
                   Sj
                </div>

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