import React, { Component } from 'react';
import './Spotlight.css';
import spotlight from '../../images/spotlight.png';

export default class Spotlight extends Component {
    render() {
        var artistStyle = {
            backgroundImage: 'url(' + spotlight + ')'
        }
        return (
            <div className="spotlight">
                <div className="spotlightBox"></div>
                <div style={artistStyle} className="spotlightArtist"></div>
                <div className="spotlightName">
                    <p className="artistSpotlight">ARTIST SPOTLIGHT</p>
                    <p className="artistSpotlightName">Kira Upin</p>
                </div>
            </div>
        )
    }
}
