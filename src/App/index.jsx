import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from '../components/NavBar'
import Home from '../views/Home'
import Projects from '../views/Projects'
import ScrollToTop from '../utils/ScrollToTop'
import Loading from '../components/Loading'
import routes from './Routes'
import LeftNav from '../components/LeftNav'

// main App Component
const App = () => (
  <Router>
    <ScrollToTop>
      <Suspense fallback={<Loading />}>
        <Switch>
          <>
            <NavBar />
            <LeftNav />
            <Route path="/projects" component={Projects} />
            <Route exact path="/" component={Home} />
          </>
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.component}
              // render={() => (
              //   <Suspense fallback={<Loading />}>
              //     <route.component />
              //   </Suspense>
              // )}
            />
          ))}
        </Switch>
      </Suspense>
    </ScrollToTop>
  </Router>
)

export default App
