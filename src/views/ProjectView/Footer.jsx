import React from 'react'
import Radium from 'radium'

import { ReactComponent as Github } from '../../assets/svg/github.svg'
import { ReactComponent as LinkedIn } from '../../assets/svg/linkedin.svg'
import { ReactComponent as Mail } from '../../assets/svg/envelope.svg'

import { Link as BrowserLink } from 'react-router-dom'

const Link = Radium(BrowserLink)

const Footer = props => {
  const hoverStyle = {
    textDecoration: 'none',
    color: '#000',
    ':hover': {
      color: `${props.theme}`,
    },
  }

  return (
    <div className="footer">
      <div className="footer__name">
        <Link style={hoverStyle} key="text" to="/">
          SUMIT
        </Link>
      </div>

      <div className="footer__links">
        <a
          href="mailto:dev.sumitjoshi@gmail.com"
          className="footer__links__link"
          style={hoverStyle}
          key="link1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail className="footer__links__link__icon" />
        </a>
        <a
          href="https://github.com/sumitjoshi97"
          className="footer__links__link"
          style={hoverStyle}
          key="link2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="footer__links__link__icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/sumitjoshi97"
          className="footer__links__link"
          style={hoverStyle}
          key="link3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn className="footer__links__link__icon" />
        </a>
      </div>
    </div>
  )
}

export default Radium(Footer)
