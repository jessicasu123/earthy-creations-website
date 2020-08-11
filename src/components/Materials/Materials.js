import React, { Component } from 'react';
import './Materials.css';
import {Redirect} from 'react-router-dom';

export default class Materials extends Component {
    constructor(props){
        super(props);

        this.state = {
            redirect: false,
            toSend: ''
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        event.preventDefault();

        this.setState({
            toSend: event.target.className.substring(0, 1).toUpperCase() + event.target.className.substring(1, event.target.className.length),
            redirect: true
        });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.redirect ?
                    <Redirect to={{
                        pathname: "/shop",
                        state: { category: (this.state.toSend) }
                    }}/>
                    :
                    <React.Fragment>
                        <div className="materialsTop">
                            <div className="paper" onClick={this.handleClick}>PAPER</div>
                            <div className="glass" onClick={this.handleClick}>GLASS</div>
                            <div className="plastic" onClick={this.handleClick}>PLASTIC</div>
                        </div>
                        <div className="materialsBottom">
                            <div className="metal" onClick={this.handleClick}>METAL</div>
                            <div className="wood" onClick={this.handleClick}>WOOD</div>
                        </div>
                        <div className="browseParent">
                            <div className="browseMaterials">
                                BROWSE BY MATERIALS
                            </div>
                        </div>
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }
}
