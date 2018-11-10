import React from 'react'
import Icons from '../../../assets/svg/sprite.svg'
import { Link } from 'react-router-dom'

 const ProjectsListItem = props => {
  return (
    <div className="slide" style={{ backgroundColor: props.backgroundColor }}>
      <div className="project">
        <img
          className="project__thumbnail"
          id={`p${props.id}-thumbnail`}
          src={props.imgUrl}
          alt={props.projectTitle}
        />
        <div className="project__info" id={`p${props.id}-info`}>
          <h6>App</h6>
          <h4>{props.projectTitle}</h4>
        </div>
      </div>
      <div className="project__link" id={`p${props.id}-link`}>
        <Link to={`projects/${props.link}`}>
          See Project
          <svg className="icon-link">
            <use xlinkHref={`${Icons}#icon-arrow-right`} />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default ProjectsListItem