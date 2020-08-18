import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './ArtistArtwork.css';

export default class ArtistArtwork extends Component {
    render() {
        const {id, image, title, size} = this.props.artwork; 
        return (
       
            <div className="artist-details-product">
                <div className="artist-art-img-container">  
                    <Link to={{
                        pathname: '/details',
                        state: {
                            artwork: this.props.artwork
                        }
                    }}>
                        <img
                            id={id}
                            src={image}
                            alt="product"
                            className="artist-art-product-img" />
                    </Link>
                </div>
                <div className="artist-artworkInformation">
                    <p className="artist-artworkTitle"> {title}</p>
                    <p className="artist-artworkSize"> {size} </p>
                </div>
                
            </div>
    
        );
    }
}
