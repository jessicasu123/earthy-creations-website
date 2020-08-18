import React, { Component } from 'react';
import './CartItem.css';
import constants from '../../constants.json';

const LOCAL_STORAGE_CART_KEY = constants.local_storage_cart_key;
const QUANTITY_TEXT = 'Qty: 1';
const REMOVE_TEXT = 'Remove';
/**
 * This component is responsible for rendering a SINGLE cart item on the cart page.
 * It will include the artwork's picture, title, price. This component will
 * also have the option to remove the artwork from the cart.
 * 
 * Props: 
 *  - artwork: object with the name of artwork, price, size, etc.
 *  - updateCartItems: function that is called after artwork is removed from the cart
 */
export default class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artwork: this.props.artwork,
            updateCartItems: this.props.updateCartItems,
        }
    }

    /**
     * Called when user wants to remove item from teh cart.
     * 
     * Updates localStorage so that the cart items stored do not include
     * the artwork that has just been removed.
     */
    removeItemFromCart() {
        const cartItemsJSON = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART_KEY));
        const currArtwork = this.state.artwork;
        let filteredCartItems = cartItemsJSON.filter(function (item) {
            return !(item.artwork.id===currArtwork.id);
        });
        localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(filteredCartItems));
        this.state.updateCartItems(JSON.parse(localStorage.getItem(LOCAL_STORAGE_CART_KEY)));
    }

    render() {
        return (
            <div className="cart-container">
                <img className="cart-product-image" src={this.state.artwork.image} alt="cart" />
                <div className="cart-text-container">
                    <p className="cart-artwork-name">{this.state.artwork.title}</p>
                    <p className="cart-artist-name">{this.state.artwork.artistName}</p>
                    <div className="cart-size-quantity">
                        <p className="cart-size-label">{this.state.artwork.size}</p>
                        <p>{QUANTITY_TEXT}</p>
                    </div>
                </div>
                <div className="cart-remove-price-container">
                    <p className="cart-remove-label" onClick={(e) => { this.removeItemFromCart() }}>{REMOVE_TEXT}</p>
                    <p className="cart-price-label">$ {this.state.artwork.price}</p>
                </div>
            </div>
        )
    }
}
