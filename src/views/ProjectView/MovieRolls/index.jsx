import React from 'react'
import ProjectView from '../../ProjectView'

const MovieRolls = () => (
  <ProjectView
    projectType="app"
    projectName="movie rolls"
    projectInfo="App for browsing your favorite Movies and TV shows. Here, user can search for 
                  favorite movies/tv shows, or discover movies/tv shows based on popularity, ratings, year"
    headerImage={require('../../../assets/images/movierolls/movierolls.svg')}
    headerStyle={['#1e90ff', '#304FFE']}
    theme={'#ff4e4e'}
    stacks={['React js', 'Redux', 'Sass', 'Firebase']}
    backImage={require('../../../assets/images/movierolls/screenshot.png')}
    projectViewLink="https://sumitjoshi97.github.io/movie-rolls"
    screenshots={[
      {
        image: `${require('../../../assets/images/movierolls/home.gif')}`,
        value: 'Home page',
      },
      {
        image: `${require('../../../assets/images/movierolls/lists.gif')}`,
        value: 'View movie and show lists',
      },
      {
        image: `${require('../../../assets/images/movierolls/login.gif')}`,
        value: 'Login / Signup page',
      },
      {
        image: `${require('../../../assets/images/movierolls/discover.gif')}`,
        value: 'Discover movies and tv shows',
      },
      {
        image: `${require('../../../assets/images/movierolls/search.gif')}`,
        value: 'Search movies / tv shows',
      },
      {
        image: `${require('../../../assets/images/movierolls/favorite.gif')}`,
        value: 'Add movies / tv shows to favorites or watchlist',
      },
    ]}
    projectPrev="smart-brain"
    projectNext="react-chat"
  />
)

export default MovieRolls
