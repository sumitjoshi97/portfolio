import React from 'react'
import Project from '../Project/Project'

const ProjectBurger = () => (
  <Project
    projectType="App"
    projectName="Burger Builder"
    projectInfo="Burger builder is a web app in which user can dynamically create their burger by adding or removing ingredients, and at last user can also purchase their burger.
                    Though user is first needed to signin to application to purchase their burger."
    headerImage={require('../../../assets/images/burger/burger.svg')}
    headerStyle={['#5f27cd', '#a55eea']}
    theme={'#f0932b'}
    stacks={['React js', 'Redux', 'Firebase']}
    backImage={require('../../../assets/images/burger/screenshot.png')}
    linkLanuchProject="https://sumitjoshi97.github.io/burger_builder"
    screenshots={[
      {
        image: `${require('../../../assets/images/burger/initial.jpg')}`,
        value: 'Landing page'
      },
      {
        image: `${require('../../../assets/images/burger/login.jpg')}`,
        value: 'Signup page'
      },
      {
        image: `${require('../../../assets/images/burger/order.jpg')}`,
        value: 'Ingredients added to burger'
      },
      {
        image: `${require('../../../assets/images/burger/modal.jpg')}`,
        value: 'Confirmation modal to continue purchase'
      },
      {
        image: `${require('../../../assets/images/burger/orderData.jpg')}`,
        value: 'Checkout page'
      },
      {
        image: `${require('../../../assets/images/burger/ordersList.jpg')}`,
        value: 'Page listing all orders by user'
      }
    ]}
    projectPrev="emaily"
    projectNext="smart-brain"
  />
)

export default ProjectBurger
