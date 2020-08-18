import React, { Component } from 'react';
import './OffsetInfoBox.css';

/**
 * Represents a box that is offset to the left or right behind text
 * that stretches the width of the container.
 * 
 * Used on the Artwork Details page to display information about the 
 * piece and the artist. 
 * 
 * Props: 
 * - title: the title of the information (eg. "About the Piece")
 * - info: the information to be displayed
 * - isLeftOffset: whether the box should appear to the right or left of the information
 */
export default class OffsetInfoBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            info: this.props.info,
            isLeftOffset: this.props.isLeftOffset,
        }
    }
    render() {
        let infoClass = "background-box-info-left";
        let backgroundClass = "background-box-left";
        if (! this.state.isLeftOffset) {
            infoClass = "background-box-info-right";
            backgroundClass = "background-box-right";
        }

        return (
            <div className="offset-info-box">
                <div className={backgroundClass}/>
                <div className={infoClass}>
                    <div className="background-box-title">{this.state.title.toUpperCase()}</div>
                    <div className="background-box-description">{this.state.info}</div>    
                </div>
            </div>
        )
    }
}
