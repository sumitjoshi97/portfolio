import React, {Component} from 'react'
import $ from 'jquery';
import 'fullpage.js';
import LeftNav from './LeftNav/LeftNav';
import RightNav from './RightNav/RightNav';
import Main from './Home/Home';
import NavToggle from './NavToggle/NavToggle';
import Navigation from './Navigation/Navigation';
import './PortFolio.css';

class Portfolio extends Component {
    state = {
        isNavActive: false
    }
    
    componentDidMount() {
        $(document)
            .ready(function () {
                $("#fullpage").fullpage({
                    anchors: [
                        "home", "about", "skills", "projects"
                    ],
                    menu: "#fixed-nav"
                });
            });
        console.log('did mount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.isNavActive!==this.state.isNavActive
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
        console.log('update');
    }

    componentWillUnmount() {
        if (typeof $.fn.fullpage !== 'undefined') {     
            $.fn.fullpage.destroy('all'); 
        }
    }

    handleToggle = () => {
        this.setState({
            isNavActive: !this.state.isNavActive
        });
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
            <div className="home"> 
                <NavToggle toggle={this.handleToggle}/>
                {this.renderNav()}
            </div>
        )
    }
}

export default Portfolio;