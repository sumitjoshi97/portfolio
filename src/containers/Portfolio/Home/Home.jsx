import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'

import './Home.scss'
import './HomeAnimate.scss'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'

const frontSkills = [
  'html',
  'css',
  'scss',
  'javascript',
  'es6+',
  'react.js',
  'redux',
  'd3.js',
  'jest'
]

const backSkills = [
  'node.js',
  'express.js',
  'npm',
  'mongoDB',
  'mySQL',
  'postgreSQL',
  'graphQL'
]

const toolSkills = [
  'git',
  'github',
  'adobe XD',
  'adobe illustrator',
  'adobe photoshop',
  'visual studio code'
]

const Home = fullpageProps => (
  <ReactFullpage
    {...fullpageProps}
    className='main'
    render={() => {
      return (
        <div className='main'>
          <Header />
          <About />
          <Skills front={frontSkills} back={backSkills} tools={toolSkills} />
          <Projects />
        </div>
      )
    }}
  />
)

export default Home
