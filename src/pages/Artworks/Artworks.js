import React, { Component } from 'react';
import Artwork from '../../components/Artwork';
import CheckBoxGroup from '../../components/CheckBoxGroup/CheckBoxGroup';
import Title from '../../components/Title/Title';
import LoadMoreSign from '../../components/LoadMoreSign/LoadMoreSign';
import EmptyText from '../../components/EmptyText/EmptyText';
import SearchField from '../../components/SearchField/SearchField';
import CategoriesUnderline from '../../images/categories_underline.png';
import MaterialsUnderline from '../../images/materials_underline.png';
import PriceUnderline from '../../images/price_underline.png';

import { getArtworks } from '../../api.js';
import {withRouter} from 'react-router-dom';
import './Artworks.css';

class Artworks extends Component {
    state={
        artworks:[],
        categories: ["Sculpture", "Paintings", "Room Decor", "Reusable Products", "Merch"],
        prices: ["$0 - $100", "$100 - $500", "$500 - $1000", "$1000+"],
        materials: ["Glass", "Paper", "Plastic", "Wood", "Metal"],
        selectedFilters: new Map(),
        allArtworks:[],
        beforeSearchArtworks:[]
    }

    componentDidMount() {
        this.loadArtworks();
    }

    loadArtworks () {
        const numArtworks = this.state.artworks.length;
        getArtworks(numArtworks).then((response) => {
            const updatedArtworks = this.state.artworks.concat(response);
            this.setState({ artworks: updatedArtworks, allArtworks: updatedArtworks });
        });
    }

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

    createArtwork = artwork => (
        <Artwork key = {artwork.id} artwork = { artwork } />
    )

    showArtworks = () => (
        this.state.artworks.map(this.createArtwork)
    )

    showLoadMore = () => (
        <React.Fragment>
            <LoadMoreSign loadItemsAction={(e) => this.loadArtworks()} />
            <div className="num-artwork-loading-text">
                Showing {this.state.artworks.length} of total items...
            </div>
        </React.Fragment>
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
