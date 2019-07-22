import React from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

const ProjectsListItem = ({ id, imgUrl, title, link, theme }) => {
  return (
    <div className='slide' style={{ backgroundColor: theme }}>
      <div className='project-box'>
        <div className='bar' />
        <div className='bar' />
        <div className='bar' />
        <div className='bar' />
        <div className='bar' />
      </div>

      <div className='project-list-item'>
        <img
          className='project-list-item__thumbnail'
          id={`p${id}-thumbnail`}
          src={imgUrl}
          alt={title}
        />

        <div className='project-list-item__info' id={`p${id}-info`}>
          <div className='project-list-item__header'>
            <h3
              className='project-list-item__info__header--primary'
              style={{ color: theme }}
            >
              App
            </h3>
            <h2 className='project-list-item__info__header--secondary'>
              {title}
            </h2>
          </div>

          <Link
            to={`projects/${link}`}
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
