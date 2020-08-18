import React, { Component } from 'react';
import loading from '../../images/loading.png';
import './LoadMoreSign.css';

/**
 * This component is responsible for displaying an image that says 
 * "Load More" and on click, will execute the action that is passed in.
 * 
 * Props: 
 * - loadItemsAction: action to be executed when component is clicked
 * 
 * NOTE: currently unused
 */
export default class LoadingSign extends Component {
    render() {
        return (
            <div class="loading-container">
                <img src={loading} alt="loading" class="loading-sign" onClick={this.props.loadItemsAction}/>
            </div>
        )
    }
}
