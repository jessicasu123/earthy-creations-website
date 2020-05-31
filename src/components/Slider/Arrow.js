import React, { Component } from 'react';
import "./Arrow.css";
import leftArrow from '../../images/leftArrow.png'
import rightArrow from '../../images/rightArrow.png'

export default class Arrow extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const divStyling = this.props.direction === 'right' ? {right: "10px"} : {left: "10px"};

        const imgStyling = {transform: "translateX(" + this.props.direction === 'left' ? '-2' : '2' + "px)"};

        return (
            <div onClick={this.props.handleClick} className="arrow" style={divStyling}>
                {this.props.direction === 'right' ? <img src={rightArrow} className="rightArrow" style={imgStyling} /> : <img src={leftArrow} className="leftArrow" style={imgStyling} />}
            </div>
        );
    }
}
