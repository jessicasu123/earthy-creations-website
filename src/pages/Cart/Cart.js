import React, { Component } from 'react'; 
import CartItem from '../../components/CartItem/CartItem'; 
import Title from '../../components/Title/Title';
import EmptyText from '../../components/EmptyText/EmptyText';
import constants from '../../constants.json'; 
import { createCheckout } from '../../squareApi.js'; 
import './Cart.css'; 

/**
 * Cart Page.
 * 
 * This page should show all the items in the cart, along with a checkout summary
 * with the total price of the cart and a button to go to checkout.
 * 
 * NOTE: the items in the cart are populated by what's stored in Local Storage.
 * The key for localStorage is 'cart' (stored in constants.json file), and the value
 * is the list of artworks that should be in the cart.
 */
export default class Cart extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            cartItems: localStorage.getItem(constants.local_storage_cart_key) ? JSON.parse(localStorage.getItem(constants.local_storage_cart_key)) : [], 
        }
        this.updateCartItems = this.updateCartItems.bind(this); 
    }

    /**
     * Called when user removes an item from the cart.
     */
    updateCartItems(newCartItems) {
        this.setState({cartItems: newCartItems});
    }

    /**
     * Calculates the total price of all the items in the cart.
     */
    getCartTotal() {
        let cartTotal = this.state.cartItems.reduce(function (_this, val) {
            return _this + val.artwork.price
        }, 0); 
        return cartTotal;
    }

    showCartItems = () => (
        this.state.cartItems.map(this.createCartItem)
    )

    showCartEmptyText = () => (
        <EmptyText emptyText = "Your cart is empty." />
    )

    /**
     * Creates a CartItem.
     * 
     * A cart item represents a single piece that the user has added to their cart.
     * Visually, it looks like a single row on the cart page.
     */
    createCartItem = cartItem => (
        <CartItem key={cartItem.artwork.id} artwork={cartItem.artwork} updateCartItems={this.updateCartItems}/>
    )

    /**
     * Displays the checkout summary with the cart total, as well as the button
     * to go to the checkout page.
     */
    checkoutSummary = () => (
        <div className="checkout-summary">
            <div className="checkout-summary-label">Checkout Summary</div>
            <div className="checkout-total-label">Total: $ {this.getCartTotal()} </div>
            <button className="checkout-button" onClick={(e) => { this.redirectToCheckout() }}>Checkout</button>
        </div>
    )

    /**
     * Call to Square API to show checkout page.
     * 
     * Right now running into CORS errors.
     */
    redirectToCheckout() {
        createCheckout(this.state.cartItems).then((checkoutURL) => {
            //window.location.href = checkoutURL; 
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="title">
                    <Title text="CART" color="blue" />
                </div>
                <div className="cart-page">
                    {this.state.cartItems.length > 0 && this.showCartItems()}
                    {this.state.cartItems.length > 0 && this.checkoutSummary()}
                </div>

                {this.state.cartItems.length == 0 && this.showCartEmptyText()}
            </React.Fragment>
        );
    }
}
