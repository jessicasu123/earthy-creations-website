import React, { Component } from 'react';
import Title from '../../components/Title/Title';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div className="title">
                <Title text="ABOUT" color="green"/>
            </div>
        )
    }
}
