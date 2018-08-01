import React from 'react'

const Header = (props) => {

    const headerStyle = {
        backgroundImage: `linear-gradient(120deg, ${props.headerStyle[0]}, ${props.headerStyle[1]})`
    }

    const headerColor = {
        color: `${props.theme}`
    }
    
    return (
        <div className="project-full__header">
            <div className="project-full__header--text">
                <h3 className="project-full__header--text-secondary" style={headerColor} >
                    {props.projectType}
                </h3>
                <h2 className="project-full__header--text-primary" >{props.projectName}</h2>
                <p>
                    {props.projectInfo}
                </p>
            </div>
            <div className="project-full__header--image" style={headerStyle}>
                <img src={props.headerImage} alt="" />
            </div>
        </div>
    )
}

export default Header;
