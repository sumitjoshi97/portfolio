import React, {Component} from 'react';
import Icons from '../../../assets/svg/sprite.svg';
import {Link} from 'react-router-dom';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="main" id="fullpage">
                <div className="main__home section">
                    <h1 className="heading-primary">Sumit Joshi</h1>
                </div>

                <div className="main__about section">
                    <p className="main__about--text">
                        Hi, I am &nbsp;
                        <span className="green">
                            Sumit Joshi</span>. I am a &nbsp;
                        <span className="red">
                            front-end developer/designer
                        </span>
                        &nbsp; based on Delhi, India. I have a passion for web design and love to
                        develop web applications, websites for desktop and mobile devices. I fond of
                        &nbsp;
                        <span className="red">
                            React js
                        </span>
                    </p>
                </div>

                <div className="main__skills section">
                    <h2 className="heading-secondary">Skills</h2>
                    <ul className="skills-list">
                        <li className="skills-list__item">HTML and CSS</li>
                        <li className="skills-list__item">Javascript</li>
                        <li className="skills-list__item">Sass</li>
                        <li className="skills-list__item">React js</li>
                        <li className="skills-list__item">Redux</li>
                        <li className="skills-list__item">Mongo DB</li>
                        <li className="skills-list__item">Express js</li>
                        <li className="skills-list__item">Node js</li>
                        <li className="skills-list__item">Jest</li>
                        <li className="skills-list__item">Adobe XD</li>
                        <li className="skills-list__item">Adobe Photoshop</li>
                        <li className="skills-list__item">Adobe Illustrator</li>
                    </ul>
                </div>

                <div className="main__projects section">
                    <div className="main__projects__header">
                        <h3 className="heading-tertiary">
                            <span>Recent</span>
                            <span>Projects</span>
                        </h3>
                        <Link className="main__projects__header--link-all" to="/projects-all">
                            See all projects
                            <svg className="icon-projects">
                                <use xlinkHref={`${Icons}#icon-arrow-right`}></use>
                            </svg>
                        </Link>
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