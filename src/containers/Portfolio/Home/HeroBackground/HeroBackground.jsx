import React, {Component} from 'react';
import Parallax from 'parallax-js';
import './HeroBackground.css';

class HeroBackground extends Component {
    componentDidMount() {
        let scene = document.getElementById('scene');
        new Parallax(scene);
    }
    render() {
        return (
            <div id="scene">
                <div id="g1" data-depth="0.4"><img src={require('../../../../assets/images/portfolio/g1.svg')} alt=""/></div>
                <div id="g2" data-depth="0.2"><img src={require('../../../../assets/images/portfolio/g2.svg')} alt=""/></div>
                <div id="name" data-depth="0.1"><img src={require('../../../../assets/images/portfolio/name.svg')} alt=""/></div>
            </div>
        )
    }
}

export default HeroBackground;