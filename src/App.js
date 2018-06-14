import React, {Component} from 'react';
import Portfolio from './containers/Portfolio/PortFolio';
import ProjectsList from './containers/ProjectsList/ProjectsList';
import ReallySmoothScroll from 'really-smooth-scroll';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ProjectEmaily from './containers/ProjectsList/ProjectEmaily/ProjectEmaily';
import ProjectNatours from './containers/ProjectsList/ProjectNatours/ProjectNatours';
ReallySmoothScroll.shim();

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/projects" component={ProjectsList}/>
                    <Route exact path="/projects/emaily" component={ProjectEmaily}/>
                    <Route exact path="/projects/natours" component={ProjectNatours}/>
                    <Route path="/" component={Portfolio}/>
                </Switch>
            </Router>
        );
    }
}

export default App;