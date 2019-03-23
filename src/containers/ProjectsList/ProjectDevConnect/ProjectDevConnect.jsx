import React from 'react'
import Project from '../Project/Project'

const ProjectDevConnect = () => (
  <Project
    projectType='App'
    projectName='Dev Connect'
    projectInfo='Stack overflow like social network app, where devs can register, create profile and, share posts to help other devs. Devs can comment on posts shared and also delete their post or comment'
    headerImage={require('../../../assets/images/devConnect/devConnect.svg')}
    headerStyle={['#1B9CFC', '#3c40c6']}
    theme={'#22a6f3'}
    stacks={[
      'React js',
      'Redux',
      'Bootstrap',
      'Node js',
      'Express js',
      'JWT',
      'MongoDB'
    ]}
    backImage={require('../../../assets/images/devConnect/screenshot.png')}
    linkLanuchProject='https://dev-connects.herokuapp.com/'
    screenshots={[
      {
        image: `${require('../../../assets/images/devConnect/landing.png')}`,
        value: 'Landing page'
      },
      {
        image: `${require('../../../assets/images/devConnect/register.png')}`,
        value: 'Register page'
      },
      {
        image: `${require('../../../assets/images/devConnect/log.png')}`,
        value: 'Login page'
      },
      {
        image: `${require('../../../assets/images/devConnect/dash_new.png')}`,
        value: 'Dashboard page for new account'
      },
      {
        image: `${require('../../../assets/images/devConnect/create_profile.png')}`,
        value: 'Create Profile page'
      },
      {
        image: `${require('../../../assets/images/devConnect/dash_fill.png')}`,
        value: 'Dashboard page after filling profile'
      },
      {
        image: `${require('../../../assets/images/devConnect/profiles.png')}`,
        value: 'list of all developers profile'
      },
      {
        image: `${require('../../../assets/images/devConnect/profile.png')}`,
        value: 'developer profile page'
      },
      {
        image: `${require('../../../assets/images/devConnect/post.png')}`,
        value: 'feeds page'
      },
      {
        image: `${require('../../../assets/images/devConnect/comments.png')}`,
        value: 'comments page'
      }
    ]}
    projectPrev='emaily'
    projectNext='smart-brain'
  />
)

export default ProjectDevConnect
