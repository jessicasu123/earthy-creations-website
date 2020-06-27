import React, { Component } from 'react';
import "./ShopButton.css";
import {Redirect} from 'react-router-dom';

export default class ShopButton extends Component {
    constructor(props){
        super(props);

        this.state = {
            clicked: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        event.preventDefault();

        this.setState({
            clicked: true
        });
    }

    render() {
        return (
            <div className="shopButton">
                {this.state.clicked ?
                    <Redirect to="/shop" />
                    :
                    <button onClick={this.handleClick}>Shop Now</button>
                }
            </div>
        );
    }
}
