import React, { Component } from 'react'
import { ReactComponent as ArrowRight } from '../../assets/svg/arrow-right.svg'

export class Header extends Component {
  state = {
    width: '50%',
  }

  componentDidMount() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }

  onResize = () => {
    if (window.innerWidth <= 900) {
      this.setState({ width: '100%' })
    } else {
      this.setState({ width: '50%' })
    }
    this.forceUpdate()
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.width !== nextState.width) {
      return true
    } else {
      return false
    }
  }

  render() {
    // header style components
    const headerStyle = {
      backgroundImage: `linear-gradient(120deg, ${this.props.headerStyle[0]}, ${
        this.props.headerStyle[1]
      })`,
    }

    const headerColor = {
      color: `${this.props.theme}`,
    }

    return (
      <div className="project-view__header">
        <div
          className="project-view__header__image"
          style={{ ...headerStyle, width: this.state.width }}
        >
          <img src={this.props.headerImage} alt="" />
        </div>

        <div className="project-view__header__text">
          <div className="project-view__header__text__content">
            <h3
              className="project-view__header__text__content--secondary"
              style={headerColor}
            >
              {this.props.projectType}
            </h3>
            <h2 className="project-view__header__text__content--primary">
              {this.props.projectName}
            </h2>
            <p>{this.props.projectInfo}</p>
            <a
              href={this.props.projectLink}
              target="_blank"
              className="project-view__header__text__content__project-link"
              rel="noopener noreferrer"
            >
              <span className="project-view__header__text__content__project-link__text">
                View Project
              </span>
              <span className="project-view__header__text__content__project-link__arrow--1">
                <ArrowRight className="projects-arrow" />
              </span>
              <span className="project-view__header__text__content__project-link__arrow--2">
                <ArrowRight className="projects-arrow" />
              </span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
