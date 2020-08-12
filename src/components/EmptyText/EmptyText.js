import React, { Component } from 'react';
import './EmptyText.css';

export default class EmptyText extends Component {
    render() {
        return (
            <div>
                <div className="empty-text">{this.props.emptyText}</div>
            </div>
        )
    }
}
