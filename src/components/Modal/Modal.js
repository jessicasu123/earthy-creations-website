import React, { Component } from 'react'; 
import './Modal.css'; 
import { Link } from "react-router-dom"; 

export default class Modal extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            modalText: this.props.modalText, 
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
        console.log(artwork); 
        return (
            <div className="modal-container">
                <div className="modal-close" onClick={this.closeModal}></div>
                <div className="modal-text"> {this.state.modalText}</div>
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
