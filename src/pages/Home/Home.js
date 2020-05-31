import React, { Component } from 'react';
import Title from '../../components/Title/Title';
import './Home.css';
import Slider from '../../components/Slider/Slider';
import slide1 from '../../images/slide_1.jpg';
import slide2 from '../../images/slide_2.jpg';
import slide3 from '../../images/slide_3.jpg';
import slide4 from '../../images/slide_4.jpg';
import CenterParagraph from '../../components/CenterParagraph/CenterParagraph'

export default class Home extends Component {
    render() {
        const images = [
            slide1,
            slide2,
            slide3,
            slide4
        ]
        return (
            <div>
                <Slider slides={images} />
                <div className="title">
                    <Title text="OUR MISSION" color="green" />
                </div>
                <div className="centerParagraph">
                    <CenterParagraph fontSize="18" color="gray" text="We are a group of college students dedicated to making a creative and sustainable marketplace."/>
                </div>
            </div>
        )
    }
}
