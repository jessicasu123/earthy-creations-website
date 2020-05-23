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
                                <p class="detail-artworkTitle">{title}</p>
                                <p class="detail-artistName">{artistName}</p>
                                <p class="detail-size">Size</p>
                                <hr class="detail-line"></hr>
                                <p class="detail-price">$ {price}</p>
                                <button class="button-addToCart">Add to Cart</button>
                            </div>
                            
                        </div>
                    </div>
                    );
                }}

            </ArtworkConsumer>
        )
    }
}
