import React, { Component } from 'react'
import logo from '../images/earthy-creations-logo.png';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <hr className="footer-line"></hr>
                <img src={logo} className="footer-logo" />
                <p className="footer-text">Duke University, Durham, NC 27705</p>
                <p className="footer-email">teamearth@earthycreations.org</p>
            </div>
        )
    }
}
