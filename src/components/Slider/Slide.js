import React, { Component } from 'react';
import "./Slide.css"
import {Redirect} from 'react-router-dom';

export default class Slide extends Component {
    constructor(props){
        super(props);

        this.state = {
            redirect: false,
            link: '/exhibits'
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        if(this.props.type === "shop"){
            this.setState({
                link: '/shop'
            });
        }
        else if(this.props.type === "exhibit"){
            this.setState({
                link: '/exhibits/' + this.props.text
            });
        }
    }

    handleClick(event){
        event.preventDefault();

        this.setState({
            redirect: true
        });
    }

    render() {
        // const styling = {
        //     backgroundImage: "url(" + this.props.content + ")",
        //     width: this.props.width + "vw"
        // }
        var className = "slide";
        // if(this.props.content.split("/")[3].split(".")[0] === "slide_1"){
        //     className += " slide1";
        // }
        return (
            <React.Fragment>
                {this.state.redirect ?
                    <Redirect to={this.state.link} />
                    :
                    <div className={className}>
                        <img src={this.props.content} alt="slide" onClick={this.handleClick} />
                    </div>
                }
            </React.Fragment>
        );
    }
}
