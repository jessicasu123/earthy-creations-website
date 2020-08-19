import React, { Component } from 'react'
import Artist from '../../components/Artist/Artist';
import Title from '../../components/Title/Title';
import './Artists.css';
import { getArtists } from '../../api.js';
import {withRouter} from 'react-router-dom';
import SearchFieldArtist from '../../components/SearchFieldArtist/SearchFieldArtist';

/**
 * Artists page. 
 * Displays the artists in a grid format. Also includes a search feature.
 * 
 * State: 
 * - artists: all of the artists - does not change due to searching
 * - filteredArtists: artists being displayed - can change as a result of searching
 */

export default class Artists extends Component {

    state={
        artists:[],
        filteredArtists:[]
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
                artists: setArtists,
                filteredArtists: setArtists
            });
        });
    }

    searchArtists = searchText => {
        this.setState({filteredArtists: [] })
            let resultArtists = []
        this.state.artists.forEach((artist) => {
            if (artist.name.toLowerCase().includes(searchText.toLowerCase())) {
                resultArtists.push(artist);
            }
        });
        this.setState({ filteredArtists: resultArtists });
        

    }

    createArtist = artist => (
        <Artist key = {artist.id} artist = { artist } />
    )

    showArtists = () => (
        this.state.filteredArtists.map(this.createArtist)
    )
    

    render() {
        return (
            <React.Fragment>
                
                <div className="title artists-title">
                    <Title text="ARTISTS" color="orange" />
                </div>
                
                
                <div className="artists-row">
                <div className="artistsSearch">
                    <SearchFieldArtist id="artist-search-bar" processSearch={this.searchArtists} placeholder="Search Artists"/>
                </div>
                    <div className = "artist-boxes">
                        {this.showArtists()}
                    </div>
                </div>
            </React.Fragment>
            
        )
    }
}

