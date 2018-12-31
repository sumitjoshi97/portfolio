import React from 'react'
import Project from '../Project/Project'

const ProjectBurger = () => (
  <Project
    projectType="App"
    projectName="React Chat"
    projectInfo="A live chat web-app where user can login and chat in rooms, by creating their own rooms, adding members to rooms and lastly, chat with members through messages."
    headerImage={require('../../../assets/images/reactChat/chat.svg')}
    headerStyle={['#70a1ff', '#1e90ff']}
    theme={'#1e90ff'}
    stacks={['React js', 'Pusher', 'Sass', 'Node js', 'Express js']}
    backImage={require('../../../assets/images/reactChat/screenshot.png')}
    linkLanuchProject="https://sumitjoshi97.github.io/react-slack"
    screenshots={[
      {
        image: `${require('../../../assets/images/reactChat/login.png')}`,
        value: 'Login page'
      },
      {
        image: `${require('../../../assets/images/reactChat/addRoom.gif')}`,
        value: 'Add room'
      },
      {
        image: `${require('../../../assets/images/reactChat/addMember.gif')}`,
        value: 'Add members to current room'
      },
      {
        image: `${require('../../../assets/images/reactChat/sendMessage.gif')}`,
        value: 'send messages'
      },
      {
        image: `${require('../../../assets/images/reactChat/changeTheme.gif')}`,
        value: 'change theme'
      }
    ]}
    projectPrev="cart"
    projectNext="dev-connect"
  />
)

export default ProjectBurger
