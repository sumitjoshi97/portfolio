import React, { Fragment } from 'react'
import NavBottom from '../../components/NavBottom/NavBottom'
import { Link } from 'react-router-dom'
import ReactFullpage from '@fullpage/react-fullpage'
import Icons from '../../assets/svg/sprite.svg'
import $ from 'jquery'
import './ProjectsList.css'
import './ProjectListAnimate.css'

const fullpageProjectsOptions = {
  anchors: ['projects'],
  callbacks: ['afterSlideLoad']
}

const ProjectsList = () => (
  <div className="projects-list">
    <ReactFullpage
      {...fullpageProjectsOptions}
      render={({ state, fullpageApi }) => {
        // change nav color as per current slide
        if (state.callback === 'afterSlideLoad') {
          $('.bottom-nav__list__item.active').removeClass('active')
          $('.bottom-nav__list__item')
            .eq(state.destination.index)
            .addClass('active')
        }

        // mouse scroll feature
        $('.section').on('DOMMouseScroll mousewheel', function(e) {
          if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
            fullpageApi.moveSlideRight()
          } else {
            fullpageApi.moveSlideLeft()
          }
        })

        return (
          <Fragment>
            <Link to="/" className="icon-back">
              <svg className="icon-back-logo">
                <use xlinkHref={`${Icons}#icon-arrow-left`} />
              </svg>
            </Link>

            <div className="backdrop" />
            <NavBottom />
            <div className="section projects-all">
              {/* first project */}
              <div className="slide back-orch">
                <div className="project">
                  <img
                    className="project__thumbnail"
                    id="p1-thumbnail"
                    src={require('../../assets/images/devConnect/dev-project.png')}
                    alt="dev Connect project"
                  />
                  <div className="project__info" id="p1-info">
                    <h6>App</h6>
                    <h4>DevConnect</h4>
                  </div>
                </div>
                <div className="project__link" id="p1-link">
                  <Link to="/projects/dev-connect">
                    See Project
                    <svg className="icon-link">
                      <use xlinkHref={`${Icons}#icon-arrow-right`} />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* second project */}
              <div className="slide back-red">
                <div className="project">
                  <img
                    className="project__thumbnail"
                    id="p2-thumbnail"
                    src={require('../../assets/images/emaily/emaily-project.jpg')}
                    alt="emaily project"
                  />
                  <div className="project__info" id="p2-info">
                    <h6>App</h6>
                    <h4>Emaily</h4>
                  </div>
                </div>
                <div className="project__link" id="p2-link">
                  <Link to="/projects/emaily">
                    See Project
                    <svg className="icon-link">
                      <use xlinkHref={`${Icons}#icon-arrow-right`} />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* third projct */}
              <div className="slide back-violet">
                <div className="project">
                  <img
                    className="project__thumbnail"
                    id="p3-thumbnail"
                    src={require('../../assets/images/burger/burger-project.png')}
                    alt="smartBrain project"
                  />
                  <div className="project__info" id="p3-info">
                    <h6>App</h6>
                    <h4>Burger Builder</h4>
                  </div>
                </div>
                <div className="project__link" id="p3-link">
                  <Link to="projects/burger">
                    See Project
                    <svg className="icon-link">
                      <use xlinkHref={`${Icons}#icon-arrow-right`} />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* fourth project */}
              <div className="slide back-yellow">
                <div className="project">
                  <img
                    className="project__thumbnail"
                    id="p4-thumbnail"
                    src={require('../../assets/images/smartBrain/smart-project.png')}
                    alt="smartBrain project"
                  />
                  <div className="project__info" id="p4-info">
                    <h6>App</h6>
                    <h4>Smart-Brain</h4>
                  </div>
                </div>
                <div className="project__link" id="p4-link">
                  <Link to="projects/smart-brain">
                    See Project
                    <svg className="icon-link">
                      <use xlinkHref={`${Icons}#icon-arrow-right`} />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* fifth project */}
              <div className="slide back-orange">
                <div className="project">
                  <img
                    className="project__thumbnail"
                    id="p5-thumbnail"
                    src={require('../../assets/images/cart/cart-project.png')}
                    alt="natours project"
                  />
                  <div className="project__info" id="p5-info">
                    <h6>App</h6>
                    <h4>ShopCart</h4>
                  </div>
                </div>
                <div className="project__link" id="p5-link">
                  <Link to="projects/cart">
                    See Project
                    <svg className="icon-link">
                      <use xlinkHref={`${Icons}#icon-arrow-right`} />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </Fragment>
        )
      }}
    />
  </div>
)

export default ProjectsList
