import React, { Component } from 'react';
import Title from '../../components/Title/Title';
import './HomeCategory.css';
import Slider from '../../components/Slider/Slider';
import slide1 from '../../images/slide_1.jpg';
import slide2 from '../../images/slide_2.jpg';
import slide3 from '../../images/slide_3.jpg';
import slide4 from '../../images/slide_4.jpg';
import CenterParagraph from '../../components/CenterParagraph/CenterParagraph';
import {Redirect} from 'react-router-dom';

export default class HomeCategory extends Component {
    constructor(props){
        super(props);

        this.state = {
            redirect: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        this.setState({
            redirect: true
        });
    }

    render() {
        const styling = {
            backgroundImage: "url(" + this.props.image + ")"
        }
        const splitText = this.props.text.split(' ');
        var toSend = '';
        // console.log(splitText);
        splitText.forEach((item, i) => {
            toSend += item[0] + item.slice(1).toLowerCase()
            toSend += ' ';
        });

        return (
            <div>
            {!this.state.redirect ?
                <div style={styling} className="homeCategory" onClick={this.handleClick}>
                    <div>
                        {this.props.text}
                    </div>
                </div>
                :
                <Redirect to={{
                    pathname: "/shop",
                    state: { category: (toSend.trim()) }
                }}/>
            }
            </div>
        )
    }
}
