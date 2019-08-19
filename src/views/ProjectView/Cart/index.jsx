import React from 'react'
import ProjectView from '../../ProjectView'

const Cart = () => (
  <ProjectView
    projectType="App"
    projectName="ShopCart"
    projectInfo="A shopping web-app in which user can add t-shirts to cart, filter products by size, and
                    at last purchase their order and check their previous orders."
    headerImage={require('../../../assets/images/cart/cart.svg')}
    headerStyle={['#341f97', '#5f27cd']}
    theme={'#36f'}
    stacks={['React js', 'Redux', 'SASS', 'Firebase']}
    backImage={require('../../../assets/images/cart/screenshot.png')}
    codeLink="/cart"
    projectLink="https://sumitjoshi97.github.io/cart"
    screenshots={[
      {
        image: `${require('../../../assets/images/cart/home.jpg')}`,
        value: 'Landing page showing collection of shirts',
      },
      {
        image: `${require('../../../assets/images/cart/filters.jpg')}`,
        value: 'Filters applied',
      },
      {
        image: `${require('../../../assets/images/cart/cartSummary.jpg')}`,
        value: 'Cart Summary',
      },
      {
        image: `${require('../../../assets/images/cart/signup.jpg')}`,
        value: 'Signup Page',
      },
      {
        image: `${require('../../../assets/images/cart/checkout.jpg')}`,
        value: 'Page to continue checkout',
      },
      {
        image: `${require('../../../assets/images/cart/checkout_form.jpg')}`,
        value: 'Checkout page to enter delivery information',
      },
      {
        image: `${require('../../../assets/images/cart/orders.jpg')}`,
        value: 'Page showing all orders by user',
      },
    ]}
    projectPrev="react-chat"
    projectNext="emaily"
  />
)

export default Cart
