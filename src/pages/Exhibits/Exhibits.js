import React, { Component } from 'react';
import './Exhibits.css';
import Title from '../../components/Title/Title';
import Exhibit from '../../components/Exhibit/Exhibit';
import Slider from '../../components/Slider/Slider';
import {getExhibits} from '../../api.js';

export default class Exhibits extends Component {
    constructor(props){
        super(props);

        this.state = {
            exhibits: [],
            images: [],
            names: [],
            ids: []
        }
    }

    componentDidMount(){
        var temp;
        // var tempExhibits = [];
        var tempImages = [];
        var tempNames = [];
        var tempIDs = [];
        getExhibits().then((response) => {
            temp = response;
            temp.forEach((item, i) => {
                // tempExhibits.push(<Exhibit key={i} name={item.name} id={item.id} img={item.image} date={item.date.split("T")[0]} artworks={item.artworks} />);
                tempIDs.push(item.id);
                tempImages.push(item.image);
                var tempDate = item.date.split('T')[0];
                tempNames.push(item.name.toUpperCase() + '  -  ' + tempDate.replace(/-/g, '/'));
            });
            this.setState({
                images: tempImages,
                names: tempNames,
                ids: tempIDs
            });
        });
    }

    render() {
        return (
            <div>
                <div className="title">
                    <Title text="EXHIBITIONS" color="yellow" />
                </div>
                <Slider slides={this.state.images} text={this.state.ids} buttonid="exhibitButton" type="exhibit" />
            </div>
        )
    }
}
