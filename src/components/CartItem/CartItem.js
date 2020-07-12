import React, { Component } from 'react'; 
import './CartItem.css';
import constants from '../../constants.json'; 

const LOCAL_STORAGE_CART_KEY = constants.local_storage_cart_key; 
export default class CartItem extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            artwork: this.props.artwork,
            updateCartItems: this.props.updateCartItems,
        }
    }

    removeItemFromCart() {
        const cartItemsJSON = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART_KEY)); 
        const currArtwork = this.state.artwork; 
        let filteredCartItems = cartItemsJSON.filter(function (item) {
            return !(item.artwork.title===currArtwork.title); 
        }); 
        localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(filteredCartItems)); 
        this.state.updateCartItems(JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART_KEY))); 
    }

    render() {
        return (
            <div className="cart-container">
                <img className="cart-product-image" src={this.state.artwork.image}/>
                <div className="cart-text-container">
                    <p className="cart-artwork-name">{this.state.artwork.title}</p>
                    <p className="cart-artist-name">{this.state.artwork.artistName}</p>
                    <div className="cart-size-quantity">
                        <p className="cart-size-label">Size</p>
                        <p>Qty: 1</p>
                    </div>
                </div>
                <div className="cart-remove-price-container">
                    <p className="cart-remove-label" onClick={(e) => { this.removeItemFromCart() }}>Remove</p>
                    <p className="cart-price-label">$ {this.state.artwork.price}</p>
                </div>
            </div>
        )
    }
}
