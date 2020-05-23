import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom"; 
import NavBar from './components/NavBar'; 
import Artworks from './components/Artworks'; 
import About from './components/About'; 
import Artists from './components/Artists'; 
import Blog from './components/Blog'; 
import Cart from './components/Cart'; 
import Exhibits from './components/Exhibits'; 
import ArtworkDetails from './components/ArtworkDetails'; 


function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Switch>
        <Route path="/about" component={About}></Route>
        <Route path="/artists" component={Artists}></Route>
        <Route path="/shop" component={Artworks}></Route>
        <Route path="/details" component={ArtworkDetails}></Route>
        <Route path="/blog" component={Blog}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/exhibits" component={Exhibits}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
