import React, { Component } from 'react'

//so that multiple pages can have access to artworks 
const ArtworkContext = React.createContext(); 
//Provider - gives information
//Consumer - accesses information 
var contentful = require('contentful'); 

class ArtworkProvider extends Component {
    constructor() {
        super(); 
        this.state = {
            artworks:[], 
            detailedArtwork:{}
        }
    }
    componentDidMount() {
        var client = contentful.createClient({
            space: "7vckoyge62su",
            accessToken: "zpvytqz4qKh306Me6gyA3XEitF8nklsBPREm4MjmC1s",
        });
        client.getEntries({
            content_type: "artwork",
        }).then((response) => {
            let artworksFetch = response.items; 
            artworksFetch = artworksFetch.map((item) => {
                const { title, price, artistName } = item.fields;
                const { id } = item.sys;
                const image = item.fields.image.fields.file.url;
                return { title, artistName, price, id, image };
            });
            this.setState({artworks: artworksFetch})
        });
    }

    getArtwork = (id) => {
        const artwork = this.state.artworks.find(item => item.id === id); 
        return artwork; 
    }

    handleDetail = (id) => {
        const artwork = this.getArtwork(id); 
        this.setState({ detailedArtwork: artwork });
        // this.setState(()=> {
        //     return {detailedArtwork:artwork}
        // })
    }; 

    render() {
        return (
            <div>
                <ArtworkContext.Provider value={{
                    ...this.state,
                    handleDetail: this.handleDetail
                }}>
                    {this.props.children}
                </ArtworkContext.Provider>
            </div>
        )
    }
}

const ArtworkConsumer = ArtworkContext.Consumer; 

export { ArtworkProvider, ArtworkConsumer}; 

