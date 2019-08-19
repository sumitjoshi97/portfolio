import React from 'react'
import { ReactComponent as ArrowRight } from '../../assets/svg/arrow-right.svg'

export default function Header(props) {
  const {
    projectName,
    projectInfo,
    codeLink,
    projectLink,
    headerImage,
    headerStyle,
    theme,
  } = props

  const backgroundStyle = {
    backgroundImage: `linear-gradient(120deg, 
      ${headerStyle[0]}, ${headerStyle[1]})`,
  }

  const projectCodeLink = `https://github.com/sumitjoshi97/${codeLink}` // link for github

  return (
    <div className="project-view__header">
      <div className="project-view__header__image" style={backgroundStyle}>
        <img src={headerImage} alt="project header" />
      </div>

      <div className="project-view__header__text">
        <div className="project-view__header__text__content">
          <h3
            className="project-view__header__text__content--secondary"
            style={{ color: `${theme}` }}
          >
            App
          </h3>
          <h2 className="project-view__header__text__content--primary">
            {projectName}
          </h2>
          <p>{projectInfo}</p>
          <div className="project-view__header__text__content__cta">
            <a
              href={projectCodeLink}
              target="_blank"
              className="project-view__header__text__content__cta__code-link"
              rel="noopener noreferrer"
            >
              <span className="project-view__header__text__content__cta__code-link__text">
                view code
              </span>
              <span className="project-view__header__text__content__cta__code-link__arrow--1">
                <ArrowRight className="projects-arrow" />
              </span>
              <span className="project-view__header__text__content__cta__code-link__arrow--2">
                <ArrowRight className="projects-arrow" />
              </span>
            </a>
            <a
              href={projectLink}
              target="_blank"
              className="project-view__header__text__content__cta__project-link"
              rel="noopener noreferrer"
            >
              <span className="project-view__header__text__content__cta__project-link__text">
                view project
              </span>
              <span className="project-view__header__text__content__cta__project-link__arrow--1">
                <ArrowRight className="projects-arrow" />
              </span>
              <span className="project-view__header__text__content__cta__project-link__arrow--2">
                <ArrowRight className="projects-arrow" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
