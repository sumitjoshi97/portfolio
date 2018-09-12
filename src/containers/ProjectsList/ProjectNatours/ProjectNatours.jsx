import React from 'react';
import Project from '../Project/Project';

const ProjectNatours = () => (
    <Project 
        projectType="Website"
        projectName="Natours"
        projectInfo="A single page website like a landing page for a fictional company named natours that offers tours in nature.
                    The design for this website is provided by Jonas Schmedtmann."
        headerImage={require('../../../assets/images/natours/natours-logo.png')}
        headerStyle={['#3742fa', '#1e90ff']}
        theme={'#00E676'}
        stacks = {['HTML', 'SASS']}
        backImage={require('../../../assets/images/natours/natours-screenshot.jpg')}
        linkLanuchProject="https://bit/_natours"
        screenshots = {[`${require('../../../assets/images/natours/natours.jpg')}`,
            `${require('../../../assets/images/natours/modal.jpg')}`,
            `${require('../../../assets/images/natours/navigation.jpg')}`]}
        projectPrev='smart-brain'
        projectNext='cart'
        />
)

export default ProjectNatours;