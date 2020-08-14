import React, { Component } from 'react';
import loading from '../../images/loading.png';
import './LoadMoreSign.css';

export default class LoadingSign extends Component {
    render() {
        return (
            <div class="loading-container">
                <img src={loading} alt="loading" class="loading-sign" onClick={this.props.loadItemsAction}/>
            </div>
        )
    }
}
