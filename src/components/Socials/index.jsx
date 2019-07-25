import React from 'react'
import { ReactComponent as Github } from '../../assets/svg/github.svg'
import { ReactComponent as LinkedIn } from '../../assets/svg/linkedin.svg'
import { ReactComponent as Mail } from '../../assets/svg/envelope.svg'
import './styles.scss'

export default function Socials() {
  return (
    <ul className="socials">
      <li className="socials__item">
        <a
          href="mailto:dev.sumitjoshi@gmail.com"
          className="socials__item__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail className="socials__item__link__icon" />
        </a>
      </li>

      <li className="socials__item">
        <a
          href="https://github.com/sumitjoshi97"
          className="socials__item__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="socials__item__link__icon" />
        </a>
      </li>

      <li className="socials__item">
        <a
          href="https://www.linkedin.com/in/sumitjoshi97"
          className="socials__item__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn className="socials__item__link__icon" />
        </a>
      </li>
    </ul>
  )
}
