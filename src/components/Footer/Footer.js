import React, { Component } from 'react'
import logo from '../../images/earthy-creations-logo.png';
import './Footer.css'; 

/**
 * This component is responsible for rendering the footer, which includes 
 * the logo, as well as location and contact information for the business.
 */
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <hr className="footer-line"></hr>
                <img src={logo} className="footer-logo" alt="footer-logo"/>
                <p className="footer-text">Duke University, Durham, NC 27705</p>
                <p className="footer-email">teamearth@earthycreations.org</p>
            </div>
        )
    }
}
