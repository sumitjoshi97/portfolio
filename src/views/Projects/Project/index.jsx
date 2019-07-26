import React from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

const Project = ({ id, imgUrl, title, link, theme }) => {
  return (
    <div className="project">
      <div className="project__thumbnail" id={`p${id}-thumbnail`}>
        <img className="project__thumbnail__image" src={imgUrl} alt={title} />
      </div>

      <div className="project__info" id={`p${id}-info`}>
        <div className="project__header">
          <h3
            className="project__info__header--primary"
            style={{ color: theme }}
          >
            App
          </h3>
          <h2 className="project__info__header--secondary">{title}</h2>
        </div>

        <Link to={`/projects/${link}`} className="project__info__link">
          view project
          <div className="project__info__link__bottom" />
        </Link>
      </div>
    </div>
  )
}

export default Project
