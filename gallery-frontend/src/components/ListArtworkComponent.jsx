import React, { Component } from 'react'
import ArtworkService from '../services/ArtworkService'

class ListArtworkComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                artworks: []
        }
        this.addArtwork = this.addArtwork.bind(this);
        this.editArtwork = this.editArtwork.bind(this);
        this.deleteArtwork = this.deleteArtwork.bind(this);
    }

    deleteArtwork(id){
        ArtworkService.deleteArtwork(id).then( res => {
            this.setState({artworks: this.state.artworks.filter(artwork => artwork.id !== id)});
        });
    }
    viewArtwork(id){
        this.props.history.push(`/admin/view-artwork/${id}`);
    }
    editArtwork(id){
        this.props.history.push(`/admin/add-artwork/${id}`);
    }

    componentDidMount(){
        ArtworkService.getArtworks().then((res) => {
            this.setState({ artworks: res.data});
        });
    }

    addArtwork(){
        this.props.history.push('/admin/add-artwork/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Artworks List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addArtwork}> Add Artwork</button>
                 </div>
                 <br></br>
                 <div>
                 {
                      this.state.artworks.map(artwork =>
                            <div className="row" key={artwork.id}>
                                 <div className="col-sm-4"><img className="list-image" alt="Artwork" src={artwork.url}/></div>
                                 <div className="col-sm-4">{artwork.title}</div>
                                 <div className="col-sm-4">
                                     <button onClick={ () => this.editArtwork(artwork.id)} className="btn btn-info">Update </button>
                                     <button style={{marginLeft: "10px"}} onClick={ () => this.deleteArtwork(artwork.id)} className="btn btn-danger">Delete </button>
                                     <button style={{marginLeft: "10px"}} onClick={ () => this.viewArtwork(artwork.id)} className="btn btn-info">View </button>
                                 </div>
                        </div>)
                 }
                 </div>
            </div>
        )
    }
}

export default ListArtworkComponent
