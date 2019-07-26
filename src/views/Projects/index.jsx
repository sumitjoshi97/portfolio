import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'

import AnimateTransition from '../../components/AnimateTransition'
import SectionsNav from '../../components/SectionsNav'
import Project from './Project'

import './styles.scss'
import './animate.scss'

const navs = [
  { link: '#0', anchor: '0' },
  { link: '#1', anchor: '1' },
  { link: '#2', anchor: '2' },
  { link: '#3', anchor: '3' },
  { link: '#4', anchor: '4' },
  { link: '#5', anchor: '5' },
]

const projectsOptions = {
  anchors: ['0', '1', '2', '3', '4', '5'],
  menu: '.sections-nav',
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
}

const Projects = () => (
  <AnimateTransition>
    <SectionsNav navs={navs} />
    <ReactFullpage
      {...projectsOptions}
      render={() => {
        return (
          <div className="projects">
            {/* project - movie rolls, browse movies and shows  */}
            <div className="section">
              <Project
                imgUrl={require('../../assets/images/movierolls/movierolls-project.png')}
                id="1"
                title="Movie Rolls"
                link="movie-rolls"
                theme="#304FFE"
              />
            </div>

            {/* project - react chat app */}
            <div className="section">
              <Project
                imgUrl={require('../../assets/images/reactChat/chat-project.png')}
                id="2"
                title="React Chat"
                link="react-chat"
                theme="#2962FF"
              />
            </div>

            {/* project - react shopping cart app */}
            <div className="section">
              <Project
                imgUrl={require('../../assets/images/cart/cart-project.png')}
                id="3"
                title="ShopCart"
                link="cart"
                theme="#304FFE"
              />
            </div>

            {/* project - emaily survey, feedback app */}
            <div className="section">
              <Project
                imgUrl={require('../../assets/images/emaily/emaily-project.jpg')}
                id="4"
                title="Emaily"
                link="emaily"
                theme="#2962FF"
              />
            </div>

            {/* project - dev connect - stackoverflow like web app   */}
            <div className="section">
              <Project
                imgUrl={require('../../assets/images/devConnect/dev-project.png')}
                id="5"
                title="Dev Connect"
                link="dev-connect"
                theme="#304FFE"
              />
            </div>

            {/* project - smartbrain, recognize faces using ML */}
            <div className="section">
              <Project
                imgUrl={require('../../assets/images/smartBrain/smart-project.png')}
                id="6"
                title="SmartBrain"
                link="smart-brain"
                theme="#2962FF"
              />
            </div>
          </div>
        )
      }}
    />
  </AnimateTransition>
)

export default Projects
