import React, { Component } from 'react'; 
import CartItem from '../../components/CartItem/CartItem'; 
import Title from '../../components/Title/Title';
import constants from '../../constants.json'; 
import { createCheckout } from '../../squareApi.js'; 
import './Cart.css'; 

export default class Cart extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            cartItems: JSON.parse(localStorage.getItem(constants.local_storage_cart_key)), 
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

    createCartItem = cartItem => (
        <CartItem key={cartItem.artwork.id} artwork={cartItem.artwork} updateCartItems={this.updateCartItems}/>
    )

    redirectToCheckout() {
        createCheckout().then((checkoutURL) => {
            console.log(checkoutURL); 
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
                    {this.showCartItems()}
                    <div className="checkout-summary">
                        <div className="checkout-summary-label">Checkout Summary</div>
                    <div className="checkout-total-label">Total: $ {this.getCartTotal()} </div>
                    <button className="checkout-button" onClick={(e) => { this.redirectToCheckout()}}>Checkout</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
