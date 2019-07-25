import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import NavBar from '../components/NavBar'
import Home from '../views/Home'
import Projects from '../views/Projects'
import ScrollToTop from '../utils/ScrollToTop'
import Loading from '../components/Loading'
import routes from './Routes'
import LeftNav from '../components/LeftNav'

export default function App() {
  return (
    <>
      <div
        style={{
          background: '#1f2335',
          position: 'fixed',
          height: '100%',
          width: '100%',
        }}
      />
      <ScrollToTop>
        <Suspense fallback={<Loading />}>
          <Switch>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
            <>
              <NavBar />
              <LeftNav />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/" component={Home} />
            </>
          </Switch>
        </Suspense>
      </ScrollToTop>
    </>
  )
}
