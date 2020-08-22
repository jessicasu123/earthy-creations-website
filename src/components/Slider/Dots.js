import React, { Component } from 'react';
import './Dots.css';
import Dot from './Dot';

/**
 * This component is a container for multiple Dot components.
 *
 * This will be used with the Slider component to display Dot
 * components below the main slider content.
 *
 * Props:
 * - slides: the images for each slide
 * - currIndex: index of the image that the slider is currently displaying
 * - handleClick: function that changes the index (and therefore the image
 *   displayed) of the slider depending on which dot is clicked
 */
export default class Dots extends Component {
    render() {
        return (
            <div className="dots">
                {this.props.slides.map((slide, i) => (
                    <Dot key={slide} curr={this.props.currIndex === i} handleClick={this.props.handleClick} index={i} />
                ))}
            </div>
        );
    }
}
