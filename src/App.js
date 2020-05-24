import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom"; 
import NavBar from './components/NavBar'; 
import Artworks from './components/Artworks'; 
import About from './pages/About'; 
import Artists from './pages/Artists'; 
import Blog from './pages/Blog'; 
import Cart from './pages/Cart'; 
import Exhibits from './pages/Exhibits'; 
import ArtworkDetails from './pages/ArtworkDetails'; 
import Footer from './components/Footer';

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
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
