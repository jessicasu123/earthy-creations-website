import React, { Component } from 'react'; 
import {Link} from 'react-router-dom'; 
import logo from '../../images/earthy-creations-logo.png';
import cart from '../../images/shopping-cart.png'; 
import './NavBar.css'; 

export default class NavBar extends Component {
    render() {
        return (
            <div className="container">
                <nav>
                    <ul>
                        <Link to="/">
                            <img src= {logo} alt="logo" className="logo"/>
                        </Link>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/team">Meet Our Team</Link></li>
                        <li><Link to="/artists">Artists</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/exhibits">Exhibits</Link></li>
                        <Link to="/cart">
                            <img src={cart} alt="cart" className="cart"/>
                        </Link>
                    </ul>
                </nav>
            </div>
        )
    }
}
