import React from 'react'
import Icons from '../../../../assets/svg/sprite.svg'
import { Link } from 'react-router-dom'

export default () => (
  <div className='main__projects section'>
    <div className='background-name'>
      DEVEL
      <span>OPER</span>
    </div>

    <div className='main__projects__header'>
      <h3 className='recents-heading'>
        <span>Recent</span>
        <span>Projects</span>
      </h3>
      <Link to='/projects' className='main__projects__header--link'>
        view all projects
        <svg className='icon-projects'>
          <use xlinkHref={`${Icons}#icon-arrow-right`} />
        </svg>
      </Link>
    </div>

    <div className='main__projects--project1'>
      <div className='main__projects__background' />
      <div className='project-text'>
        <h1>React Chat</h1>
        <Link className='project-link' to='/projects/react-chat'>
          view project
          <div className='bottom' />
        </Link>
      </div>
    </div>
    <div className='main__projects--project2'>
      <div className='main__projects__background' />
      <div className='project-text'>
        <h1>Dev Conenct</h1>
        <Link className='project-link' to='/projects/dev-connect'>
          view Project
          <div className='bottom' />
        </Link>
      </div>
    </div>
  </div>
)
