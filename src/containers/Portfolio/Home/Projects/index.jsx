import React from 'react'
import Icons from '../../../../assets/svg/sprite.svg'
import { Link } from 'react-router-dom'

export default () => (
  <div className="main__projects section">
  <div className="background-name">
      DEVEL
      <span>OPER</span>
    </div>

    <div className="main__projects__header">
      <h3 className="recents-heading">
        <span>Recent</span>
        <span>Projects</span>
      </h3>
      <Link to="/projects" className="main__projects__header--link">
        See all projects
        <svg className="icon-projects">
          <use xlinkHref={`${Icons}#icon-arrow-right`} />
        </svg>
      </Link>
    </div>

    <div className="main__projects--project1">
      <div className="main__projects__background" />
      <div className="project-text">
        <h2>App</h2>
        <h1>Dev Connect</h1>
        <Link className="project-link" to="/projects/dev-connect">
          See project
        </Link>
      </div>
    </div>
    <div className="main__projects--project2">
      <div className="main__projects__background" />
      <div className="project-text">
        <h2>App</h2>
        <h1>Emaily</h1>
        <Link className="project-link" to="/projects/emaily">
          See Project
        </Link>
      </div>
    </div>
  </div>
)
