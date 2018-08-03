import React from 'react';
import Project from "../Project/Project";

const ProjectBurger = () => (
            <Project 
                projectType="App"
                projectName="Burger Builder"
                projectInfo="In this Web app user can dynamically create their burger by adding or removing ingredients, and at last user can also purchase their burger.
                            Though user is first needed to signin to application to purchase their burger."
                headerImage={require('../../../assets/images/burger/burger.svg')}
                headerStyle={['#5f27cd', '#a55eea']}
                theme={'#f0932b'}
                stacks = {['React js', 'Redux', 'Firebase']}
                backImage={require('../../../assets/images/burger/screenshot.png')}
                linkLanuchProject="https://bit.ly/_Burger"
                screenshots = {[`${require('../../../assets/images/burger/initial.jpg')}`,
                    `${require('../../../assets/images/burger/login.jpg')}`,
                    `${require('../../../assets/images/burger/order.jpg')}`,
                    `${require('../../../assets/images/burger/modal.jpg')}`,
                    `${require('../../../assets/images/burger/orderData.jpg')}`,
                    `${require('../../../assets/images/burger/ordersList.jpg')}`
                    ]}
                projectPrev='emaily'
                projectNext='smart-brain'
                />
)

export default ProjectBurger;