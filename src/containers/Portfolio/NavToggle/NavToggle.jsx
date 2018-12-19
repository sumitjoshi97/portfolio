import React, { Component } from 'react'
import './NavToggle.scss';

class NavToggle extends Component {
  render() {
    return (
      <div className="navigation">
        <div className="nav-toggle" onClick={this.props.toggle}>
          <span></span>
        </div>
      </div>
    )
  }
}

export default NavToggle;