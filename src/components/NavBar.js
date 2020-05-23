import React, { Component } from 'react'; 
import {Link} from 'react-router-dom'; 

export default class NavBar extends Component {
    render() {
        return (
            <div className="container">
                <nav>
                    <ul>
                        <li><Link to="/">Earthy Creations</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/artists">Artists</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/exhibits">Exhibits</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
