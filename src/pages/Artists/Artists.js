import React, { Component } from 'react'
import Title from '../../components/Title/Title';
import './Artists.css';

export default class Artists extends Component {
    render() {
        return (
            <div>
                <div className="title">
                    <Title text="MEET OUR TEAM" color="orange" />
                </div>
            </div>
        )
    }
}
