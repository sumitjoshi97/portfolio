import React, { Component } from 'react';
import asyncComponent from './hoc/AsyncComponent/AsyncComponent'
import { Route, Switch } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import Portfolio from './containers/Portfolio/PortFolio'

const ProjectsList = asyncComponent(() => import('./containers/ProjectsList/ProjectsList').then(module => module.default))
const ProjectEmaily = asyncComponent(() => import('./containers/ProjectsList/ProjectEmaily/ProjectEmaily').then(module => module.default))
const ProjectNatours = asyncComponent(() => import('./containers/ProjectsList/ProjectNatours/ProjectNatours').then(module => module.default))
const ProjectSmartBrain = asyncComponent(() => import('./containers/ProjectsList/ProjectSmartBrain/ProjectSmartBrain').then(module => module.default))
const ProjectBurger = asyncComponent(() => import('./containers/ProjectsList/ProjectBurger/ProjectBurger').then(module => module.default))

class App extends Component {
    render() {
        return (
            <ScrollToTop>
                <Switch>
                    <Route exact path="/projects" component={ProjectsList} />
                    <Route exact path="/projects/emaily" component={ProjectEmaily} />
                    <Route exact path="/projects/natours" component={ProjectNatours} />
                    <Route exact path="/projects/smart-brain" component={ProjectSmartBrain} />
                    <Route path='/projects/burger' component={ProjectBurger} />
                    <Route path="/" component={Portfolio} />
                </Switch>
            </ScrollToTop>
        );
    }
}

export default App;