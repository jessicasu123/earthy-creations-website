import React, { Component } from 'react';
import './CustomBox.css';

export default class CustomBox extends Component {
    render() {
        var position = this.props.position.split('-');
        var styling = {
            height: this.props.height,
            width: this.props.width,
            backgroundColor: "rgb(240, 239, 239)",
            [position[0]]: 0,
            [position[1]]: 0
        }
        return (
            <div className="customBox" style={styling}>
            </div>
        )
    }
}
