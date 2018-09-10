import React from 'react'
import {Link} from 'react-router-dom';
import Icons from '../../../assets/svg/sprite.svg';
import Header from './Header.jsx';
import Footer from './Footer';
import Radium from 'radium';
import './Project.css';
import ReallySmoothScroll from 'really-smooth-scroll';
ReallySmoothScroll.shim();

const Project = (props) => {
    
    // list of stack used in project
    const stackList = props.stacks.map((stack, index) => {
        return <li key={index}>{stack}</li>
    })

    // screenshots list of project
    const shotsList = props.screenshots.map((shot, index) => {
        return (
            <div className="project-full__summary-shots" key={index}>
                <img
                    src={shot}
                    alt="summary screenshot"
                    className="project-full__summary-shots__image"/>
            </div>
        )
    })

    const backgroundStyle = {
        backgroundImage: `linear-gradient(to right, rgba(255,255,255, 0.6) 0%,  rgba(255,255,255, 0.6) 100%), url(${props.backImage})`   
    }

    const theme = {
        backgroundColor: `${props.theme}`
    }

    const linkStyle = {
        ':hover': {
            color: '#fff',
            backgroundColor: `${props.theme}`,
            border: `1.5px solid ${props.theme}`
        }
    }

    return (
        <div className="project-full">
            <Link to="/projects" className="icon-back">
                <svg
                    className="icon-back-logo"
                    style={{
                        fill: 'black'
                    }}>
                    <use xlinkHref={`${Icons}#icon-arrow-left`}></use>
                </svg>
            </Link>
            <Header projectType={props.projectType}
                projectName={props.projectName}
                projectInfo={props.projectInfo}
                headerImage={props.headerImage}
                headerStyle={props.headerStyle}
                theme={props.theme}
            />

            <div className="project-full__stack" style={theme}>
                <h3>Stack</h3>
                <ul className="project-full__stack--list">
                    {stackList}
                </ul>
            </div>
      
            {/* screenshot  */}
            <div className="project-full__screenshot" style={backgroundStyle} />
                    
            {/* project launch button */}
            <div className="project-full__launch">
                <a 
                    href={props.linkLanuchProject} 
                    target="blank" 
                    className="project-full__launch--link"
                    style={linkStyle}>
                    Launch Project
                </a>
            </div> 

            {/* summary shots */}
            <div>
                {shotsList}
            </div>

            {/* navigation */}
            <div className="project-full__navigation" style={theme}>
                <Link to={`/projects/${props.projectPrev}`} className="project-full__navigation--section" style={{left: '4%'}}>
                    <svg className="icon-logo--prev">
                        <use xlinkHref={`${Icons}#icon-arrow-left`}></use>
                    </svg>
                    <span
                        style={{
                        left: '6rem'
                    }}>Prev</span>
                </Link>
                <div className="center">Projects</div>

                <Link to={`/projects/${props.projectNext}`} className="project-full__navigation--section" style={{right: '4%'}}>
                    <svg className="icon-logo--next">
                        <use xlinkHref={`${Icons}#icon-arrow-right`}></use>
                    </svg>
                    <span
                        style={{
                        right: '6rem'
                    }}>Next</span>
                </Link>
            </div>
            <Footer theme={props.theme}/>
        </div>
    )
}

export default Radium(Project);