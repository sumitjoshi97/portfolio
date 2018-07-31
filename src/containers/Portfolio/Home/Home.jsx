import React, {Component} from 'react';
import Icons from '../../../assets/svg/sprite.svg';
import {Link} from 'react-router-dom';
import './Home.css';
import './HomeAnimate.css';

import HeroBackground from './HeroBackground/HeroBackground';


class Home extends Component {
    render() {
        return (
            <div className="main" id="fullpage">
                <div className="main__home section">
                    <HeroBackground/>
                    <h1 className="heading-primary">Sumit Joshi</h1>
                </div>

                <div className="main__about section">
                    <div className="bar-left"></div>

                    <p className="main__about--text">
                        <span className="main__about--text--header red">Hi!</span>, I am
                        <span className="green">
                            &nbsp;Sumit Joshi</span>. I am a
                        <span className="red">
                            &nbsp;front-end developer / designer&nbsp;
                        </span>
                        based on Delhi, India. I have a passion for web design and love to develop web
                        applications, websites for desktop and mobile devices. I fond of
                        <span className="red">
                            &nbsp;React js&nbsp;
                        </span>
                        and love to create UI/UX with it.
                    </p>

                </div>

                <div className="main__skills section">
                    <div className="bar-left"></div>
                    
                    <h2 className="main__skills__heading">skills</h2>

                    <ul className="skills-list">
                        <li className="skills-list__item skills-list__heading green">front</li>
                        <li className="skills-list__item">html</li>
                        <li className="skills-list__item">css</li>
                        <li className="skills-list__item">sass</li>
                        <li className="skills-list__item">javascript</li>
                        <li className="skills-list__item">react.js</li>
                        <li className="skills-list__item">redux</li>
                        <li className="skills-list__item skills-list__heading red">back</li>
                        <li className="skills-list__item">node.js</li>
                        <li className="skills-list__item">express.js</li>
                        <li className="skills-list__item">npm</li>
                        <li className="skills-list__item">mongoDB</li>
                        <li className="skills-list__item">restfulAPI</li>
                        <li className="skills-list__item skills-list__heading green">softwares</li>
                        <li className="skills-list__item">adobe XD</li>
                        <li className="skills-list__item">adobe photoshop</li>
                        <li className="skills-list__item">adobe illustrator</li>
                        <li className="skills-list__item">visual code</li>
                    </ul>
                </div>

                <div className="main__projects section">
                    <div className="bar-left"></div>
                    
                    <div className="main__projects__header">
                        <h3 className="recents-heading">
                            <span>Recent</span>
                            <span>Projects</span>
                        </h3>
                        <div className="main__projects__header--link">
                            <Link  to="/projects">
                                See all projects
                                <svg className="icon-projects">
                                    <use xlinkHref={`${Icons}#icon-arrow-right`}></use>
                                </svg>
                            </Link>
                        </div>
                        
                    </div>

                    <div className="main__projects--project1">
                        <div className="main__projects__background"></div>
                        <div className="project-text">
                            <h2>App</h2>
                            <h1>Emaily</h1>
                            <Link className="project-link" to="/projects/emaily">See project</Link>
                        </div>

                    </div>
                    <div className="main__projects--project2">
                        <div className="main__projects__background"></div>
                        <div className="project-text">
                            <h2>Website</h2>
                            <h1>Natours</h1>
                            <Link className="project-link" to="/projects/natours">See Project</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;