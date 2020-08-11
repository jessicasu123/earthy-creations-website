import React, { Component } from 'react'
import './ArtworkDetails.css'; 
import { Link } from 'react-router-dom'; 
import Modal from '../../components/Modal/Modal';
import MaterialsBox from '../../components/MaterialsBox/MaterialsBox';
import OffsetInfoBox from '../../components/OffsetInfoBox/OffsetInfoBox';

const ADDED_TO_CART = "ADDED TO CART"; 
const ALREADY_IN_CART = "ALREADY IN CART"; 
const TEMP_ARTIST_DESCRIPTION = "After graduating from the Gemological Institute of America in New York, I decided to combine my love of stones and social concerns to create upcycled jewelry. I started to create jewelry out of reused metals and, in addition to the actual crystalline parts usually used in luxury, I used the parts of the rock that are usually discarded.";

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

    createMaterialSubtitle = material => (
        <div className="recycled-materials-subtitle">{material.toUpperCase()}</div>
    )

    showMaterials = () => {
        return this.state.artwork.artwork.materials.split(',').map(this.createMaterialSubtitle)
    }

    render() {
        const { artwork } = this.state.artwork; 
        return (
            <div className="detail-container">
                <div className="detail-row">
                    <div className="left-detail">
                        <div className="navigate-shop">
                            <Link to='/shop' className="shop-link">
                                <p className="back-to-shop"> Shop </p>
                            </Link>
                            <p className="currArtworkName"> / {artwork.title} </p>
                        </div>
                        <img className="detail-img" alt={artwork.title} src={artwork.image}></img>
                    </div>
                    <div className="right-detail">
                            <p className="detail-artworkTitle">{artwork.title}</p>
                            <p className="detail-artistName">{artwork.artistName}</p>
                            <p className="detail-size">Size</p>
                            <p className="detail-price">$ {artwork.price}</p>
                            <button className="button-addToCart" onClick={(e) => { this.addToCart()}}>Add to Cart</button>
                    </div>
                </div>
                <div className="detail-recycled-materials">
                    <div className="yellow-box"/>
                    <div className="pink-box"/>
                    <div className="orange-box"/>
                    <div className="dark-green-box"/>
                    <div className="purple-box"/>
                    <div className="blue-box"/>
                    <div className="green-box"/>
                    <div className="recycled-materials-title">RECYCLED MATERIALS</div>
                     {this.showMaterials()}
                </div>
                <div className="other-materials">
                    <MaterialsBox materialsDescription={artwork.materialsDescription}/>
                </div>
                <div className="info-box-artist">
                    <OffsetInfoBox title="About the Artist" info={TEMP_ARTIST_DESCRIPTION} isLeftOffset={true}/>
                </div>
            <Modal modalText={this.state.modalText} buttonText="View Cart" show={this.state.showAddToCartModal} onClose={this.closeModal}
            artwork={this.state.artwork}/>
            </div>
        )
    }
}
