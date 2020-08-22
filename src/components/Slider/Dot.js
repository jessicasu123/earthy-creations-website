import React, { Component } from 'react';
import './Dot.css';

/**
 * This component is responsible for rendering navigation dots
 * below the slider.
 *
 * This will be used with the Slider component to allow for
 * switching between slides
 *
 * Props:
 * - handleClick: function that changes the slide based on the selected dot
 * - index: index of the dot that is clicked
 */
export default class Dot extends Component {
    render() {
        const styling = {background: this.props.curr ? "gray" : "white"};
        return (
            <span className="sliderDot" style={styling} onClick={() => this.props.handleClick(this.props.index)}>
            </span>
        );
    }
}
