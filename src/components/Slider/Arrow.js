import React, { Component } from 'react';
import "./Arrow.css";
import leftArrow from '../../images/leftArrow.png';
import rightArrow from '../../images/rightArrow.png';

/**
 * This component renders the arrows on the slider.
 * Arrows are only rendered if there is more than one image in
 * the slider.
 *
 * This will be used with the Slider component to display arrows
 * on either side of the slider.
 *
 * Props:
 * - direction: dictates which way the arrow faces
 * - handleClick: shifts the slider to the left or right depending
 * on the direction
 */
export default class Arrow extends Component {
    render() {
        const divStyling = this.props.direction === 'right' ? {right: "10px"} : {left: "10px"};

        return (
            <div onClick={this.props.handleClick} className="arrow" style={divStyling}>
                {this.props.direction === 'right' ? <img src={rightArrow} className="rightArrow" alt="right arrow" /> : <img src={leftArrow} className="leftArrow" alt="left arrow" />}
            </div>
        );
    }
}
