import React, {Component} from 'react';

import './Main.css';

class Main extends Component {
    state = {};

    render() {
        return (
            <div className="main">
                <div className="main__home">
                    <h1 className="heading-primary">Sumit Joshi</h1>
                </div>

                <div className="main__about">
                    <p className="main__about--text">
                        Hi, I am Sumit Joshi. I am a front-end developer/designer based on Delhi, India.
                        I have a passion for web design and love to develop web applications, websites
                        for desktop and mobile devices. I fond of React js
                    </p>
                </div>

                <div className="main__skills">
                    <h2 className="heading-secondary">Skills</h2>
                    <ul className="skills-list">
                        <li className="skills-list-item">HTML and CSS</li>
                        <li className="skills-list-item">Javascript</li>
                        <li className="skills-list-item">Sass</li>
                        <li className="skills-list-item">React js</li>
                        <li className="skills-list-item">Redux</li>
                        <li className="skills-list-item">Mongo DB</li>
                        <li className="skills-list-item">Express js</li>
                        <li className="skills-list-item">Node js</li>
                        <li className="skills-list-item">Jest</li>
                        <li className="skills-list-item">Adobe XD</li>
                        <li className="skills-list-item">Adobe Photoshop</li>
                        <li className="skills-list-item">Adobe Illustrator</li>
                    </ul>
                </div>

                <div className="main__projects">
                    <div className="main__projects--project1">
                        <div className="project-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, libero offic {/* anchr */}
                        </div>
                    </div>
                    {/*more projects LInk*/}
                    <div className="main__projects--project2">
                        <div className="project-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, libero offic {/* anchr */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;