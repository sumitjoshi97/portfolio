import React, {Component} from 'react';
import $ from 'jquery';
import 'fullpage.js';
import LeftNav from './containers/LeftNav/LeftNav';
import RightNav from './containers/RightNav/RightNav';
import Main from './containers/Main/Main';
import ReallySmoothScroll from 'really-smooth-scroll';
import './App.css';

ReallySmoothScroll.shim();

class App extends Component {
  componentDidMount() {
    $(document)
        .ready(function () {
            $("#fullpage").fullpage({
                anchors: ["home", "about", "skills", "projects"],
                menu: "#fixed-nav"
            });
        });
}

  render() {
    return (
      <div className="welcome">
        <LeftNav/>
        <Main/>
        <RightNav/>
      </div>
    );
  }
}

export default App;