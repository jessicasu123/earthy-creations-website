import React, { Component } from 'react';
import './Title.css';
import OverlapBoxes from '../../components/OverlapBoxes/OverlapBoxes';

/**
 * This component is responsible for rendering the title of each page.
 *
 * This will be used on all pages to display the title.
 *
 * Props:
 * - text: text of the title
 * - color: color of the title's background
 */
export default class Title extends Component {
    constructor(props){
        super(props);

        this.state = {
            height: 0,
            width: 0
        };
    }

    componentDidMount() {
        this.setSize();
    }

    componentDidUpdate(prevProps){
        if(this.props.text !== prevProps.text){
            this.setSize();
        }
    }

    setSize(){
        const newHeight = this.divElement.clientHeight;
        const newWidth = this.divElement.clientWidth;
        this.setState({height: newHeight, width: newWidth});
    }

    render() {
        return (
            <div className="rel" ref={ (divElement) => { this.divElement = divElement } }>
                <p>{this.props.text}</p>
                <OverlapBoxes height={this.state.height * 0.45} width={this.state.width * 0.8} backgroundColor={this.props.color}/>
            </div>
        )
    }
}
