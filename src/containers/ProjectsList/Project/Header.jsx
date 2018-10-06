import React, { Component } from 'react'
import { Spring } from 'react-spring'

export class Header extends Component {
  render() {
    // header style components
    const headerStyle = {
      backgroundImage: `linear-gradient(120deg, ${this.props.headerStyle[0]}, ${
        this.props.headerStyle[1]
      })`
    }

    const headerColor = {
      color: `${this.props.theme}`
    }

    return (
      <div className="project-full__header">
        <Spring
          from={{ opacity: 0, width: '0%' }}
          to={{ opacity: 1, width: '50%' }}
          >
          {({ opacity, width }) => (
            <div
              className="project-full__header__image"
              style={{ ...headerStyle, opacity, width }}>
              <img src={this.props.headerImage} alt="" />
            </div>
          )}
        </Spring>
        <div className="project-full__header__text">
          <div className="project-full__header__text__content">
            <h3
              className="project-full__header__text__content--secondary"
              style={headerColor}>
              {this.props.projectType}
            </h3>
            <h2 className="project-full__header__text__content--primary">
              {this.props.projectName}
            </h2>
            <p>{this.props.projectInfo}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
