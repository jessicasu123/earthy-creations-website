import React, { Component } from 'react';
import './Exhibition.css';
import exhibition from '../../images/exhibition.jpg';
import {Redirect} from 'react-router-dom';

/**
 * This component is responsible for rendering the exhibition section,
 * on the home page and linking to the corresponding exhibition.
 *
 * This will be used on the Home page to display a featured
 * exhibition.
 *
 * Props:
 * - none
 */
export default class Exhibition extends Component {
    constructor(props){
        super(props);

        this.state = {
            redirect: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        event.preventDefault();

        this.setState({
            redirect: true
        });
    }

    render() {
        var exhibitionStyle = {
            backgroundImage: 'url(' + exhibition + ')'
        }
        return (
            <React.Fragment>
                {this.state.redirect ?
                    <Redirect to="/exhibits/shatteredearth" />
                    :
                    <div className="exhibition">
                        <div className="exhibitionWrapper">
                            <div className="exhibitionBox"></div>
                            <div style={exhibitionStyle} className="exhibitionImage"></div>
                        </div>
                        <div className="exhibitionName">
                            <p className="exhibitions">EXHIBITIONS</p>
                            <p className="exhibitionsName" onClick={this.handleClick}>Shattered Earth</p>
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}
