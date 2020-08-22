import React, { Component } from 'react';
import './Spotlight.css';
import spotlight from '../../images/spotlight.png';

/**
 * This component is responsible for rendering the artist spotlight
 * section.
 *
 * This will be used on the Home page to display an artist that
 * is behing highlighted.
 *
 * Props:
 * - none
 */
export default class Spotlight extends Component {
    render() {
        var artistStyle = {
            backgroundImage: 'url(' + spotlight + ')'
        }
        return (
            <div className="spotlight">
                <div className="spotlightWrapper">
                    <div className="spotlightBox"></div>
                    <div style={artistStyle} className="spotlightArtist"></div>
                </div>
                <div className="spotlightName">
                    <p className="artistSpotlight">ARTIST SPOTLIGHT</p>
                    <p className="artistSpotlightName">Kira Upin</p>
                </div>
            </div>
        )
    }
}
