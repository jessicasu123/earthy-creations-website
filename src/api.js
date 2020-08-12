
var contentful = require('contentful');
var client = contentful.createClient({
    space: "7vckoyge62su",
    accessToken: "zpvytqz4qKh306Me6gyA3XEitF8nklsBPREm4MjmC1s",
});

async function getArtworks(numArtworks) {
    let artworksFetch;
    await client.getEntries({
        content_type: "artwork",
        limit: 12,
        skip: numArtworks,
    }).then((response) => {
        artworksFetch = response.items;
        artworksFetch = artworksFetch.map((item) => {
            const { id, title, price, artistName, category, priceRange, materials, materialsDescription, size, status, exhibitDescription } = item.fields;
            // const { id } = item.sys;
            const image = item.fields.image.fields.file.url;
            return { title, artistName, price, id, image, category, priceRange, materials, materialsDescription, size, status, exhibitDescription };
        });
    });
    return artworksFetch;
}

async function getExhibits(){
    let exhibitsFetch;
    await client.getEntries({
        content_type: "exhibits"
    }).then((response) => {
        exhibitsFetch = response.items;
        exhibitsFetch = exhibitsFetch.map((item) => {
            const {name, artworks, date, id, description} = item.fields;
            // const {id} = item.sys;
            const image = item.fields.image.fields.file.url;
            const slideImages = [];
            item.fields.slideImages.forEach((image, i) => {
                slideImages.push(image.fields.file.url);
            });
            return {name, artworks, date, id, image, slideImages, description};
        });
    });
    return exhibitsFetch;
}

export {getArtworks, getExhibits}
