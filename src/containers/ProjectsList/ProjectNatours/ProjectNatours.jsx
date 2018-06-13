import React, {Component} from 'react';
import Icons from '../../../assets/svg/sprite.svg';
import {Link} from 'react-router-dom';
import './ProjectNatours.css';

class ProjectNatours extends Component {
    render() {
        return (
            <div className="project-full">
                <Link to="/projects" className="icon-back">
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
                            Website
                        </h3>
                        <h2>Natours</h2>
                        <p>
                            This is a website developed for tourism business. This design is given by --. 
                            Code for website is written on HTML and SASS
                        </p>

                    </div>
                    <div className="project-full__header--image-nat back-green"></div>
                </div>

                <div className="project-full__stack back-green">
                    <h3>Stack</h3>
                    <ul className="project-full__stack--list">
                        <li>HTML, </li>
                        <li>Sass </li>
                    </ul>
                </div>
                <div className="project-full__screenshot-nat"></div>

                <div className="project-full__launch">
                    <a href="" className="project-full__launch--link">
                        Launch Project
                        {/* <svg className="icon-logo">
                            <use xlinkHref={`${Icons}#icon-arrow-right`}></use>
                        </svg> */}
                    </a>
                </div>
                <div>
                    <div className="project-full__summary-shots">
                        <img
                            src={require('../../../assets/images/natours/natours.jpg')}
                            alt=""
                            className="project-full__summary-shots__image"/>
                    </div>
                    <div className="project-full__summary-shots">
                        <img
                            src={require('../../../assets/images/natours/modal.jpg')}
                            alt=""
                            className="project-full__summary-shots__image"/>
                    </div>
                    <div className="project-full__summary-shots">
                        <img
                            src={require('../../../assets/images/natours/navigation.jpg')}
                            alt=""
                            className="project-full__summary-shots__image"/>
                    </div>
                </div>

                <div className="project-full__navigation back-green">
                    <div className="project-full__navigation--section">
                        <Link to="/projects/emaily">
                            <svg className="icon-logo--prev">
                                <use xlinkHref={`${Icons}#icon-arrow-left`}></use>
                            </svg>
                            <span
                                style={{
                                left: '7rem'
                            }}>Prev</span>
                        </Link>
                    </div>
                    <div className="project-full__navigation--section">
                        <Link to="/projects/natours">
                            <svg className="icon-logo--next">
                                <use xlinkHref={`${Icons}#icon-arrow-right`}></use>
                            </svg>
                            <span
                                style={{
                                right: '7rem'
                            }}>Next</span>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectNatours;