import React, { Component } from 'react'; 
import {ArtworkConsumer} from './context'; 
import Artwork from '../../components/Artwork';
import CheckBoxGroup from '../../components/CheckBoxGroup/CheckBoxGroup'; 
import './Artworks.css'; 

export default class Artworks extends Component {
    state={
        artworks:[],
        categories: ["Sculpture", "Paintings", "Room Decor", "Reusable Products", "Merch"], 
        prices: ["$0 - $100", "$100 - $500", "$500 - $1000", "$1000+"],
        selectedFilters:new Map(),
    }


    filterArtworks() {
        let itemsToConsider = this.state.artworks; 
        for (let filterType of this.state.selectedFilters.keys()) {
            let filteredItems = []; 
            let filters = this.state.selectedFilters.get(filterType); 
            if (filters.size > 0) {
                itemsToConsider.forEach((item) => {
                    let filterChoice = this.getFilterChoiceFromFilterType(filterType, item); 
                    if (filters.has(filterChoice)) {
                        filteredItems.push(item);
                    }
                })
                itemsToConsider = filteredItems; 
            }
        }
        return itemsToConsider; 
    }

    getFilterChoiceFromFilterType(filterType, item) {
        switch(filterType) {
            case "category": 
                return item.category; 
            case "price": 
                return item.priceRange; 
            default: 
                return ""; 
        }
    }
    
    render() { 
        return (
            <React.Fragment>
                <div className="row">
                    <ArtworkConsumer>
                        {({updateArtworks}) => (
                            <div className="column left" onChange={(e) => updateArtworks(this.filterArtworks())}>
                                <p className="checkBoxGroup-label"> Categories </p>
                                <hr className="checkBoxGroup-line" />
                                <CheckBoxGroup type="category" items={this.state.categories} filters={this.state.selectedFilters}
                                />
                                <p className="checkBoxGroup-label"> Prices </p>
                                <hr className="checkBoxGroup-line" />
                                <CheckBoxGroup type="price" items={this.state.prices} filters={this.state.selectedFilters} />
                            </div>
                                
                        )}
                    </ArtworkConsumer>
                    <div className="column right">
                        <div className="products-center">
                            <ArtworkConsumer>
                                {value => {
                                    let renderedArtworks = value.artworks; 
                                    if (this.state.artworks.length === 0) {
                                        //this.setState({artworks: value.allArtworks}); 
                                        this.state.artworks = value.allArtworks; 
                                        renderedArtworks = value.allArtworks; 
                                    }
                                    return renderedArtworks.map(artwork => {
                                        return <Artwork key={artwork.id}
                                            artwork={artwork} />;
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

