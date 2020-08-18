import React, { Component } from 'react'; 
import {Link} from 'react-router-dom'; 

/**
 * This component is responsible for rendering a single Artwork, 
 * including the image, title, artist name and price.
 * 
 * This will be used on the Artworks page to display a single
 * artwork wtihin the grid of artworks.
 * 
 * Props: 
 * - artwork: the artwork object with fields such as id, image, title, etc.
 */
export default class Artwork extends Component {
    render() {
        const {id, image, title, artistName, price} = this.props.artwork; 
        return (
            <div className="product">
                <div className="img-container">  
                    <Link to={{
                        pathname: '/details',
                        state: {
                            artwork: this.props.artwork
                        }
                    }}>
                        <img
                            id={id}
                            src={image}
                            alt="product"
                            className="product-img" />
                    </Link>
                </div>
                <div className="artworkInformation">
                    <p className="artworkTitle"> {title}</p>
                    <p className="artistName"> {artistName} </p>
                    <p className="price"> $ {price} </p>
                </div>
                
            </div>
    
        );
    }
}
