import React, { Component } from 'react'; 
import {ArtworkConsumer} from '../../context'; 
import Artwork from '../../components/Artwork';
import CheckBoxGroup from '../../components/CheckBoxGroup/CheckBoxGroup'; 
import './Artworks.css'; 

export default class Artworks extends Component {
    state={
        products:[],
        categories: ["Sculpture", "Paintings", "Room Decor", "Reusable Products", "Merch"], 
        prices: ["$0 - $100", "$100 - $500", "$500 - $1000", "$1000+"]
    }
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="column left"> 
                        <p className="checkBoxGroup-label"> Categories </p>
                        <hr className="checkBoxGroup-line" />
                        <CheckBoxGroup items={this.state.categories}/>
                        
                        <p className="checkBoxGroup-label"> Prices </p>
                        <hr className="checkBoxGroup-line" />
                        <CheckBoxGroup items={this.state.prices} />
                    </div>
                    <div className="column right">
                        <div className="products-center">
                            <ArtworkConsumer>
                                {value => {
                                    return value.artworks.map( artwork => {
                                        return <Artwork key={artwork.id}
                                            artwork={artwork}/>;
                                    })
                                }}
                            </ArtworkConsumer>
                        </div>
                    </div>
                </div>  
            </React.Fragment>
        )
    }
}

