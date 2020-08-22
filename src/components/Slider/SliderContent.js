import React, { Component } from 'react';
import './SliderContent.css';
import Slide from './Slide.js';

/**
 * This component is responsible for rendering the content of a
 * Slider.
 *
 * This will be used with the Slider component to display all slides
 * in the Slider.
 *
 * Props:
 * - width: the width of all slides in the Slider combined
 * - slides: the images that will be displayed on the slider
 * - translate: number of pixels the SliderContent needs to be shifted
 *   to display the correct slie
 * - transition: amount of time each slide transition takes
 * - type: type of the Slider
 * - link: boolean indicating whether or not the Slider links to anything
 * - names: (only relevant for Slider on the Exhibits page) names of all
 *   Exhibits
 * - dates: (only relevant for Slider on the Exhibits page) dates of all
 *   Exhibits
 * - text: not currently in use for a Slider of type !== "exhibit";
 *   for Slider of type exhibit, text refers to the unique link of each Exhibit
 */
export default class SliderContent extends Component {
    getWidth() {
        return this.props.width / this.props.slides.length;
    }

    render() {
        const styling = {
            transform: "translateX(-" + this.props.translate + "vw)",
            transition: "transform ease-out " + this.props.transition + "s",
            width: this.props.width + "vw"
        };
        return (
            <div style={styling} className="sliderContent">
                {this.props.slides.map((slide, i) => (
                    this.props.type === "exhibit" ?
                        <Slide key={slide + i} content={slide} width={this.getWidth()} type={this.props.type} text={this.props.text[i]} link={this.props.link} name={this.props.names[i]} date={this.props.dates[i]} />
                        :
                        <Slide key={slide + i} content={slide} width={this.getWidth()} type={this.props.type} text={this.props.text} link={this.props.link} />
                ))}
            </div>
        )
    }
}
