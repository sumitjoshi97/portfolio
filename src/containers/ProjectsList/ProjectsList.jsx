import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import $ from 'jquery';
import 'fullpage.js';
import Icons from '../../assets/svg/sprite.svg';
import './ProjectsList.css';

class ProjectsList extends Component {

    componentDidMount() {
        $(document)
            .ready(function () {
                $('#projects-all').fullpage({normalScrollElements: '.slide', 
                
                afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
                    $('.nav__item.active').removeClass('active');
                    $('.nav__item').eq(slideIndex).addClass('active');
                  }
            });

                $('.section').on('DOMMouseScroll mousewheel', function (e) {
                    if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
                        $
                            .fn
                            .fullpage
                            .moveSlideRight();
                    } else {
                        $
                            .fn
                            .fullpage
                            .moveSlideLeft();
                    }
                });
            });
    }
    componentWillUnmount() {
        if (typeof $.fn.fullpage !== 'undefined') {
            $
                .fn
                .fullpage
                .destroy('all');
        }
    }
    render() {
        return (
            <div className="projects-scroll">
                <Link to="/" className="icon-back">
                    <svg className="icon-back-logo">
                        <use xlinkHref={`${Icons}#icon-arrow-left`}></use>
                    </svg>
                </Link>

                <div className="backdrop"></div>

                <div id="projects-all">
                    <div className="section">
                        <div className="slide back-red">
                            <div className="project">
                                <img
                                    className="project__thumbnail"
                                    src={require("../../assets/images/emaily/emaily-project.jpg")}
                                    alt="emaily project"/>
                                <div className="project__info">
                                    <h6>App</h6>
                                    <h4>Emaily</h4>
                                </div>
                                <div className="project__link">
                                    <Link to="/projects/emaily">
                                        See Project
                                        <svg className="icon-link">
                                            <use xlinkHref={`${Icons}#icon-arrow-right`}></use>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="slide back-purple">
                            <div className="project">
                                <img
                                    className="project__thumbnail"
                                    src={require("../../assets/images/natours/natour-project.jpg")}
                                    alt="natours project"/>
                                <div className="project__info">
                                    <h6>Website</h6>
                                    <h4>Natours</h4>
                                </div>
                                <div className="project__link">
                                    <Link to="projects/natours">
                                        See Project
                                        <svg className="icon-link">
                                            <use xlinkHref={`${Icons}#icon-arrow-right`}></use>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectsList;