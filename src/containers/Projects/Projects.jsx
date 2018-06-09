import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import $ from 'jquery';
import 'fullpage.js';
import Icons from '../../assets/svg/sprite.svg';
import './Projects.css';

export default class Projects extends Component {
    componentDidMount() {
        $(document)
            .ready(function () {
                $('#projects-all').fullpage({
                    // slidesNavigation: true, 
                    // normalScrollElements: '.slide'
                });

                $('.section').on('DOMMouseScroll mousewheel', function (e) {
                    if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) { //alternative options for wheelData: wheelDeltaX & wheelDeltaY
                      //scroll down
                      $.fn.fullpage.moveSlideRight();
                    } else {
                      //scroll up
                      $.fn.fullpage.moveSlideLeft();
                    }
                    //prevent page fom scrolling
                    // return false;
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
        console.log('unount');
        
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
                                <div className="project__thumbnail"></div>
                                <div className="project__info"></div>
                                <div className="project__link">
                                    <a href="#">
                                        See Project
                                        <svg className="icon-link">
                                            <use xlinkHref={`${Icons}#icon-arrow-right`}></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="slide back-yellow">
                            <div className="project">
                                <div className="project__thumbnail"></div>
                                <div className="project__info"></div>
                                <div className="project__link">
                                    <a href="#">
                                        See Project 2
                                        <svg className="icon-link">
                                            <use xlinkHref={`${Icons}#icon-arrow-right`}></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
