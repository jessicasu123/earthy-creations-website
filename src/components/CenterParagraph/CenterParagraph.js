import React, { Component } from 'react';

/**
 * This component just creates a block of text that is centered,
 * in the screen.
 *
 * This is being used on the home page but can be
 * used anywhere to center text.
 *
 * Props:
 * - text: the text that needs to be centered
 */
export default class CenterParagraph extends Component {
    render(){
        const styling = {
            fontSize: this.props.fontSize + "px",
            color: (this.props.color === "gray") ? "#969696" : "#000",
            display: "inline-block",
            textAlign: "center"
        }
        return (
            <p style={styling}>
                {this.props.text}
            </p>
        );
    }
}
