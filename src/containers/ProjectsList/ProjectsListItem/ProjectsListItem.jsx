import React from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

const ProjectsListItem = props => {
  return (
    <div className='slide' style={{ backgroundColor: props.backgroundColor }}>
      <div className='project-list-item'>
        <img
          className='project-list-item__thumbnail'
          id={`p${props.id}-thumbnail`}
          src={props.imgUrl}
          alt={props.projectTitle}
        />

        <div className='project-list-item__info' id={`p${props.id}-info`}>
          <div className='project-list-item__header'>
            <h3
              className='project-list-item__info__header--primary'
              style={{ color: props.backgroundColor }}
            >
              App
            </h3>
            <h2 className='project-list-item__info__header--secondary'>
              {props.projectTitle}
            </h2>
          </div>

          <Link
            to={`projects/${props.link}`}
            className='project-list-item__info__link'
          >
            view project
            <div className='project-list-item__info__link__bottom' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectsListItem
