import React from 'react';
import Project from '../Project/Project';

const ProjectEmaily = () => (
    <Project 
        projectType="App"
        projectName="Emaily"
        projectInfo="A feedback app based on MERN stack. In this app, one can create and send surveys
                    to emails. One require to signup through google oauth to access the app. This
                    app uses sendgrid API to send emails, and stripe for adding credits in account
                    for sending emails."
        headerImage={require('../../../assets/images/portfolio/project1.svg')}
        headerStyle={['#EA2027', '#ff0061']}
        theme={'#3c40c6'}
        stacks = {['React js', 'Redux', 'D3 js', 'Node js', 'Express js', 'MongoDB', 'Adobe XD']}
        backImage={require('../../../assets/images/emaily/emaily-full.jpg')}
        linkLanuchProject="https://emaily-serve.herokuapp.com/"
        screenshots = {[`${require('../../../assets/images/emaily/login.jpg')}`,
            `${require('../../../assets/images/emaily/logged.jpg')}`,
            `${require('../../../assets/images/emaily/surveys.jpg')}`,
            `${require('../../../assets/images/emaily/new_survey.jpg')}`,
            `${require('../../../assets/images/emaily/survey_summary.jpg')}`,
            `${require('../../../assets/images/emaily/new_surveys.jpg')}`,
            `${require('../../../assets/images/emaily/survey.jpg')}`]}
        projectPrev='cart'
        projectNext='burger'
        />
);

export default ProjectEmaily;