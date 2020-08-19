import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './ArtistArtwork.css';

/**
 * This component is used on the Artist Details page to display the artworks under the 
 * Artwork and Previous Pieces headings. It has a link feature that allows it to link to 
 * shop page. It is resposible for displaying a single artwork including the image, 
 * title, and size.
 * 
 * This is very similar to the artwork.js component.
 * 
 * Props: 
 * - artwork: the artwork object with fields such as id, image, title, etc.
 */

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
