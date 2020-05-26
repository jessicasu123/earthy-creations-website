import React, { Component } from 'react';
import './OverlapBoxes.css';

export default class OverlapBoxes extends Component {
    constructor(props){
        super(props)
    }

    render() {
        var color = "rgb(255,255,255)";
        if(this.props.backgroundColor === "green"){
            color = "rgb(191,221,215)";
        }
        else if(this.props.backgroundColor === "yellow"){
            color = "rgb(247,247,224)";
        }
        else if(this.props.backgroundColor === "orange"){
            color = "rgb(250,219,198)";
        }
        else if(this.props.backgroundColor === "blue"){
            color = "rgb(180,206,229)";
        }
        const styling = {
            height: this.props.height,
            width: this.props.width,
            backgroundColor: color
        };
        return (
            <div style={styling} className="abs"> </div>
        )
    }
}
