import React from 'react'
import Icons from '../../../assets/svg/sprite.svg';
import {Link as RouterLink} from 'react-router-dom';
import Radium from 'radium';

const Link = Radium(RouterLink);

const Footer = (props) => {
    const style = {
        hoverStyle : {
            textDecoration: 'none',
            color: '#000',
            ':hover': {
                color: `${props.theme}`
            }
        }
    }

    return (
        <div className="footer">
            <div className="footer__name"><Link style={style.hoverStyle} key="text" to="/">SUMIT</Link></div>

            <div className="footer__links">
                <a 
                    href="mailto:dev.sumitjoshi@gmail.com" 
                    className="footer__links__link" 
                    style={style.hoverStyle}
                    key="link1">
                    <svg className="footer__links__link__icon">
                        <use xlinkHref={`${Icons}#icon-mail`}></use>
                    </svg>
                </a>
                <a
                    href="https://github.com/sumitjoshi97"
                    className="footer__links__link"
                    style={style.hoverStyle}
                    target="blank"
                    key="link2">
                    <svg className="footer__links__link__icon">
                        <use xlinkHref={`${Icons}#icon-github`}></use>
                    </svg>
                </a>
                <a
                    href="https://www.linkedin.com/in/sumitjoshi97"
                    className="footer__links__link"
                    style={style.hoverStyle}
                    key="link3"
                    target="blank">
                    <svg className="footer__links__link__icon">
                        <use xlinkHref={`${Icons}#icon-linkedin`}></use>
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default Radium(Footer);
