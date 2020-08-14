import React, { Component } from 'react';
import './Dot.css';

export default class Dot extends Component {
    render() {
        const styling = {background: this.props.curr ? "gray" : "white"};
        return (
            <span className="sliderDot" style={styling} onClick={() => this.props.handleClick(this.props.index)}>
            </span>
        );
    }
}
