import React, { Component } from 'react'
import Artist from '../../components/Artist/Artist';
import Title from '../../components/Title/Title';
import './Artists.css';
import { getArtists } from '../../api.js';
import {withRouter} from 'react-router-dom';

export default class Artists extends Component {
    /*constructor(props){
        super(props);

        this.state = {
            artworks: [],
            images: [],
            names: []
        }
    }*/

    state={
        artists:[]
    }

    componentDidMount(){
        /*var curr;
        var currImages = [];
        var currNames = [];
        var currIDs = [];*/
        getArtists().then((response) => {
            /*curr = response;
            curr.forEach((item,j) => {
                currIDs.push(item.id);
                currImages.push(item.image);
                currNames.push(item.name);
            });*/
            const setArtists = this.state.artists.concat(response);
            this.setState({
                /*images: currImages,
                names: currNames,
                ids: currIDs*/
                artists: setArtists
            });
        });
    }

    createArtist = artist => (
        <Artist key = {artist.id} artist = { artist } />
    )

    showArtists = () => (
        this.state.artists.map(this.createArtist)
    )

    render() {
        return (
            <React.Fragment>
                
                <div className="title">
                    <Title text="ARTISTS" color="orange" />
                </div>
                <div className="artists-row">
                    <div className = "artist-boxes">
                        {this.showArtists()}
                    </div>
                </div>
            </React.Fragment>
            
        )
    }
}

