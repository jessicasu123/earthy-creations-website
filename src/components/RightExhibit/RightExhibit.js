import React, { Component } from 'react';
import './RightExhibit.css';
import CustomBox from '../CustomBox/CustomBox';
import {Link} from 'react-router-dom';

/**
 * This component is responsible for rendering a single Artwork,
 * including the image, title, artist name, and description.
 * This particular component renders the image to the right of
 * the description.
 *
 * This will be used on the Exhibit page to display a single
 * artwork in the particular exhibit.
 *
 * Props:
 * - artwork: the artwork object with fields such as id, image, title, etc.
 */
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
                    <Link to={{
                        pathname: '/details',
                        state: {
                            artwork: this.props.artwork
                        }
                    }}>
                        <p className="rightExhibitArtTitle">{this.props.artwork.title}</p>
                    </Link>
                    <p className="rightExhibitArtistName">{this.props.artwork.artistName}</p>
                    <div className="rightExhibitArtDesc" ref={ (divElement) => { this.divElement = divElement } }>
                        <CustomBox width={this.state.width * 0.55} height={this.state.height * 0.3} position="top-left" />
                        {this.props.artwork.exhibitDescription}
                    </div>
                </div>
                <div className="rightExhibitRightColumn">
                    <Link to={{
                        pathname: '/details',
                        state: {
                            artwork: this.props.artwork
                        }
                    }}>
                        <img src={this.props.artwork.image} alt="exhibit image" />
                    </Link>
                </div>
            </div>
        )
    }
}
