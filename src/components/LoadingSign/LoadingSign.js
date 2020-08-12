import React, { Component } from 'react';
import loading from '../../images/loading.png';
import './LoadingSign.css';

export default class LoadingSign extends Component {
    render() {
        return (
            <div class="loading-container">
                <img src={loading} alt="loading" class="loading-sign"/>
            </div>
        )
    }
}
