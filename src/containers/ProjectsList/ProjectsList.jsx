import React from 'react'
import NavBottom from '../../components/NavBottom/NavBottom'
import ReactFullpage from '@fullpage/react-fullpage'
import $ from 'jquery'
import { Link } from 'react-router-dom'

// import components and css files
import ProjectsListItem from './ProjectsListItem/ProjectsListItem'
import Icons from '../../assets/svg/sprite.svg'
import './ProjectsList.scss'
import './ProjectListAnimate.scss'

const fullpageProjectsOptions = {
  anchors: ['projects'],
  callbacks: ['afterSlideLoad'],
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
}

const ProjectsList = () => (
  <div className="projects-list">
    <ReactFullpage
      {...fullpageProjectsOptions}
      render={({ state, fullpageApi }) => {
        if (state.callback === 'afterSlideLoad') {
          $('.bottom-nav__list__item.active').removeClass('active')
          $('.bottom-nav__list__item')
            .eq(state.destination.index)
            .addClass('active')
        }

        // horizontal mouse scroll
        $('.section').on('DOMMouseScroll mousewheel', function(e) {
          if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
            fullpageApi.moveSlideRight()
          } else {
            fullpageApi.moveSlideLeft()
          }
        })

        return (
          <>
            <Link to="/" className="icon-back">
              <svg className="icon-back-logo">
                <use xlinkHref={`${Icons}#icon-arrow-left`} />
              </svg>
            </Link>

            <div className="backdrop" />
            <NavBottom />

            <div className="section projects-all">
              <ProjectsListItem
                imgUrl={require('../../assets/images/devConnect/dev-project.png')}
                id="1"
                projectTitle="Dev Connect"
                link="dev-connect"
                backgroundColor="#f39c12"
              />
              <ProjectsListItem
                imgUrl={require('../../assets/images/emaily/emaily-project.jpg')}
                id="2"
                projectTitle="Emaily"
                link="emaily"
                backgroundColor="#ff1e1e"
              />
              <ProjectsListItem
                imgUrl={require('../../assets/images/burger/burger-project.png')}
                id="3"
                projectTitle="Burger Builder"
                link="burger"
                backgroundColor="#5f27cd"
              />
              <ProjectsListItem
                imgUrl={require('../../assets/images/smartBrain/smart-project.png')}
                id="4"
                projectTitle="SmartBrain"
                link="smart-brain"
                backgroundColor="#f7b731"
              />
              <ProjectsListItem
                imgUrl={require('../../assets/images/cart/cart-project.png')}
                id="5"
                projectTitle="Cart"
                link="cart"
                backgroundColor="#00acc1"
              />
            </div>
          </>
        )
      }}
    />
  </div>
)

export default ProjectsList
