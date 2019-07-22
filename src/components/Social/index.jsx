import React from 'react'
import { ReactComponent as Github } from '../../assets/svg/github.svg'
import { ReactComponent as LinkedIn } from '../../assets/svg/linkedin.svg'
import { ReactComponent as Mail } from '../../assets/svg/envelope.svg'
import './styles.scss'

export default function Social() {
  return (
    <ul className="social">
      <li className="social__item">
        <a
          href="mailto:dev.sumitjoshi@gmail.com"
          className="social__item__link"
        >
          <Mail className="social__item__link__icon" />
        </a>
      </li>

      <li className="social__item">
        <a
          href="https://github.com/sumitjoshi97"
          className="social__item__link"
          target="blank"
        >
          <Github className="social__item__link__icon" />
        </a>
      </li>

      <li className="social__item">
        <a
          href="https://www.linkedin.com/in/sumitjoshi97"
          className="social__item__link"
          target="blank"
        >
          <LinkedIn className="social__item__link__icon" />
        </a>
      </li>
    </ul>
  )
}
