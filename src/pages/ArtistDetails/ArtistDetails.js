import React, { Component } from 'react'
import './ArtistDetails.css';
import Artwork from '../../components/Artwork';
import Title from '../../components/Title/Title';
import { Link } from 'react-router-dom'; 
import { getArtworks } from '../../api.js';
import ArtistArtwork from '../../components/ArtistArtwork/ArtistArtwork';
import CategoriesUnderline from '../../images/categories_underline.png';
import PriceUnderline from '../../images/price_underline.png';

/**
 * Artist Details Page. Has image of the artist, artist bio, and links to all of the 
 * artwork done by the artist (both available to sell and previous pieces).
 * 
 * Props:
 * - location.state: represents an artist object that is passed in through the <Link> component because clicking an Artist links to the ArtistDetails
 *      ( see Components/Artist/Artist.js --> onClick action for clicking on an artist)
 * 
 * sellArtworks represents the artwork displayed under the "Artworks" header that links directly to the shop page
 * prevArtworks represents the artwork displayed under the "Previous Pieces" header 
 */

export default class ArtistDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: this.props.location.state,
            sellArtworks:[],
            prevArtworks:[],
            artistName: this.props.location.state.name
        };
    }

    componentDidMount(){
        const { artist } = this.state.artist;
        var tempSellArtworks = [];
        var tempPrevArtworks = [];
        getArtworks().then((responses) => {
            responses.forEach((response, i) => {
                if(response.status.includes("Available")){ //if available then add it to the sellArtworks set
                    if(response.artistName.includes(artist.name)){
                        tempSellArtworks.push(response);
                    }
                }
                if(response.status.includes("Sold")){ //if sold then add it to the prevArtworks set
                    if(response.artistName.includes(artist.name)){
                        console.log(response.artistName);
                        console.log(this.state.artist.name);
                        tempPrevArtworks.push(response);
                    }
                }
            });
            this.setState({
                sellArtworks: tempSellArtworks
            });
            this.setState({
                prevArtworks: tempPrevArtworks
            })
        });
    }
    

    render() {
        const { artist } = this.state.artist;
        this.state.sellArtworks.forEach((artwork) => {
            console.log(artwork.title);
            console.log(artwork.artistName);
        })
        return (
            <div>
                <div className="title">
                    <Title text={artist.name.toUpperCase()} color="green" />
                </div>
                <div className="artist-details-container">
                    <div className="bio-detail-row">
                        <div className="artist-detail-left">
                        <div className="navigate-artists">
                                <Link to='/artists' className="artist-link">
                                    <p className="back-to-artists"> Artists </p>
                                </Link>
                                <p className="currArtistName"> / {artist.name} </p>
                            </div>
                            <div className="artist-detail-img-container">
                                <img className="artist-detail-img" alt={artist.name} src={artist.image}></img>
                            </div>
                        </div>
                        <div className="artist-detail-right">
                            <p className="artist-detail-bio">{artist.bio}</p>
                        </div>
                    </div>
                    <div className="artist-details-subheader">
                        Artwork
                        <img className="artist-details-subheader-underline" src={CategoriesUnderline} />
                    </div>
                    <div className="artist-details-artwork-row">
                        <div className="artist-details-artwork-boxes">
                            {this.state.sellArtworks.map((artwork, i) => (
                                <ArtistArtwork key = {i} artwork = { artwork } />
                            ))}
                        </div>
                        {this.state.sellArtworks.length == 0 && 
                            <h1 className="empty-text-artworks">There are currently no available artworks to display.</h1>
                        }
                        
                    </div>
                    <div className="artist-details-subheader-prev">
                        Previous Pieces
                        <img className="artist-details-subheader-underline" src={PriceUnderline} />
                    </div>
                    <div className="artist-details-prev-row">
                        <div className="artist-details-prev-boxes">
                            {this.state.prevArtworks.map((artwork, i) => (
                                <ArtistArtwork key = {i} artwork = { artwork } />
                            ))}
                        </div>
                        {this.state.prevArtworks.length == 0 && 
                            <h1 className="empty-text-prev">There are currently no available artworks to display.</h1>
                        }
                        
                    </div>
                </div>
                
            </div>
        )
    }
}
