import React, { Component } from 'react'
import './ArtworkDetails.css'; 
import { Link } from 'react-router-dom'; 

export default class ArtworkDetails extends Component {
    render() {
        const { artwork } = this.props.location.state; 
        return (
            <div className="detail-row">
                <div className="detail-column left-detail">
                    <div className="img-container">
                        <div className="navigate-shop">
                            <Link to='/shop' className="shop-link">
                                <p class="back-to-shop"> Shop </p>
                            </Link>
                            <p class="currArtworkName"> / {artwork.title} </p>
                        </div>
                        <img className="detail-img" alt={artwork.title} src={artwork.image}></img>
                    </div>
                </div>
                <div className="detail-column right-detail">
                    <div className="detail-description">
                        <p className="detail-artworkTitle">{artwork.title}</p>
                        <p className="detail-artistName">{artwork.artistName}</p>
                        <p className="detail-size">Size</p>
                        <hr className="detail-line"></hr>
                        <p className="detail-price">$ {artwork.price}</p>
                        <button className="button-addToCart">Add to Cart</button>
                    </div>

                </div>
            </div>
        )
    }
}
