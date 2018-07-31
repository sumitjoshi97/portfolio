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
                projectInfo="lorem i[psum"
                headerImage={require('../../../assets/images/natours/natours-logo.svg')}
                headerStyle={['#218c74', '#2ed573']}
                theme={'#07a072'}
                stacks = {['HTML', 'SASS']}
                backImage={require('../../../assets/images/natours/natours-screenshot.jpg')}
                linkLanuchProject="/_natours"
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