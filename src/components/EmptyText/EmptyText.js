import React, { Component } from 'react';
import './EmptyText.css';

/**
 * This component is responsible for displaying text to represent the
 * empty state (eg. when there are no items in the cart, when there
 * are no matching pieces on the shop page).
 */
export default class EmptyText extends Component {
    render() {
        return (
            <div>
                <div className="empty-text">{this.props.emptyText}</div>
            </div>
        )
    }
}
