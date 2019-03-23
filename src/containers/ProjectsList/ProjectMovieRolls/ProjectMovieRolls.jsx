import React from 'react'
import Project from '../Project/Project'

const ProjectMovieRolls = () => (
  <Project
    projectType='app'
    projectName='movie rolls'
    projectInfo='A live chat web-app where user can login and chat in rooms, by creating their own rooms, adding members to rooms and lastly, chat with members through messages.'
    headerImage={require('../../../assets/images/movierolls/movierolls.svg')}
    headerStyle={['#1e90ff', '#304FFE']}
    theme={'#ff4e4e'}
    stacks={['React js', 'Redux', 'Sass', 'Firebase']}
    backImage={require('../../../assets/images/movierolls/screenshot.png')}
    linkLanuchProject='https://sumitjoshi97.github.io/movie-rolls'
    screenshots={[
      {
        image: `${require('../../../assets/images/movierolls/home.gif')}`,
        value: 'Home page'
      },
      {
        image: `${require('../../../assets/images/movierolls/lists.gif')}`,
        value: 'View movie and show lists'
      },
      {
        image: `${require('../../../assets/images/movierolls/login.gif')}`,
        value: 'Login / Signup page'
      },
      {
        image: `${require('../../../assets/images/movierolls/discover.gif')}`,
        value: 'Discover movies and tv shows'
      },
      {
        image: `${require('../../../assets/images/movierolls/search.gif')}`,
        value: 'Search movies / tv shows'
      },
      {
        image: `${require('../../../assets/images/movierolls/favorite.gif')}`,
        value: 'Add movies / tv shows to favorites or watchlist'
      }
    ]}
    projectPrev='smart-brain'
    projectNext='dev-connect'
  />
)

export default ProjectMovieRolls