import React, { Component } from 'react';
import './OffsetInfoBox.css';

export default class LeftOffsetInfoBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            info: this.props.info,
            isLeftOffset: this.props.isLeftOffset,
        }
    }
    render() {
        return (
            <div className="offset-info-box">
                <div className="background-box-with-title"/>
                <div className="background-box-info-left">
                    <div className="background-box-title">{this.state.title.toUpperCase()}</div>
                    <div className="background-box-description">{this.state.info}</div>    
                </div>
            </div>
        )
    }
}
