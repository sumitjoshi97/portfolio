import React from 'react'
import Icons from '../../../assets/svg/sprite.svg'
import { Link } from 'react-router-dom'
import ReactFullpage from '@fullpage/react-fullpage'
import './Home.css';
import './HomeAnimate.css'
import HeroBackground from './HeroBackground/HeroBackground'

const Home = fullpageProps => (
    <ReactFullpage 
        {...fullpageProps} 
        className="main"
        render={() => {
            return (
                <div className="main">

                    {/* name */}
                    <div className="main__home section">
                        <HeroBackground/>
                        <h1 className="heading-primary"><span>Sumit</span> Joshi</h1>
                    </div>

                    {/* about me  */}
                    <div className="main__about section">
                        <div className="bar-left"></div>
    
                        <p className="main__about--text">
                            <span className="main__about--text--header red">Hi!</span>, I am
                            <span className="green">&nbsp;Sumit Joshi</span>. I'm a
                            <span className="red">&nbsp;front-end software developer&nbsp;</span>
                            based in Delhi, India. I am comfortable throughout the stack, but my passion lies in front-end, at the intersection of code and design.
                            <br/>
                            Being a <span className="red">self-taught developer</span>, I have a passion for code and an innate drive to learn.
                            <br/>
                            Outside of code, I like to <span className="red">&nbsp;draw</span>, <span className="red">&nbsp;sculpt</span>, play 
                            <span className="red">&nbsp;video games</span> and convert my ideas into fun video games.
                        </p>
    
                    </div>
    
                    {/* skills section */}
                    <div className="main__skills section">
                        <div className="bar-left"></div>
                        
                        <h2 className="main__skills__heading">skills</h2>
    
                        <ul className="skills-list">
                            <li className="skills-list__item skills-list__heading green">front</li>
                            <li className="skills-list__item">html</li>
                            <li className="skills-list__item">css</li>
                            <li className="skills-list__item">sass</li>
                            <li className="skills-list__item">javascript es6</li>
                            <li className="skills-list__item">jQuery</li>
                            <li className="skills-list__item">react.js</li>
                            <li className="skills-list__item">redux</li>
                            <li className="skills-list__item">d3.js</li>
                            <li className="skills-list__item skills-list__heading red">back</li>
                            <li className="skills-list__item">node.js</li>
                            <li className="skills-list__item">express.js</li>
                            <li className="skills-list__item">npm</li>
                            <li className="skills-list__item">mongoDB</li>
                            <li className="skills-list__item">mySql</li>
                            <li className="skills-list__item">postgreSql</li>
                            <li className="skills-list__item">rest</li>
                            <li className="skills-list__item skills-list__heading green">tools</li>
                            <li className="skills-list__item">git</li>
                            <li className="skills-list__item">github</li>
                            <li className="skills-list__item">adobe XD</li>
                            <li className="skills-list__item">adobe photoshop</li>
                            <li className="skills-list__item">adobe illustrator</li>
                            <li className="skills-list__item">visual code</li>
                        </ul>
                    </div>
    
                    {/* projects section */}
                    <div className="main__projects section">
                        <div className="bar-left"></div>
                        
                        <div className="main__projects__header">
                            <h3 className="recents-heading">
                                <span>Recent</span>
                                <span>Projects</span>
                            </h3>
                            <Link to="/projects" className="main__projects__header--link">
                                See all projects
                                <svg className="icon-projects">
                                    <use xlinkHref={`${Icons}#icon-arrow-right`}></use>
                                </svg>
                            </Link>                        
                        </div>
    
                        <div className="main__projects--project1">
                            <div className="main__projects__background"></div>
                            <div className="project-text">
                                <h2>App</h2>
                                <h1>Emaily</h1>
                                <Link className="project-link" to="/projects/emaily">See project</Link>
                            </div>
    
                        </div>
                        <div className="main__projects--project2">
                            <div className="main__projects__background"></div>
                            <div className="project-text">
                                <h2>App</h2>
                                <h1>Burger Builder</h1>
                                <Link className="project-link" to="/projects/burger">See Project</Link>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }}    
    />
)

export default Home;