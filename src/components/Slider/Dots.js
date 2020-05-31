import React, { Component } from 'react';
import './Dots.css';
import Dot from './Dot'

export default class Dots extends Component {
    constructor(props){
        super(props);
    }
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
