import React, {Component} from 'react';
import Project from '../Project/Project';

class ProjectSmartBrain extends Component {
    componentDidMount() {
        window.moveTo(0,0);
    }
    
    render() {
        return (
            <Project 
                projectType="App"
                projectName="Smart Brain"
                projectInfo="A face recognition web app that can recognizes face from the input image. 
                            Image is always provided as link. This app uses clarifai api models to recognize faces from image."
                headerImage={require('../../../assets/images/smartBrain/smartBrain-logo.png')}
                headerStyle={['#b81eff', '#1e90ff']}
                theme={'#1e90ff'}
                stacks = {['React js', 'Node js', 'Express js', 'PostgreSQL']}
                backImage={require('../../../assets/images/smartBrain/screenshot.png')}
                linkLanuchProject="http://bit.ly/_faceRe"
                screenshots = {[`${require('../../../assets/images/smartBrain/register.jpg')}`,
                    `${require('../../../assets/images/smartBrain/signIn.jpg')}`,
                    `${require('../../../assets/images/smartBrain/input.jpg')}`,
                    `${require('../../../assets/images/smartBrain/entries.jpg')}`]}
                projectPrev='natours'
                projectNext='burger'
                />
        )
    }
}

export default ProjectSmartBrain;