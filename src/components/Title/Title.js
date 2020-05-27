import React, { Component } from 'react';
import './Title.css';
import OverlapBoxes from '../../components/OverlapBoxes/OverlapBoxes';

export default class Title extends Component {
    constructor(props){
        super(props);

        this.state = {
            height: 0,
            width: 0
        };
    }

    componentDidMount() {
        const newHeight = this.divElement.clientHeight;
        const newWidth = this.divElement.clientWidth;
        this.setState({height: newHeight, width: newWidth});
    }

    render() {
        return (
            <div class="rel" ref={ (divElement) => { this.divElement = divElement } }>
                <p>{this.props.text}</p>
                <OverlapBoxes height={this.state.height * 0.45} width={this.state.width * 0.8} backgroundColor={this.props.color}/>
            </div>
        )
    }
}
