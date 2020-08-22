import React, { Component } from 'react';
import './Exhibits.css';
import Title from '../../components/Title/Title';
import Slider from '../../components/Slider/Slider';
import {getExhibits} from '../../api.js';

/**
 * Exhibits page.
 * Responsible for rendering a Slider that displays all open exhibits.
 * Each slide on the Exhibits page links to an Exhibit.
 *
 * State:
 * - images: images of each open exhibit
 * - names: name (in all uppercase) of each open exhibit
 * - ids: unique id of all open exhibits
 * - dates: dates of all open exhibits
 */
export default class Exhibits extends Component {
    constructor(props){
        super(props);

        this.state = {
            images: [],
            names: [],
            ids: [],
            dates: []
        }
    }

    componentDidMount(){
        var temp;
        // var tempExhibits = [];
        var tempImages = [];
        var tempNames = [];
        var tempDates = [];
        var tempIDs = [];
        getExhibits().then((response) => {
            temp = response;
            temp.forEach((item, i) => {
                // tempExhibits.push(<Exhibit key={i} name={item.name} id={item.id} img={item.image} date={item.date.split("T")[0]} artworks={item.artworks} />);
                tempIDs.push(item.id);
                tempImages.push(item.image);
                tempNames.push(item.name.toUpperCase());
                tempDates.push(item.date);
            });
            this.setState({
                images: tempImages,
                names: tempNames,
                ids: tempIDs,
                dates: tempDates
            });
        });
    }

    render() {
        return (
            <div>
                <div className="title">
                    <Title text="EXHIBITIONS" color="yellow" />
                </div>
                <Slider slides={this.state.images} text={this.state.ids} buttonid="exhibitButton" type="exhibit" link={true} names={this.state.names} dates={this.state.dates} />
            </div>
        )
    }
}
