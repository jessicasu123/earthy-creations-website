import React, { Component } from 'react'
import './ArtworkDetails.css'; 
import { Link } from 'react-router-dom'; 
import Modal from '../../components/Modal/Modal';
import MaterialsBox from '../../components/MaterialsBox/MaterialsBox';
import OffsetInfoBox from '../../components/OffsetInfoBox/OffsetInfoBox';
import RecycledMaterialsBoxes from '../../images/recycled_materials.png';
import constants from '../../constants.json';

const LOCAL_STORAGE_CART_KEY = constants.local_storage_cart_key;
const ADDED_TO_CART = "ADDED TO CART"; 
const ALREADY_IN_CART = "ALREADY IN CART"; 

/**
 * Temporary vars for the artist/piece description - this should eventually be pulled from backend
 */
const TEMP_ARTIST_DESCRIPTION = "After graduating from the Gemological Institute of America in New York, I decided to combine my love of stones and social concerns to create upcycled jewelry. I started to create jewelry out of reused metals and, in addition to the actual crystalline parts usually used in luxury, I used the parts of the rock that are usually discarded.";
const TEMP_PIECE_DESCRIPTION = "After graduating from the Gemological Institute of America in New York, I decided to combine my love of stones and social concerns to create upcycled jewelry. ";

/**
 * Artwork Details Page. Has image of the artwork, information about the artwork, and 
 * ability to add the artwork to the cart.
 * 
 * It also includes additional information such as the recycled materials used, the other
 * materials, and info about the artist/piece.
 * 
 * Props:
 * - location.state: represents an artwork object that is passed in through the <Link> component because clicking an Artwork links to the ArtworkDetails
 *      ( see Components/Artworks.js --> onClick action for clicking on an artwork)
 */
export default class ArtworkDetails extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            artwork: this.props.location.state,
            showAddToCartModal: false,
            modalText: ADDED_TO_CART, 
        }; 
    }

    /**
     * Called when adding an item to the cart.
     * 
     * Local Storage is being used to persist what a user stores in their cart.
     * The key for the storage is 'cart', and the value is the list of artworks in their cart.
     */
    addToCart() {
        if (localStorage.getItem(LOCAL_STORAGE_CART_KEY)===null) {
            const cartItems = [this.state.artwork]; 
            localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cartItems)); 
        } else {
            const currCartItems = localStorage.getItem(LOCAL_STORAGE_CART_KEY); 
            const currCartItemsJSON = JSON.parse(currCartItems); 
            if (! currCartItemsJSON.some(artwork => artwork.artwork.id === this.state.artwork.artwork.id)) {
                currCartItemsJSON.push(this.state.artwork);
            } else {
                this.setState({modalText: ALREADY_IN_CART}); 
            }
            localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(currCartItemsJSON)); 
        }
        this.showModal(); 
    }

    /**
     * Show the pop-up modal when user chooses to add something to the cart.
     * 
     * The heading on the modal will say "Already in Cart" if the user already has
     * the artwork in their cart.
     */
    showModal() {
        this.setState({showAddToCartModal: true}); 
    }

    closeModal = () => {
        this.setState({showAddToCartModal: false});
    }

    /**
     * To display each recycled material within the Recycled Materials graphic.
     */
    createMaterialSubtitle = material => (
        <div className="recycled-materials-subtitle">{material.toUpperCase()}</div>
    )

    showRecycledMaterials = () => {
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
                    <img className="detail-recycled-materials-image" src={RecycledMaterialsBoxes} alt="Recycled Materials Boxes"/>
                    <div className="recycled-materials-info">
                        <div className="recycled-materials-title">RECYCLED MATERIALS</div>
                        {this.showRecycledMaterials()}
                    </div>
                </div>
                <div className="other-materials">
                    <MaterialsBox materialsDescription={artwork.materialsDescription}/>
                </div>
                <div className="info-box-artist">
                    <OffsetInfoBox title="About the Artist" info={TEMP_ARTIST_DESCRIPTION} isLeftOffset={true}/>
                </div>
                <div className="info-box-piece">
                    <OffsetInfoBox title="About the Piece" info={TEMP_PIECE_DESCRIPTION} isLeftOffset={false}/>
                </div>
            
            <Modal modalText={this.state.modalText} buttonText="View Cart" show={this.state.showAddToCartModal} onClose={this.closeModal}
            artwork={this.state.artwork}/>
            </div>
        )
    }
}
