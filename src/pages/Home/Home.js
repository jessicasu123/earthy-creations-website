import React, { Component } from 'react';
import Title from '../../components/Title/Title';
import './Home.css';
import Slider from '../../components/Slider/Slider';
import slide1 from '../../images/slide_1.jpg';
import slide2 from '../../images/slide_2.jpg';
import slide3 from '../../images/slide_3.jpg';
import slide4 from '../../images/slide_4.jpg';
import CenterParagraph from '../../components/CenterParagraph/CenterParagraph';
import HomeCategory from '../../components/HomeCategory/HomeCategory';
import sculptures from '../../images/sculptures.png';
import roomdecor from '../../images/roomdecor.png';
import paintings from '../../images/paintings.png';
import Materials from '../../components/Materials/Materials';
import Spotlight from '../../components/Spotlight/Spotlight';
import Exhibition from '../../components/Exhibition/Exhibition';

export default class Home extends Component {
    render() {
        const images = [
            slide1,
            slide2,
            slide3,
            slide4
        ]
        return (
            <div className="home">
                <Slider slides={images} />
                <div className="title">
                    <Title text="OUR MISSION" color="green" />
                </div>
                <div className="centerParagraph">
                    <CenterParagraph fontSize="24" color="gray" text="Our mission is to get people across the nation thinking and talking about creative ways to repurpose recyclable goods while also helping young, aspiring artists reach their creative dreams."/>
                </div>
                <div className="homeCategories">
                    <HomeCategory image={sculptures} text="SCULPTURE" />
                    <HomeCategory image={roomdecor} text="ROOM DECOR" />
                    <HomeCategory image={paintings} text="PAINTINGS" />
                </div>
                <div className="materials">
                    <Materials />
                </div>
                <Spotlight />
                <Exhibition />
            </div>
        )
    }
}
