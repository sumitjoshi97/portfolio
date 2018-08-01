import React, {Component} from 'react';
import Project from '../Project/Project';

class ProjectEmaily extends Component {
    render() {
        return (
            <Project 
                projectType="App"
                projectName="Emaily"
                projectInfo="A feedback app based on MERN stack. In this app, one can create and send surveys
                            to emails. One require to signup through google oauth to access the app. This
                            app uses sendgrid API to send emails, and stripe for adding credits in account
                            for sending emails."
                headerImage={require('../../../assets/images/emaily/emaily-logo.svg')}
                headerStyle={['#EA2027', '#ff0061']}
                theme={'#3c40c6'}
                stacks = {['React js', 'Redux', 'SASS', 'Node js', 'Express js', 'MongoDB', 'Adobe XD']}
                backImage={require('../../../assets/images/emaily/emaily-full.jpg')}
                linkLanuchProject="https://bit.ly/_emaily"
                screenshots = {[`${require('../../../assets/images/emaily/home_logged.jpg')}`,
                    `${require('../../../assets/images/emaily/surveys_logged_hover.jpg')}`,
                    `${require('../../../assets/images/emaily/new_survey.jpg')}`,
                    `${require('../../../assets/images/emaily/survey_summary.jpg')}`]}
                projectPrev='burger'
                projectNext='natours'
                />
        )
    }
}
export default ProjectEmaily;