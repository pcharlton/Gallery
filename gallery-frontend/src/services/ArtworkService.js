import axios from 'axios';

const ARTWORK_API_BASE_URL = "http://localhost:8080/api/artworks";

class ArtworkService {
    auth =  {
            username: "admin",
            password: "P@ssw0rd"
    };

    getArtworks(){
        return axios.get(ARTWORK_API_BASE_URL, { auth: this.auth });
    }

    createArtwork(artwork){
        return axios.post(ARTWORK_API_BASE_URL, artwork, { auth: this.auth });
    }

    getArtworkById(artworkId){
        return axios.get(ARTWORK_API_BASE_URL + '/' + artworkId,  { auth: this.auth });
    }

    updateArtwork(artwork, artworkId){
        return axios.put(ARTWORK_API_BASE_URL + '/' + artworkId, artwork, { auth: this.auth });
    }

    deleteArtwork(artworkId){
        return axios.delete(ARTWORK_API_BASE_URL + '/' + artworkId, { auth: this.auth });
    }
}

export default new ArtworkService()