import React from 'react'

const Header = (props) => {

    const headerStyle = {
        backgroundImage: `linear-gradient(to right bottom, ${props.headerStyle[0]}, ${props.headerStyle[1]})`
    }
    return (
        <div className="project-full__header">
            <div className="project-full__header--text">
                <h3>
                    {props.projectType}
                </h3>
                <h2>{props.projectName}</h2>
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
