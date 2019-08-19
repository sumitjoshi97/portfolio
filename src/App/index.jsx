import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

import NavBar from '../components/NavBar'
import ScrollToTop from '../utils/ScrollToTop'
import Loading from '../components/Loading'
import projectRoutes from './Routes'
import LeftNav from '../components/LeftNav'

const Home = lazy(() => import('../views/Home'))
const Projects = lazy(() => import('../views/Projects'))
const NotFound = lazy(() => import('../views/NotFound/‌index'))

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
            {projectRoutes.map(route => (
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
            <Route path="" component={NotFound} />
          </Switch>
        </Suspense>
      </ScrollToTop>
    </>
  )
}
