import React, { Component } from 'react';
import './Exhibition.css';
import exhibition from '../../images/exhibition.jpg';

export default class Spotlight extends Component {
    render() {
        var exhibitionStyle = {
            backgroundImage: 'url(' + exhibition + ')'
        }
        return (
            <div className="exhibition">
                <div className="exhibitionBox"></div>
                <div style={exhibitionStyle} className="exhibitionImage"></div>
                <div className="exhibitionName">
                    <p className="exhibitions">EXHIBITIONS</p>
                    <p className="exhibitionsName">Shattered Earth</p>
                </div>
            </div>
        )
    }
}
