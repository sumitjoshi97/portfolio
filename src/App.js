import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import ScrollToTop from './ScrollToTop';
import Portfolio from './containers/Portfolio/PortFolio'
import Loading from './components/Loading/Loading'

// async loading of components
const ProjectsList = Loadable({ loader: () => import('./containers/ProjectsList/ProjectsList'), loading: Loading })
const ProjectCart = Loadable({ loader: () => import('./containers/ProjectsList/ProjectCart/ProjectCart'), loading: Loading })
const ProjectEmaily = Loadable({ loader: () => import('./containers/ProjectsList/ProjectEmaily/ProjectEmaily'), loading: Loading })
const ProjectNatours = Loadable({ loader: () => import('./containers/ProjectsList/ProjectNatours/ProjectNatours'), loading: Loading })
const ProjectSmartBrain = Loadable({ loader: () => import('./containers/ProjectsList/ProjectSmartBrain/ProjectSmartBrain'), loading: Loading })
const ProjectBurger = Loadable({ loader: () => import('./containers/ProjectsList/ProjectBurger/ProjectBurger'), loading: Loading })

const App = () => {
    return (
        <Router>
            <ScrollToTop>
                <Switch>
                    <Route exact path="/projects" component={ProjectsList} />
                    <Route exact path="/projects/cart" component={ProjectCart} />
                    <Route exact path="/projects/emaily" component={ProjectEmaily} />
                    <Route exact path="/projects/natours" component={ProjectNatours} />
                    <Route exact path="/projects/smart-brain" component={ProjectSmartBrain} />
                    <Route path='/projects/burger' component={ProjectBurger} />
                    <Route path="/" component={Portfolio} />
                </Switch>
            </ScrollToTop>
        </Router>
    )
}

export default App