import React from 'react'
import ProjectView from '../../ProjectView'

const SmartBrain = () => (
  <ProjectView
    projectType="App"
    projectName="Smart Brain"
    projectInfo="A face recognition web app that recognizes face from the input image. 
                    Image is always provided as link. This app uses clarifai api to recognize faces from image."
    headerImage={require('../../../assets/images/smartBrain/smartBrain-logo.png')}
    headerStyle={['#b81eff', '#1e90ff']}
    theme={'#1e90ff'}
    stacks={['React js', 'Node js', 'Express js', 'PostgreSQL']}
    backImage={require('../../../assets/images/smartBrain/screenshot.png')}
    codeLink="/face_recognition"
    projectLink="https://sumitjoshi97.github.io/face_recognition"
    screenshots={[
      {
        image: `${require('../../../assets/images/smartBrain/register.jpg')}`,
        value: 'Register Page',
      },
      {
        image: `${require('../../../assets/images/smartBrain/signIn.jpg')}`,
        value: 'Login page',
      },
      {
        image: `${require('../../../assets/images/smartBrain/input.jpg')}`,
        value: 'Landing page',
      },
      {
        image: `${require('../../../assets/images/smartBrain/entries.jpg')}`,
        value:
          'Entry count increased and Image recognized shown by blue box around face',
      },
    ]}
    projectPrev="dev-connect"
    projectNext="movie-rolls"
  />
)

export default SmartBrain
