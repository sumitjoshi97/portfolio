import React from 'react'
import { Link } from 'react-router-dom'
import ProjectItem from './ProjectItem'
import { ReactComponent as ArrowRight } from '../../../assets/svg/arrow-right.svg'

export default () => (
  <div className="home__projects section">
    <div className="background-name">
      DEVEL
      <span>OPER</span>
    </div>

    <div className="home__projects__header">
      <h3 className="recents-heading">
        <span>Recent</span>
        <span>Projects</span>
      </h3>
      <Link to="/projects" className="home__projects__header__link">
        <span className="home__projects__header__link__text">
          view all projects
        </span>
        <span className="home__projects__header__link__arrow--1">
          <ArrowRight className="arrow" />
        </span>
        <span className="home__projects__header__link__arrow--2">
          <ArrowRight className="arrow" />
        </span>
      </Link>
    </div>

    <div className="home__projects--project1">
      <ProjectItem title="movie rolls" projectLink="movie-rolls" />
    </div>
    <div className="home__projects--project2">
      <ProjectItem title="react chat" projectLink="react-chat" />
    </div>
  </div>
)
