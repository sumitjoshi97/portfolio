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
  'html5',
  'CSS3',
  'SASS',
  'JavaScript',
  'ES6+',
  'React.js',
  'Redux',
  'D3.js',
  'jest',
  'webpack',
]

const backSkills = [
  'Node.js',
  'Express.js',
  'npm',
  'mongoDB',
  'sql',
  'mySQL',
  'postgreSQL',
  'REST',
  'graphQL',
]

const toolSkills = [
  'git',
  'github',
  'figma',
  'adobe photoshop',
  'adobe illustrator',
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
