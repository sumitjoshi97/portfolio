import React from 'react'
import { Link } from 'react-router-dom'

import AnimateTransition from '../../components/AnimateTransition'
import { ReactComponent as ArrowLeft } from '../../assets/svg/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../../assets/svg/arrow-right.svg'
import Header from './Header.jsx'
import Footer from './Footer'

import './styles.scss'

export default function ProjectView(props) {
  // list of stack used in project
  const stackList = props.stacks.map((stack, index) => {
    return <li key={index}>{stack}</li>
  })

  // screenshots list of project
  const shotsList = props.screenshots.map((shot, index) => (
    <div className="project-view__summary-image" key={index}>
      <div className="project-view__summary-image__shot">
        <img
          src={shot.image}
          alt="summary screenshot"
          className="project-view__summary-image__image"
        />
        <p className="project-view__summary-image__text">{shot.value}</p>
      </div>
    </div>
  ))

  const backgroundStyle = {
    background: `linear-gradient(to right, rgba(255,255,255, 0.6) 0%,  rgba(255,255,255, 0.6) 100%), url(${
      props.backImage
    }) center center / cover`,
  }

  const theme = {
    backgroundColor: `${props.theme}`,
  }

  return (
    <AnimateTransition>
      <div className="project-view">
        <Link to="/projects" className="icon-back">
          <ArrowLeft className="arrow" />
        </Link>
        <Header
          projectType={props.projectType}
          projectName={props.projectName}
          projectInfo={props.projectInfo}
          projectLink={props.projectViewLink}
          headerImage={props.headerImage}
          headerStyle={props.headerStyle}
          theme={props.theme}
        />
        <div className="project-view__stack" style={theme}>
          <h3>Stack</h3>
          <ul className="project-view__stack--list">{stackList}</ul>
        </div>
        {/* screenshot  */}
        <div className="project-view__screenshot">
          <div
            className="project-view__screenshot__background"
            style={backgroundStyle}
          />
        </div>

        {/* summary shots */}
        <div>{shotsList}</div>

        {/* navigation */}
        <div className="project-view__navigation" style={theme}>
          {/* prev button */}
          <Link
            to={`/projects/${props.projectPrev}`}
            className="project-view__navigation__prev"
          >
            <span className="project-view__navigation__prev__arrow--1">
              <ArrowLeft className="projects-arrow" />
            </span>
            <span className="project-view__navigation__prev__arrow--2">
              <ArrowLeft className="projects-arrow" />
            </span>
            <span className="project-view__navigation__prev__text">Prev</span>
          </Link>

          <div className="project-view__navigation__header">Projects</div>

          {/* next project button */}
          <Link
            to={`/projects/${props.projectNext}`}
            className="project-view__navigation__next"
          >
            <span className="project-view__navigation__next__text">Next</span>
            <span className="project-view__navigation__next__arrow--1">
              <ArrowRight className="projects-arrow" />
            </span>
            <span className="project-view__navigation__next__arrow--2">
              <ArrowRight className="projects-arrow" />
            </span>
          </Link>
        </div>

        {/* footer */}
        <Footer theme={props.theme} />
      </div>
    </AnimateTransition>
  )
}
