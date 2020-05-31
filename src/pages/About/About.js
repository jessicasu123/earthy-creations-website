import React, { Component } from 'react';
import './About.css';
import backgroundImage from '../../images/about-background-image.png';

export default class About extends Component {
    render() {
        return (
            <div>
                <img src= {backgroundImage} alt="backgroundImage" className="backgroundImage"/>

                <div className = "backgroundBox">
                    <p className = "title">EARTHY CREATIONS</p>
                    <p className = "mission">Our Mission is to help people see that 
                    the things they use once don’t just disappear once they are thrown in the trash. 
                    Rather, they remain and can be reused or even re-invented as beautiful objects. 
                    We help aspiring artists, primarily college students, support their dream by 
                    reaching a broader audience.</p>
                    
                </div>
                

            </div>
            
           
           
            
        )
    }
}
