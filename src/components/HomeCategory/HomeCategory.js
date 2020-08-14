import React, { Component } from 'react';
import './HomeCategory.css';
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
