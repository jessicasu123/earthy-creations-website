import React, { Component } from 'react';
import Artwork from '../../components/Artwork';
import CheckBoxGroup from '../../components/CheckBoxGroup/CheckBoxGroup';
import Title from '../../components/Title/Title';
import EmptyText from '../../components/EmptyText/EmptyText';
import SearchField from '../../components/SearchField/SearchField';
import CategoriesUnderline from '../../images/categories_underline.png';
import MaterialsUnderline from '../../images/materials_underline.png';
import PriceUnderline from '../../images/price_underline.png';

import { getArtworks } from '../../api.js';
import {withRouter} from 'react-router-dom';
import './Artworks.css';

/**
 * Artworks page. 
 * Responsible for rendering filtering options, as well all the artworks in a grid format.
 * 
 * State: 
 * - artworks: the artworks to be displayed at any point (will change as a result of filtering)
 * - allArtworks: ALL the artworks available from the backend; need this variable to be able to reset filtering options (does NOT change as a result of filtering)
 * - categories, prices, materials: lists that represent the names of the CheckBoxes that should be rendered under that type
 * - selectedFilters: a map that links the type (eg. categories) to the filters that are selected within that type 
 *      (eg. ["Sculpture"] if the user selected "Sculpture" CheckBox from the "Categories" CheckBoxGroup)
 */
class Artworks extends Component {
    state={
        artworks:[],
        categories: ["Sculpture", "Paintings", "Room Decor", "Reusable Products", "Merch"],
        prices: ["$0 - $100", "$100 - $500", "$500 - $1000", "$1000+"],
        materials: ["Glass", "Paper", "Plastic", "Wood", "Metal"],
        selectedFilters: new Map(),
        allArtworks:[],
    }

    componentDidMount() {
        this.loadArtworks();
    }

    /**
     * Called to get the artworks whenever the Artworks page is loaded.
     * 
     * getArtworks includes an API call to contentful to fetch the artworks.
     */
    loadArtworks () {
        getArtworks().then((response) => {
            this.setState({ artworks: response, allArtworks: response });
        });
    }

    /**
     * Called when any checkbox in any CheckBoxGroup is selected.
     * Filters within a CheckBox group should add on to each other,
     * but filters across different CheckBox groups should overlap with each other.
     * 
     * Eg. if I select 'Sculture' and 'Paintings' within the 'Categories' CheckBoxGroup,
     * then the artworks shown should be Sculptures OR Paintings.
     * However, if I select 'Sculpture' from the 'Categories' CheckBoxGroup, and '100-500' 
     * from the 'Prices' CheckBoxGroup, the artworks shown should be artworks that are 
     * Sculptures AND within the price range of 100-500.
     */
    filterArtworks() {
        let itemsToConsider = this.state.allArtworks;
        for (let filterType of this.state.selectedFilters.keys()) {
            let filteredItems = [];
            let filters = this.state.selectedFilters.get(filterType);
            if (filters.size > 0) {
                itemsToConsider.forEach((item) => {
                    let artworkValue = this.getArtworkValueFromFilterType(filterType, item);
                    let allArtworkValues = new Set(artworkValue.split(","));
                    let intersect = new Set([...filters].filter(i => allArtworkValues.has(i)));
                    if (intersect.size > 0) {
                        filteredItems.push(item);
                    }
                })
                itemsToConsider = filteredItems;
            }
        }
        this.setState({artworks: itemsToConsider});
    }

    /**
     * Called when user types into the SearchField to look for an artwork by TITLE.
     */
    searchArtworks = searchText => {
        if (!searchText) {
            this.filterArtworks();
        } else {
            let matchingArtworks = []
            this.state.artworks.forEach((artwork) => {
                if (artwork.title.toLowerCase().includes(searchText.toLowerCase())) {
                    matchingArtworks.push(artwork);
                }
            });

        this.setState({ artworks: matchingArtworks });
        }
    }

    /**
     * Based on the filter type, return a different property
     * of the artwork object.
     * 
     * Eg. If filtering by Category, should return the 
     * category property of the artwork object.
     */
    getArtworkValueFromFilterType(filterType, item) {
        switch(filterType) {
            case "category":
                return item.category;
            case "price":
                return item.priceRange;
            case "materials":
                return item.materials;
            default:
                return "";
        }
    }

    /**
     * Creates a single Artwork component in the grid.
     */
    createArtwork = artwork => (
        <Artwork key = {artwork.id} artwork = { artwork } />
    )

    /**
     * Shows a grid of Artwork components.
     */
    showArtworks = () => (
        this.state.artworks.map(this.createArtwork)
    )

    showNoArtworksText = () => (
        < EmptyText emptyText = "Sorry, there are no matching pieces." />
    )

    render() {
        return (
            <React.Fragment>
                <div className="title">
                    <Title text="SHOP" color="blue" />
                </div>
                <div className="artworks-row">
                    <div className="column left">
                        <SearchField processSearch={this.searchArtworks} placeholder="Search Artworks"/>
                        
                        <div onChange={(e) => {this.filterArtworks()}}>
                            <div className="checkBoxGroup-label">
                                Categories 
                                <img className="checkbox-underline" src={CategoriesUnderline} />
                            </div>
                            <CheckBoxGroup type="category" items={this.state.categories} filters={this.state.selectedFilters} add={this.props.location.state ? this.props.location.state.category : ''}/>
                
                            <div className="checkBoxGroup-label">
                                Materials
                                <img className="checkbox-underline" src={MaterialsUnderline} />
                            </div>
                            <CheckBoxGroup type="materials" items={this.state.materials} filters={this.state.selectedFilters} add={this.props.location.state ? this.props.location.state.category : ''}/>
                            
                            <div className="checkBoxGroup-label">
                                Prices
                                <img className="checkbox-underline" src={PriceUnderline} />
                            </div>
                            <CheckBoxGroup type="price" items={this.state.prices} filters={this.state.selectedFilters} />
                        </div>

                    </div>
                    <div className="column right">
                        <div className="products-center">
                            {this.showArtworks()}
                        </div>
                    </div>

                    {this.state.artworks.length == 0 && this.showNoArtworksText()}
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(Artworks);
