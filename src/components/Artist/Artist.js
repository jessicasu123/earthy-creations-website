import React, { Component } from 'react'; 
import {Link} from 'react-router-dom'; 
import './Artist.css';
import { getArtists } from '../../api';

/**
 * This component is responsible for rendering a single Artist, 
 * including the image, artist name and school.
 * 
 * This will be used on the Artists page to display a single
 * artist wtihin the grid of artists.
 * 
 * Props: 
 * - artist: the artist object with fields such as id, image, name, school etc.
 */

export default class Artwork extends Component {

    render() {
        const {id, image, name, school} = this.props.artist; 
        return (
       
            <div className="artist-box">
                <div className="artist-img-container">  
                    <Link to={{
                        pathname: '/artistdetails',
                        state: {
                            artist: this.props.artist
                        }
                    }}>
                        <img
                            id={id}
                            src={image}
                            alt="artist-box"
                            className="artist-box-img" />
                    </Link>
                       
                </div>
                <div className="artistInformation">
                    <p className="artistBoxName"> {name}</p>
                    <p className="artistSchoolName"> {school} </p>
                    
                </div>
                
            </div>
    
        );
    }
}
