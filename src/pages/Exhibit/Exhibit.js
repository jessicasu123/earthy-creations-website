import React, { Component } from 'react';
import './Exhibit.css';
import Title from '../../components/Title/Title';
import Slider from '../../components/Slider/Slider';
import LeftExhibit from '../../components/LeftExhibit/LeftExhibit';
import RightExhibit from '../../components/RightExhibit/RightExhibit';
import {getArtworks, getExhibits} from '../../api.js';

export default class Exhibits extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            artworks: [],
            date: '',
            id: '',
            slideImages: [],
            shrink: false
        }
    }

    componentDidMount(){
        var artworks = [];
        var slideImages = [];
        var target = window.location.href.split('/')[window.location.href.split('/').length - 1];
        getExhibits().then((response) => {
            response.forEach((item, i) => {
                if(item.id === target){
                    this.setState({
                        id: item.id,
                        date: item.date,
                        name: item.name,
                        slideImages: item.slideImages
                    });
                    artworks = item.artworks;
                }
            });
        }).then(() => {
            var tempArtworks = [];
            getArtworks().then((responses) => {
                responses.forEach((response, i) => {
                    if(artworks.includes(response.title)){
                        tempArtworks.push(response);
                    }
                });
                this.setState({
                    artworks: tempArtworks
                });
            }).then(() => {
                window.addEventListener("resize", this.resize.bind(this));
                this.resize();
            });
        });
    }

    resize() {
        this.setState({
            shrink: window.innerWidth <= 928
        });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
    }

    render() {
        return (
            <div className="exhibit">
                <div className="title">
                    <Title text={this.state.name.toUpperCase()} color="yellow" />
                </div>
                <Slider slides={this.state.slideImages} buttonid="individualExhibitButton" type="individualExhibit" link={false} />
                <div>
                    {this.state.artworks.map((artwork, i) => (
                        !this.state.shrink && i % 2 === 0 ?
                            <RightExhibit key={i} artwork={artwork} />
                            :
                            <LeftExhibit key={i} artwork={artwork} />
                    ))}
                </div>
            </div>
        )
    }
}
