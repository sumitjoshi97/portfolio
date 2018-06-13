import React, {Component} from 'react'
import './Navigation.css';

export default class Navigation extends Component {

    render() {
        return (
            <div className="navigation">
                <div className="navigation__backdrop"></div>
                <div className="navigation__background"></div>
                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        <li className="navigation__list__item">
                            <a href="#home" className="navigation__link" onClick={this.props.toggle}>
                                <span>01</span>Home</a>
                        </li>
                        <li className="navigation__list__item">
                            <a href="#about" className="navigation__link" onClick={this.props.toggle}>
                                <span>02</span>About</a>
                        </li>
                        <li className="navigation__list__item">
                            <a href="#skills" className="navigation__link" onClick={this.props.toggle}>
                                <span>03</span>Skills</a>
                        </li>
                        <li className="navigation__list__item">
                            <a href="#recents" className="navigation__link" onClick={this.props.toggle}>
                                <span>04</span>Recent Projects</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}