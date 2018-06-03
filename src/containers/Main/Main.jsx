import React, {Component} from 'react';

import $ from 'jquery';
import 'fullpage.js';

import './Main.css';

class Main extends Component {

    componentDidMount() {
        $(document)
            .ready(function () {
                $("#fullpage").fullpage({
                    anchors: ["home", "about", "skills", "projects"]
                });
            });
    }

    render() {
        return (
            <div className="main" id="fullpage">
                <div className="main__home section">
                    <h1 className="heading-primary">Sumit Joshi</h1>
                </div>

                <div className="main__about section">
                    <p className="main__about--text">
                        Hi, I am
                        <span className="green">Sumit Joshi</span>. I am a
                        <span className="red">front-end developer/designer</span>
                        based on Delhi, India. I have a passion for web design and love to develop web
                        applications, websites for desktop and mobile devices. I fond of
                        <span className="red">React js</span>
                    </p>
                </div>

                <div className="main__skills section">
                    <h2 className="heading-secondary">Skills</h2>
                    <ul className="skills-list">
                        <li className="skills-list__item">HTML and CSS</li>
                        <li className="skills-list__item">Javascript</li>
                        <li className="skills-list__item">Sass</li>
                        <li className="skills-list__item">React js</li>
                        <li className="skills-list__item">Redux</li>
                        <li className="skills-list__item">Mongo DB</li>
                        <li className="skills-list__item">Express js</li>
                        <li className="skills-list__item">Node js</li>
                        <li className="skills-list__item">Jest</li>
                        <li className="skills-list__item">Adobe XD</li>
                        <li className="skills-list__item">Adobe Photoshop</li>
                        <li className="skills-list__item">Adobe Illustrator</li>
                    </ul>
                </div>

                <div className="main__projects section">
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
        );
    }
}

export default Main;