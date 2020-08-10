import React, { Component } from 'react';
import "./Arrow.css";
import leftArrow from '../../images/leftArrow.png';
import rightArrow from '../../images/rightArrow.png';

export default class Arrow extends Component {
    render() {
        const divStyling = this.props.direction === 'right' ? {right: "10px"} : {left: "10px"};

        return (
            <div onClick={this.props.handleClick} className="arrow" style={divStyling}>
                {this.props.direction === 'right' ? <img src={rightArrow} className="rightArrow" alt="right arrow" /> : <img src={leftArrow} className="leftArrow" alt="left arrow" />}
            </div>
        );
    }
}
