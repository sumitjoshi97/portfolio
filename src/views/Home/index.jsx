import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'

import AnimateTransition from '../../components/AnimateTransition'
import SectionsNav from '../../components/SectionsNav'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import RecentProjects from './RecentProjects'
import './styles.scss'
import './animate.scss'

const frontSkills = [
  'html',
  'css',
  'scss',
  'javascript',
  'es6+',
  'react.js',
  'redux',
  'd3.js',
  'jest',
]

const backSkills = [
  'node.js',
  'express.js',
  'npm',
  'mongoDB',
  'mySQL',
  'postgreSQL',
  'graphQL',
]

const toolSkills = [
  'git',
  'github',
  'adobe XD',
  'adobe illustrator',
  'adobe photoshop',
  'visual studio code',
]

const navs = [
  { link: '#home', anchor: 'home' },
  { link: '#about', anchor: 'about' },
  { link: '#skills', anchor: 'skills' },
  { link: '#recents', anchor: 'recents' },
]

const homeOptions = {
  anchors: ['home', 'about', 'skills', 'recents'],
  menu: '.sections-nav',
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
}

const Home = () => (
  <AnimateTransition>
    <SectionsNav navs={navs} />
    <ReactFullpage
      {...homeOptions}
      render={() => {
        return (
          <div className="home">
            <Header />
            <About />
            <Skills front={frontSkills} back={backSkills} tools={toolSkills} />
            <RecentProjects />
          </div>
        )
      }}
    />
  </AnimateTransition>
)

export default Home
