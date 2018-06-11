import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './ProjectFirst.css';
import Icons from '../../../assets/svg/sprite.svg';

class ProjectFirst extends Component {
    render() {
        return (
            <div className="project-full">
                <Link to="/" className="icon-back">
                    <svg
                        className="icon-back-logo"
                        style={{
                        fill: 'black'
                    }}>
                        <use xlinkHref={`${Icons}#icon-arrow-left`}></use>
                    </svg>
                </Link>
                <div className="project-full__header">
                    <div className="project-full__header--text">
                        <h3>
                            App
                        </h3>
                        <h2>Emaily</h2>
                        <p>
                            A feedback app based on MERN stack. In this app, one can create and send surveys
                            to emails. One require to signup through google oauth to access the app. This
                            app uses sendgrid API to send emails, and stripe for adding credits in account
                            for sending emails.
                        </p>

                    </div>
                    <div className="project-full__header--image back-grey">
                        <img src={require("../../../assets/images/emaily/emaily-hero.svg")} alt=""/>
                    </div>
                </div>

                <div className="project-full__stack back-red">
                    <h3>Stack</h3>
                    <ul className="project-full__stack--list">
                        <li>React js</li>
                        <li>Sass</li>
                        <li>React Router</li>
                        <li>Adobe XD</li>
                        <li>Adobe illustrator</li>
                    </ul>
                </div>
                <div className="project-full__screenshot"></div>

                <div className="project-full__svg back-red">
                    <div className="project-full__svg-container">
                        <img src="" alt=""/>
                    </div>
                </div>

                <div className="project-full__navigation">
                    <div className="project-full__navigation--section">
                        <Link to="/projects-all/emaily">
                            <svg className="icon-logo--prev">
                                <use xlinkHref={`${Icons}#icon-arrow-left`}></use>
                            </svg>
                            <span style={{left:'7rem'}}>Prev</span>
                        </Link>
                    </div>
                    <div className="project-full__navigation--section">
                        <Link to="/projects-all/natours">
                            <svg className="icon-logo--next">
                                <use xlinkHref={`${Icons}#icon-arrow-right`}></use>
                            </svg>
                            <span style={{right:'7rem'}}>Next</span>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProjectFirst;