import React, {Component} from 'react'
import NavBottom from '../../components/NavBottom/NavBottom';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import 'fullpage.js';
import Icons from '../../assets/svg/sprite.svg';
import './ProjectsList.css';
import './ProjectListAnimate.css';

class ProjectsList extends Component {

    componentDidMount() {
        $(document)
            .ready(function () {
                $('#projects-all').fullpage({
                    anchors: ['projects'],
                    normalScrollElements: '.slide',

                    afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
                        $(".bottom-nav__list__item.active").removeClass("active");
                        $(".bottom-nav__list__item")
                            .eq(slideIndex)
                            .addClass("active");
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
                <NavBottom/>
                <div id="projects-all">
                    <div className="section">
                        <div className="slide back-red">
                            <div className="project">
                                <img
                                    className="project__thumbnail" id="p1-thumbnail"
                                    src={require("../../assets/images/emaily/emaily-project.jpg")}
                                    alt="emaily project"/>
                                <div className="project__info" id="p1-info">
                                    <h6>App</h6>
                                    <h4>Emaily</h4>
                                </div>
                                <div className="project__link" id="p1-link">
                                    <Link to="/projects/emaily">
                                        See Project
                                        <svg className="icon-link">
                                            <use xlinkHref={`${Icons}#icon-arrow-right`}></use>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="slide back-violet">
                            <div className="project">
                                <img
                                    className="project__thumbnail" id="p2-thumbnail"
                                    src={require("../../assets/images/natours/natour-project.jpg")}
                                    alt="natours project"/>
                                <div className="project__info" id="p2-info">
                                    <h6>Website</h6>
                                    <h4>Natours</h4>
                                </div>
                                <div className="project__link" id="p2-link">
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