import React, { Component } from 'react';
import Portfolio from './containers/Portfolio/PortFolio';
import ProjectsList from './containers/ProjectsList/ProjectsList';
import ReallySmoothScroll from 'really-smooth-scroll';
import { Route, Switch } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import ProjectEmaily from './containers/ProjectsList/ProjectEmaily/ProjectEmaily';
import ProjectNatours from './containers/ProjectsList/ProjectNatours/ProjectNatours';
import ProjectSmartBrain from './containers/ProjectsList/ProjectSmartBrain/ProjectSmartBrain';
import ProjectBurger from './containers/ProjectsList/ProjectBurger/ProjectBurger';
ReallySmoothScroll.shim();

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