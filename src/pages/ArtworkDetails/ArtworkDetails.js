import React, { Component } from 'react'
import './ArtworkDetails.css'; 
import { Link } from 'react-router-dom'; 

export default class ArtworkDetails extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            artwork: this.props.location.state,
        }; 
    }
    addToCart() {
        if (localStorage.getItem('cart')===null) {
            const cartItems = [this.state.artwork]; 
            localStorage.setItem('cart', JSON.stringify(cartItems)); 
        } else {
            const currCartItems = localStorage.getItem('cart'); 
            const currCartItemsJSON = JSON.parse(currCartItems); 
            if (! currCartItemsJSON.some(artwork=> artwork.id === this.state.artwork.id)) {
                currCartItemsJSON.push(this.state.artwork);
            } 
            localStorage.setItem('cart', JSON.stringify(currCartItemsJSON)); 
        }
    }
    render() {
        const { artwork } = this.state.artwork; 
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
                        <button className="button-addToCart" onClick={(e) => { this.addToCart()}}>Add to Cart</button>
                    </div>

                </div>
            </div>
        )
    }
}
