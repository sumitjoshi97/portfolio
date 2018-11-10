import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import components and files
import ScrollToTop from './ScrollToTop'
import Loading from './components/Loading/Loading'
import routes from './Routes'

// main App Component
const App = () => (
  <Router>
    <ScrollToTop>
      <Switch>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            exact
            render={() => (
              <Suspense fallback={<Loading />}>
                <route.component />
              </Suspense>
            )}
          />
        ))}
      </Switch>
    </ScrollToTop>
  </Router>
)

export default App
