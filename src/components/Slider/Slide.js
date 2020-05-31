import React, { Component } from 'react';
import "./Slide.css"

export default class Slide extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const styling = {
            backgroundImage: "url(" + this.props.content + ")",
            width: this.props.width + "vw"
        }
        var className = "slide";
        if(this.props.content.split("/")[3].split(".")[0] === "slide_1"){
            className += " slide1";
        }
        return (
            <div style={styling} className={className}></div>
        );
    }
}
