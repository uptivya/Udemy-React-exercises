export const getImagen = async() => {

    try {

        const apiKey = 'uY2nQqf8XnQxzRV59adu23pBIqG2Oj0y';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        console.error(error)

        return 'No s\'ha trobat la imatge';
    }
    
    
    
}