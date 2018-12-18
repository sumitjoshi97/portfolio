import React, { Component } from 'react'
import Icons from '../../../assets/svg/sprite.svg'
import './RightNav.scss'

class RightNav extends Component {
  render() {
    return (
      <div className="right-nav">
        <div className="social">
          <a href="mailto:dev.sumitjoshi@gmail.com" className="social--item">
            <svg className="social__icon">
              <use xlinkHref={`${Icons}#icon-mail`} />
            </svg>
          </a>

          <a
            href="https://github.com/sumitjoshi97"
            target="blank"
            className="social--item"
          >
            <svg className="social__icon">
              <use xlinkHref={`${Icons}#icon-github`} />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/sumitjoshi97"
            target="blank"
            className="social--item"
          >
            <svg className="social__icon">
              <use xlinkHref={`${Icons}#icon-linkedin`} />
            </svg>
          </a>
        </div>
      </div>
    )
  }
}

export default RightNav
