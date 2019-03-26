import React from 'react'
import { Link } from 'react-router-dom'

const ProjectItem = ({ title, projectLink }) => (
  <>
    <div className='main__projects__background' />
    <div className='project-text'>
      <h1>{title}</h1>
      <Link className='project-link' to={`/projects/${projectLink}`}>
        view Project
        <div className='bottom' />
      </Link>
    </div>
  </>
)

export default ProjectItem
