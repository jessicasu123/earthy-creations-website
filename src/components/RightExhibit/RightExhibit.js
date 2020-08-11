import React, { Component } from 'react';
import './RightExhibit.css';
import CustomBox from '../CustomBox/CustomBox';

export default class RightExhibit extends Component {
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
            <div className="rightExhibit">
                <div className="rightExhibitLeftColumn">
                    <p className="rightExhibitArtTitle">{this.props.artwork.title}</p>
                    <p className="rightExhibitArtistName">{this.props.artwork.artistName}</p>
                    <div className="rightExhibitArtDesc" ref={ (divElement) => { this.divElement = divElement } }>
                        <CustomBox width={this.state.width * 0.55} height={this.state.height * 0.3} position="top-left" />
                        {this.props.artwork.exhibitDescription}
                    </div>
                </div>
                <div className="rightExhibitRightColumn">
                    <img src={this.props.artwork.image} alt="exhibit image" />
                </div>
            </div>
        )
    }
}
