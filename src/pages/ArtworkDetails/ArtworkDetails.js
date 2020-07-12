import React, { Component } from 'react'
import './ArtworkDetails.css'; 
import { Link } from 'react-router-dom'; 
import Modal from '../../components/Modal/Modal';

const ADDED_TO_CART = "ADDED TO CART"; 
const ALREADY_IN_CART = "ALREADY IN CART"; 
export default class ArtworkDetails extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            artwork: this.props.location.state,
            showAddToCartModal: false,
            modalText: ADDED_TO_CART, 
        }; 
    }
    addToCart() {
        if (localStorage.getItem('cart')===null) {
            const cartItems = [this.state.artwork]; 
            localStorage.setItem('cart', JSON.stringify(cartItems)); 
        } else {
            const currCartItems = localStorage.getItem('cart'); 
            const currCartItemsJSON = JSON.parse(currCartItems); 
            if (! currCartItemsJSON.some(artwork => artwork.artwork.id === this.state.artwork.artwork.id)) {
                currCartItemsJSON.push(this.state.artwork);
            } else {
                this.setState({modalText: ALREADY_IN_CART}); 
            }
            localStorage.setItem('cart', JSON.stringify(currCartItemsJSON)); 
        }
        this.showModal(); 
    }

    showModal() {
        this.setState({showAddToCartModal: true}); 
    }

    closeModal = () => {
        this.setState({showAddToCartModal: false});
    }

    render() {
        const { artwork } = this.state.artwork; 
        return (
            <div>
                <div className="detail-row">
                <div className="detail-column left-detail">
                    <div className="img-container">
                        <div className="navigate-shop">
                            <Link to='/shop' className="shop-link">
                                <p className="back-to-shop"> Shop </p>
                            </Link>
                            <p className="currArtworkName"> / {artwork.title} </p>
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
            <Modal modalText={this.state.modalText} buttonText="View Cart" show={this.state.showAddToCartModal} onClose={this.closeModal}
            artwork={this.state.artwork}/>
            </div>
        )
    }
}
