import React, {Component} from 'react';
import $ from 'jquery';
import 'fullpage.js';
import LeftNav from './containers/LeftNav/LeftNav';
import RightNav from './containers/RightNav/RightNav';
import Main from './containers/Main/Main';
import NavToggle from './containers/NavToggle/NavToggle';
import Navigation from './containers/Navigation/Navigation';
import ReallySmoothScroll from 'really-smooth-scroll';
import './App.css';

ReallySmoothScroll.shim();

class App extends Component {
    state = {
        isNavActive: false
    }
    componentDidMount() {
        $(document)
            .ready(function () {
                // if (typeof $.fn.fullpage !== 'undefined') {     $.fn.fullpage
                // .destroy('all'); }
                $("#fullpage").fullpage({
                    anchors: [
                        "home", "about", "skills", "projects"
                    ],
                    menu: "#fixed-nav"
                });
            });

        console.log('did mount')
    }
    componentDidUpdate() {

        if (typeof $.fn.fullpage !== 'undefined') {     
            $.fn.fullpage.destroy('all'); 
        }
        $("#fullpage").fullpage({
            anchors: [
                "home", "about", "skills", "projects"
            ],
            menu: "#fixed-nav"
        });

    }

    componentWillUnmount() {
        console.log('unmount')
    }

    handleToggle = () => {
        this.setState({
            isNavActive: !this.state.isNavActive
        })
    }

    renderNav = () => {
        if (this.state.isNavActive) {
            return <Navigation toggle={this.handleToggle} isNavActive={this.state.isNavActive}/>
        }
        return (
            <div>
                <LeftNav/>
                <Main/>
                <RightNav/>
            </div>

        )
    }

    render() {
        return (
            <div className="welcome">
                <NavToggle toggle={this.handleToggle}/> {this.renderNav()}
            </div>
        );
    }
}

export default App;