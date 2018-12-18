import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'

import './Home.scss'
import './HomeAnimate.scss'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'

const Home = fullpageProps => (
  <ReactFullpage
    {...fullpageProps}
    className="main"
    render={() => {
      return (
        <div className="main">
          <Header />
          <About />
          <Skills />
          <Projects />
        </div>
      )
    }}
  />
)

export default Home
