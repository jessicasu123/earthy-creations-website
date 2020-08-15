import React, { Component } from 'react'
import './ArtistDetails.css';
import { Link } from 'react-router-dom'; 

export default class ArtistDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: this.props.location.state
        };
    }

    render() {
        const { artist } = this.state.artist;
        return (
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
            </div>
        )
    }
}