import React, { Component } from 'react'
import {ArtworkConsumer} from '../context'; 

export default class ArtworkDetails extends Component {
    render() {
        return (
            <ArtworkConsumer>
                {value => {
                    const {id, title, artistName, image, price} = value.detailedArtwork; 
                    return (
                    <div className="row">
                        <div className="column left-detail">
                            <div className="img-container">
                                <img className="detail-img" src={image}></img>
                            </div>
                        </div>
                        <div className="column right-detail">
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
