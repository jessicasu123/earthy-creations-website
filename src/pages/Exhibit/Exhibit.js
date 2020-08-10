import React, { Component } from 'react';
import './Exhibit.css';
import {getArtworks, getExhibits} from '../../api.js';

export default class Exhibits extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            artworks: '',
            date: '',
            id: ''
        }
    }

    componentDidMount(){
        var artworks = [];
        var target = window.location.href.split('/')[window.location.href.split('/').length - 1];
        getExhibits().then((response) => {
            response.forEach((item, i) => {
                if(item.id === target){
                    this.setState({
                        id: item.id,
                        date: item.date,
                        artworks: item.artworks,
                        name: item.name
                    });
                    artworks = item.artworks;
                }
            });
        }).then(() => {
            getArtworks().then((responses) => {
                responses.forEach((response, i) => {
                    if(artworks.includes(response.title)){
                        // this.setState({
                        //     artworks: [...this.state.artworks, response]
                        // });
                        console.log(response);
                    }
                });
            });
        });
    }

    render() {
        return (
            <div className="exhibit">
            </div>
        )
    }
}
