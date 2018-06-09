import React, {Component} from 'react';
import Home from './containers/Home/Home';
import Projects from './containers/Projects/Projects';
import ReallySmoothScroll from 'really-smooth-scroll';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

ReallySmoothScroll.shim();

class App extends Component {
    render() {
        return (
            <Router>
                <div className="welcome">
                    <Switch>
                        <Route exact path="/projects-all" component={Projects}/>
                        <Route path="/" component={Home}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;