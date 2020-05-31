import React, { Component } from 'react';

export default class CenterParagraph extends Component {
    constructor(props){
        super(props);
    }

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
