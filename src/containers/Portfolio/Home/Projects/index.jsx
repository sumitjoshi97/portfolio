import React from 'react'
import { Link } from 'react-router-dom'

import ProjectItem from './ProjectItem'
import Icons from '../../../../assets/svg/sprite.svg'

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
      <ProjectItem title='movie rolls' projectLink='movie-rolls' />
    </div>
    <div className='main__projects--project2'>
      <ProjectItem title='react chat' projectLink='react-chat' />
    </div>
  </div>
)
