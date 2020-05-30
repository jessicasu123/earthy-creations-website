import React, { Component } from 'react'; 
import { getArtworks } from '../../api.js'; 

//so that multiple pages can have access to artworks 
const ArtworkContext = React.createContext(); 
//Provider - gives information
//Consumer - accesses information 

class ArtworkProvider extends Component {
    constructor() {
        super(); 
        this.state = {
            allArtworks:[], 
            artworks:[], 
            detailedArtwork:{}
        }
    }
    componentDidMount() {
        getArtworks().then((response) => {
            let artworksFetch = response; 
            this.setState({
                artworks: artworksFetch,
                allArtworks: artworksFetch
            }); 
        })
    }

    getArtwork = (id) => {
        const artwork = this.state.artworks.find(item => item.id === id); 
        return artwork; 
    }

    updateArtworks = (newArtworks) => {
        this.setState({artworks: newArtworks}); 
    }

    handleDetail = (id) => {
        const artwork = this.getArtwork(id); 
        this.setState({ detailedArtwork: artwork });
    }; 

    render() {
        return (
            <div>
                <ArtworkContext.Provider value={{
                    ...this.state,
                    handleDetail: this.handleDetail, 
                    updateArtworks: this.updateArtworks
                }}>
                    {this.props.children}
                </ArtworkContext.Provider>
            </div>
        )
    }
}

const ArtworkConsumer = ArtworkContext.Consumer; 

export { ArtworkProvider, ArtworkConsumer}; 

