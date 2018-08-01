import React, {Component} from 'react';
import Project from "../Project/Project";


class ProjectBurger extends Component {
    componentDidMount() {
        window.moveTo(0,0);
    }
    render() {
        return (
            <Project 
                projectType="App"
                projectName="Burger Builder"
                projectInfo="In this Web app user can dynamically create their burger by adding or removing ingredients, and at last user can also purchase their burger.
                            Though user is first needed to signin to application to purchase their burger."
                headerImage={require('../../../assets/images/burger/burger.svg')}
                headerStyle={['#d35400', '#e67e22']}
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
                projectPrev='smart-brain'
                projectNext='emaily'
                />
        )
    }
}

export default ProjectBurger;