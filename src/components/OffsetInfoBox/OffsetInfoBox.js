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
        let infoClass = "background-box-info-left";
        let backgroundClass = "background-box-left";
        if (! this.state.isLeftOffset) {
            infoClass = "background-box-info-right";
            backgroundClass = "background-box-right";
        }

        return (
            <div className="offset-info-box">
                <div className={backgroundClass}/>
                <div className={infoClass}>
                    <div className="background-box-title">{this.state.title.toUpperCase()}</div>
                    <div className="background-box-description">{this.state.info}</div>    
                </div>
            </div>
        )
    }
}
