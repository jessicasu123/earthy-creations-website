import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Artworks from './pages/Artworks/Artworks';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Artists from './pages/Artists';
import Blog from './pages/Blog';
import Cart from './pages/Cart/Cart';
import Exhibits from './pages/Exhibits';
import ArtworkDetails from './pages/ArtworkDetails/ArtworkDetails';
import Footer from './components/Footer/Footer';
import Team from './pages/Team/Team';

function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Switch>
        <Route path="/about" component={About}></Route>
        <Route path="/team" component={Team}></Route>
        <Route path="/artists" component={Artists}></Route>
        <Route path="/shop" component={Artworks}></Route>
        <Route path="/details" component={ArtworkDetails}></Route>
        <Route path="/blog" component={Blog}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/exhibits" component={Exhibits}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
