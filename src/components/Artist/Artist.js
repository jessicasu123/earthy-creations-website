import React, { Component } from 'react'; 
import {Link} from 'react-router-dom'; 
import './Artist.css';
//import {getArtists} from '../../api.js'

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
