import React from 'react'
import { Link } from 'react-router-dom'
import Icons from '../../../assets/svg/sprite.svg'
import Header from './Header.jsx'
import Footer from './Footer'
import Radium from 'radium'
import './Project.css'

const Project = props => {
  // list of stack used in project
  const stackList = props.stacks.map((stack, index) => {
    return <li key={index}>{stack}</li>
  })

  // screenshots list of project
  const shotsList = props.screenshots.map((shot, index) => (
    <div className="project-full__summary-image" key={index}>
      <div className="project-full__summary-image__shot">
        <img
          src={shot.image}
          alt="summary screenshot"
          className="project-full__summary-image__image"
        />
        <p className="project-full__summary-image__text">{shot.value}</p>
      </div>
    </div>
  ))

  const backgroundStyle = {
    backgroundImage: `linear-gradient(to right, rgba(255,255,255, 0.6) 0%,  rgba(255,255,255, 0.6) 100%), url(${
      props.backImage
    })`
  }

  const theme = {
    backgroundColor: `${props.theme}`
  }

  const linkStyle = {
    ':hover': {
      color: '#fff',
      backgroundColor: `${props.theme}`,
      border: `1.5px solid ${props.theme}`
    }
  }

  return (
    <div className="project-full">
      <Link to="/projects" className="icon-back">
        <svg
          className="icon-back-logo"
          style={{
            fill: 'black'
          }}>
          <use xlinkHref={`${Icons}#icon-arrow-left`} />
        </svg>
      </Link>
      <Header
        projectType={props.projectType}
        projectName={props.projectName}
        projectInfo={props.projectInfo}
        headerImage={props.headerImage}
        headerStyle={props.headerStyle}
        theme={props.theme}
      />

      <div className="project-full__stack" style={theme}>
        <h3>Stack</h3>
        <ul className="project-full__stack--list">{stackList}</ul>
      </div>

      {/* screenshot  */}
      <div className="project-full__screenshot" style={backgroundStyle} />

      {/* project launch button */}
      <div className="project-full__launch">
        <a
          href={props.linkLanuchProject}
          target="blank"
          className="project-full__launch--link"
          style={linkStyle}>
          Launch Project
        </a>
      </div>

      {/* summary shots */}
      <div>{shotsList}</div>

      {/* navigation */}
      <div className="project-full__navigation" style={theme}>
        {/* prev button */}
        <Link
          to={`/projects/${props.projectPrev}`}
          className="project-full__navigation__section"
          style={{ left: '4%' }}>
          <svg className="icon-logo icon-logo--prev">
            <use xlinkHref={`${Icons}#icon-arrow-left`} />
          </svg>
          <span
            style={{
              left: '6rem'
            }}>
            Prev
          </span>
        </Link>
        <div className="center">Projects</div>

        {/* next project button */}
        <Link
          to={`/projects/${props.projectNext}`}
          className="project-full__navigation__section"
          style={{ right: '4%' }}>
          <svg className="icon-logo icon-logo--next">
            <use xlinkHref={`${Icons}#icon-arrow-right`} />
          </svg>
          <span
            style={{
              right: '6rem'
            }}>
            Next
          </span>
        </Link>
      </div>

      {/* footer */}
      <Footer theme={props.theme} />
    </div>
  )
}

export default Radium(Project)
