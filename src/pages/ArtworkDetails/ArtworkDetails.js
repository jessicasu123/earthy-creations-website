import React, { Component } from 'react'
import {ArtworkConsumer} from '../Artworks/context'; 
import './ArtworkDetails.css'; 

export default class ArtworkDetails extends Component {
    render() {
        return (
            <ArtworkConsumer>
                {value => {
                    const {title, artistName, image, price} = value.detailedArtwork; 
                    return (
                    <div className="detail-row">
                        <div className="detail-column left-detail">
                            <div className="img-container">
                                <img className="detail-img" alt={title} src={image}></img>
                            </div>
                        </div>
                        <div className="detail-column right-detail">
                            <div className="detail-description">
                                <p className="detail-artworkTitle">{title}</p>
                                <p className="detail-artistName">{artistName}</p>
                                <p className="detail-size">Size</p>
                                <hr className="detail-line"></hr>
                                <p className="detail-price">$ {price}</p>
                                <button className="button-addToCart">Add to Cart</button>
                            </div>
                            
                        </div>
                    </div>
                    );
                }}
            </ArtworkConsumer>
        )
    }
}
