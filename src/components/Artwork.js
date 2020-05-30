import React, { Component } from 'react'; 
import {Link} from 'react-router-dom'; 

export default class Artwork extends Component {
    render() {
        const {id, image, title, artistName, price} = this.props.artwork; 
        return (
        <div>
            <article className="product">
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
                <p className="artworkTitle"> {title}</p>
                <p className="artistName"> {artistName} </p>
                <p className="price"> $ {price} </p>
            </article>
        </div>
        );
    }
}
