import React, { Component } from 'react';
import './SliderContent.css';
import Slide from './Slide.js'

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
                        <Slide key={slide + i} content={slide} width={this.getWidth()} type={this.props.type} text={this.props.text[i]} link={this.props.link} />
                        :
                        <Slide key={slide + i} content={slide} width={this.getWidth()} type={this.props.type} text={this.props.text} link={this.props.link} />
                ))}
            </div>
        )
    }
}
