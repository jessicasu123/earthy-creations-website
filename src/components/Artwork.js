import React, { Component } from 'react'; 
import {Link} from 'react-router-dom'; 
import { ArtworkConsumer} from "../context"; 

export default class Artwork extends Component {
    render() {
        const {id, image, title, artistName, price} = this.props.artwork; 
        return (
        <div>
            <ArtworkConsumer>
            {(value) => (
                <article className="product">
                <div
                    className="img-container"
                    onClick={() => value.handleDetail(id)}
                >
                    <Link to="/details">
                    <img
                        id={id}
                        src={image}
                        alt="product"
                        class="product-img"
                    />
                    </Link>
                </div>

                <p className="artworkTitle"> {title}</p>
                <p className="artistName"> {artistName} </p>
                <p className="price"> $ {price} </p>
                </article>
            )}
            </ArtworkConsumer>
          </div>
        );
    }
}
