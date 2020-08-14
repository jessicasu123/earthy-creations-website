import React, { Component } from 'react'; 
import CartItem from '../../components/CartItem/CartItem'; 
import Title from '../../components/Title/Title';
import EmptyText from '../../components/EmptyText/EmptyText';
import constants from '../../constants.json'; 
import { createCheckout } from '../../squareApi.js'; 
import './Cart.css'; 

export default class Cart extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            cartItems: localStorage.getItem(constants.local_storage_cart_key) ? JSON.parse(localStorage.getItem(constants.local_storage_cart_key)) : [], 
        }
        this.updateCartItems = this.updateCartItems.bind(this); 
    }

    updateCartItems(newCartItems) {
        this.setState({cartItems: newCartItems});
    }

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

    createCartItem = cartItem => (
        <CartItem key={cartItem.artwork.id} artwork={cartItem.artwork} updateCartItems={this.updateCartItems}/>
    )

    checkoutSummary = () => (
        <div className="checkout-summary">
            <div className="checkout-summary-label">Checkout Summary</div>
            <div className="checkout-total-label">Total: $ {this.getCartTotal()} </div>
            <button className="checkout-button" onClick={(e) => { this.redirectToCheckout() }}>Checkout</button>
        </div>
    )

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
