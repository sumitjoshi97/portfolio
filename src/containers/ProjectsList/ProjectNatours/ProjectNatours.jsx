import React, {Component} from 'react';
import Project from '../Project/Project';

class ProjectNatours extends Component {
    componentDidMount() {
        window.moveTo(0,0);
    }
    render() {
        return (
            <Project 
                projectType="Website"
                projectName="Natours"
                projectInfo="A single page website like a landing page for a fictional company named natours that offers tours in nature. 
                            The design for this website is provided by Jonas Schmedtmann."
                headerImage={require('../../../assets/images/natours/natours-logo.png')}
                headerStyle={['#2ed573', '#03d843']}
                theme={'#3fcf87'}
                stacks = {['HTML', 'SASS']}
                backImage={require('../../../assets/images/natours/natours-screenshot.jpg')}
                linkLanuchProject="https://bit/_natours"
                screenshots = {[`${require('../../../assets/images/natours/natours.jpg')}`,
                    `${require('../../../assets/images/natours/modal.jpg')}`,
                    `${require('../../../assets/images/natours/navigation.jpg')}`]}
                projectPrev='emaily'
                projectNext='smart-brain'
                />
        )
    }
}

export default ProjectNatours;