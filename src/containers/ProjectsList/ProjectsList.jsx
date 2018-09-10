import React from 'react'
import NavBottom from '../../components/NavBottom/NavBottom';
import { Link } from 'react-router-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import Icons from '../../assets/svg/sprite.svg';
import $ from 'jquery'
import './ProjectsList.css';
import './ProjectListAnimate.css';

const fullpageProjectsOptions = {
    anchors: ['projects'],
    callbacks: ['afterSlideLoad']
}

const ProjectsList = () => (
    <ReactFullpage {...fullpageProjectsOptions}
        render={({ state, fullpageApi }) => {

            if (state.callback === "afterSlideLoad") {
                $(".bottom-nav__list__item.active").removeClass("active");
                $(".bottom-nav__list__item")
                    .eq(state.destination.index)
                    .addClass("active");
            }

            $('.section').on('DOMMouseScroll mousewheel', function (e) {
                if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
                    fullpageApi.moveSlideRight();
                } else {
                    fullpageApi.moveSlideLeft();
                }
            });

            return (
                <div className="projects-scroll">
                    <Link to="/" className="icon-back">
                        <svg className="icon-back-logo">
                            <use xlinkHref={`${Icons}#icon-arrow-left`}></use>
                        </svg>
                    </Link>

                    <div className="backdrop"></div>
                    <NavBottom />
                    <div className="section projects-all">

                        {/* first project */}
                        <div className="slide back-red fade">
                            <div className="project">
                                <img
                                    className="project__thumbnail"
                                    id="p1-thumbnail"
                                    src={require("../../assets/images/emaily/emaily-project.jpg")}
                                    alt="emaily project" />
                                <div className="project__info" id="p1-info">
                                    <h6>App</h6>
                                    <h4>Emaily</h4>
                                </div>
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

                        {/* second projct */}
                        <div className="slide back-violet">
                            <div className="project">
                                <img
                                    className="project__thumbnail"
                                    id="p2-thumbnail"
                                    src={require("../../assets/images/burger/burger-project.png")}
                                    alt="smartBrain project"
                                />
                                <div className="project__info" id="p2-info">
                                    <h6>App</h6>
                                    <h4>Burger Builder</h4>
                                </div>
                            </div>
                            <div className="project__link" id="p2-link">
                                <Link to="projects/burger">
                                    See Project
                                    <svg className="icon-link">
                                        <use xlinkHref={`${Icons}#icon-arrow-right`}></use>
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* third project */}
                        <div className="slide back-yellow fade">
                            <div className="project">
                                <img
                                    className="project__thumbnail"
                                    id="p3-thumbnail"
                                    src={require("../../assets/images/smartBrain/smart-project.png")}
                                    alt="smartBrain project"
                                />
                                <div className="project__info" id="p3-info">
                                    <h6>App</h6>
                                    <h4>Smart-Brain</h4>
                                </div>
                            </div>
                            <div className="project__link" id="p3-link">
                                <Link to="projects/smart-brain">
                                    See Project
                                    <svg className="icon-link">
                                        <use xlinkHref={`${Icons}#icon-arrow-right`}></use>
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* fourth project */}
                        <div className="slide back-green fade">
                            <div className="project">
                                <img
                                    className="project__thumbnail"
                                    id="p4-thumbnail"
                                    src={require("../../assets/images/natours/natours-project.png")}
                                    alt="natours project"
                                />
                                <div className="project__info" id="p4-info">
                                    <h6>Website</h6>
                                    <h4>Natours</h4>
                                </div>

                            </div>
                            <div className="project__link" id="p4-link">
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
            )
        }} />
)
// 
// componentDidMount() {
//     $(document)
//         .ready(function () {
//             $('#projects-all').fullpage({
//                 anchors: ['projects'],
//                 normalScrollElements: '.slide',

//                 afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
//                     $(".bottom-nav__list__item.active").removeClass("active");
//                     $(".bottom-nav__list__item")
//                         .eq(slideIndex)
//                         .addClass("active");
//                 }
//             });

//             $('.section').on('DOMMouseScroll mousewheel', function (e) {
//                 if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
//                     $.fn.fullpage.moveSlideRight();
//                 } else {
//                     $.fn.fullpage.moveSlideLeft();
//                 }
//             });
//         });
// }


// shouldComponentUpdate(nextProps, nextState) {
//     return nextProps.location.pathname !== this.props.location.pathname
// }

// componentWillUnmount() {
//     if (typeof $.fn.fullpage !== 'undefined') {
//         $.fn.fullpage.destroy('all');
//     }
// }


export default ProjectsList;