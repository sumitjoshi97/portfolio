import React from 'react'

const Header = props => {
    const headerStyle = {
        backgroundImage: `linear-gradient(120deg, ${props.headerStyle[0]}, ${props.headerStyle[1]})`
    }

    const headerColor = {
        color: `${props.theme}`
    }

    return (
        <div className="project-full__header">
            <div className="project-full__header__image" style={headerStyle}>
                <img src={props.headerImage} alt="" />
            </div>
            <div className="project-full__header__text">
                <div className="project-full__header__text__content">
                    <h3 className="project-full__header__text__content--secondary" style={headerColor} >
                        {props.projectType}
                    </h3>
                    <h2 className="project-full__header__text__content--primary" >{props.projectName}</h2>
                    <p>
                        {props.projectInfo}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header