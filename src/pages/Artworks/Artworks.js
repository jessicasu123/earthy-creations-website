import React, { Component } from 'react'; 
import Artwork from '../../components/Artwork';
import CheckBoxGroup from '../../components/CheckBoxGroup/CheckBoxGroup'; 
import './Artworks.css'; 
import Title from '../../components/Title/Title';
import { getArtworks } from '../../api.js';
import SearchField from '../../components/SearchField/SearchField'; 
export default class Artworks extends Component {
    state={
        artworks:[],
        categories: ["Sculpture", "Paintings", "Room Decor", "Reusable Products", "Merch"], 
        prices: ["$0 - $100", "$100 - $500", "$500 - $1000", "$1000+"],
        selectedFilters:new Map(),
        allArtworks:[],
        beforeSearchArtworks:[],
    }

    componentDidMount() {
        getArtworks().then((response) => {
            this.setState({artworks: response, allArtworks: response}); 
        })
    }

    filterArtworks() {
        let itemsToConsider = this.state.allArtworks; 
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
        this.setState({artworks: itemsToConsider});
    }

    searchArtworks = searchText => {
        if (!searchText) {
            this.filterArtworks(); 
        }
        let matchingArtworks = []
        this.state.allArtworks.forEach((artwork) => {
            if (artwork.title.toLowerCase().includes(searchText.toLowerCase())) {
                matchingArtworks.push(artwork); 
            }
        }); 
        this.setState({ artworks: matchingArtworks });
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

    createArtwork = artwork => (
        <Artwork key = {artwork.id} artwork = { artwork } />  
    )

    showArtworks = () => (
        this.state.artworks.map(this.createArtwork)
    )
    
    render() { 
        return (
            <React.Fragment>
                <div className="title">
                    <Title text="SHOP" color="blue" />
                </div>
                <div className="row">
                    <div className="column left">
                        <SearchField processSearch={this.searchArtworks} placeholder="Search Artworks"/>
                        <div onChange={(e) => {this.filterArtworks()}}>
                            <p className="checkBoxGroup-label"> Categories </p>
                            <hr className="checkBoxGroup-line" />
                            <CheckBoxGroup type="category" items={this.state.categories} filters={this.state.selectedFilters}
                            />
                            <p className="checkBoxGroup-label"> Prices </p>
                            <hr className="checkBoxGroup-line" />
                            <CheckBoxGroup type="price" items={this.state.prices} filters={this.state.selectedFilters} />
                        </div>
                    </div>
                    <div className="column right">
                        <div className="products-center">
                            {this.showArtworks()}
                        </div>
                    </div>
                </div>  
            </React.Fragment>
        )
    }
}

