import React from 'react'
// import NavBottom from '../../components/NavBottom/NavBottom'
import ReactFullpage from '@fullpage/react-fullpage'
// import $ from 'jquery'
// import { Link } from 'react-router-dom'

// import components and css files
import Project from './Project'

// import Icons from '../../assets/svg/sprite.svg'
import './styles.scss'
import './ProjectListAnimate.scss'

const projectsOptions = {
  anchors: ['projects'],
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
}

const ProjectsList = () => (
  <div className="projects-list">
    <ReactFullpage
      {...projectsOptions}
      render={() => {
        //   if (state.callback === 'afterSlideLoad') {
        //     $('.bottom-nav__list__item.active').removeClass('active')
        //     $('.bottom-nav__list__item')
        //       .eq(state.destination.index)
        //       .addClass('active')
        //   }

        // // horizontal mouse scroll
        // $('.section').on('DOMMouseScroll mousewheel', function(e) {
        //   if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
        //     fullpageApi.moveSlideRight()
        //   } else {
        //     fullpageApi.moveSlideLeft()
        //   }
        // })

        return (
          <>
            {/* <Link to="/" className="icon-back">
              <svg className="icon-back-logo">
                <use xlinkHref={`${Icons}#icon-arrow-left`} />
              </svg>
            </Link> */}

            {/* <div className="backdrop" /> */}
            {/* <NavBottom /> */}

            <div className="section">
              {/* project - movie rolls, browse movies and shows  */}
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
  </div>
)

export default ProjectsList
