import React, { Component } from 'react'; 
import CartItem from '../components/CartItem/CartItem'; 
import Title from '../components/Title/Title';
import constants from '../constants.json'; 

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

    showCartItems = () => (
        this.state.cartItems.map(this.createCartItem)
    )

    createCartItem = cartItem => (
        <CartItem key={cartItem.artwork.id} artwork={cartItem.artwork} updateCartItems={this.updateCartItems}/>
    )
    render() {
        return (
            <React.Fragment>
                <div className="title">
                    <Title text="CART" color="blue" />
                </div>
                <div>
                    {this.showCartItems()}
                </div>
            </React.Fragment>
        )
    }
}
