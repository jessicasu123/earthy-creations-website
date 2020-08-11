import React, { Component } from 'react';
import './LeftExhibit.css';
import CustomBox from '../CustomBox/CustomBox';

export default class LeftExhibit extends Component {
    constructor(props){
        super(props);

        this.state = {
            height: 0,
            width: 0
        }
    }

    componentDidMount(){
        this.setSize();
    }

    componentDidUpdate(prevProps){
        if(this.props.artwork.exhibitDescription !== prevProps.artwork.exhibitDescription){
            this.setSize();
        }
    }

    setSize(){
        const newHeight = this.divElement.clientHeight;
        const newWidth = this.divElement.clientWidth;

        this.setState({
            height: newHeight,
            width: newWidth
        });
    }

    render() {
        return (
            <div className="leftExhibit">
                <div className="leftExhibitRightColumn">
                    <img src={this.props.artwork.image} alt="exhibit image" />
                </div>
                <div className="leftExhibitLeftColumn">
                    <p className="leftExhibitArtTitle">{this.props.artwork.title}</p>
                    <p className="leftExhibitArtistName">{this.props.artwork.artistName}</p>
                    <div className="leftExhibitArtDesc" ref={ (divElement) => { this.divElement = divElement } }>
                        <CustomBox width={this.state.width * 0.15} height={this.state.height * 0.9} position="top-left" />
                        <CustomBox width={this.state.width * 0.55} height={this.state.height * 0.3} position="bottom-right" />
                        {this.props.artwork.exhibitDescription}
                    </div>
                </div>
            </div>
        )
    }
}
