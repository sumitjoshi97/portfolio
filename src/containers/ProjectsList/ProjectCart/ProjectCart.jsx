import React from 'react'
import Project from '../Project/Project';

const ProjectCart = () => (
    <Project 
        projectType="App"
        projectName="ShopCart"
        projectInfo="A shopping web-app in which user can add t-shirts to cart, filter products by size, and
                    at last purchase their order and check their previous orders."
        headerImage={require('../../../assets/images/cart/cart.svg')}
        headerStyle={['#341f97', '#5f27cd']}
        theme={'#36f'}
        stacks = {['React js', 'Redux', 'SASS', 'Firebase']}
        backImage={require('../../../assets/images/cart/screenshot.png')}
        linkLanuchProject="https://sumitjoshi97.github.io/cart"
        screenshots = {[ `${require('../../../assets/images/cart/home.jpg')}`,
            `${require('../../../assets/images/cart/filters.jpg')}`,
            `${require('../../../assets/images/cart/cartSummary.jpg')}`,
            `${require('../../../assets/images/cart/signup.jpg')}`,
            `${require('../../../assets/images/cart/checkout.jpg')}`,
            `${require('../../../assets/images/cart/checkout_form.jpg')}`,
            `${require('../../../assets/images/cart/orders.jpg')}` ]}
        projectPrev='natours'
        projectNext='emaily'
        />
);

export default ProjectCart