import React, { Component } from 'react';

// import LeftNav from './containers/LeftNav/LeftNav';
// import RightNav from './containers/RightNav/RightNav';
import Main from './containers/Main/Main';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="welcome">
        {/* <LeftNav/> */}
        <Main/>
        {/* <RightNav/> */}
      </div>
    );
  }
}

export default App;