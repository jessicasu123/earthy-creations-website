import React, { Component } from 'react';
import "./WhiteButton.css";
import {Redirect} from 'react-router-dom';

export default class WhiteButton extends Component {
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
            <div className="whiteButton" id={this.props.buttonid}>
                {this.state.clicked ?
                    <Redirect to={this.props.path} />
                    :
                    <button onClick={this.handleClick}>{this.props.text}</button>
                }
            </div>
        );
    }
}
