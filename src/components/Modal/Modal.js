import React, { Component } from 'react'; 
import './Modal.css'; 
import { Link } from "react-router-dom"; 
/**
 * This component is responsible for representing a pop-up modal.
 * For example, this modal is used when clicking "add to cart" on the 
 * Artwork Details page, and the modal has a heading text, an image of the 
 * artwork, and a button to view the cart.
 * 
 * Props:
 * - show: determines whether the modal should be shown or not
 * - buttonText: what to display on the button in the modal
 * - artwork: the artwork whose information should be displayed on the modal
 * - modalText: the heading at the top of the modal
 */
export default class Modal extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            buttonText: this.props.buttonText,
        }
    }
    closeModal = e => {
        this.props.onClose(); 
    }
    render() {
        if (! this.props.show) {
            return null; 
        }
        const { artwork } = this.props.artwork; 
        return (
            <div className="modal-container">
                <div className="modal-close" onClick={this.closeModal}></div>
                <div className="modal-text"> {this.props.modalText}</div>
                <div className="modal-cart-item">
                    <img className="modal-item-image" src={artwork.image} alt={artwork.title}/>
                    <div className="modal-item-info">
                        <div className="modal-item-name">{artwork.title}</div>
                        <div className="modal-item-price">$ {artwork.price}</div>
                    </div>
                </div>
                <Link to="/cart">
                    <button className="modal-button">{this.state.buttonText}</button>
                </Link>
            </div>
        );
    }
}
