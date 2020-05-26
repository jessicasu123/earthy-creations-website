import React, { Component } from 'react';
import Title from '../../components/Title/Title';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div className="title">
                <Title text="OUR MISSION" color="green"/>
            </div>
        )
    }
}
