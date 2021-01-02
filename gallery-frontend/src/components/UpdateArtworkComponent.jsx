import React, { Component } from 'react'
import ArtworkService from '../services/ArtworkService';

class UpdateArtworkComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            url: '',
            notes: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateArtwork = this.updateArtwork.bind(this);
    }

    componentDidMount(){
        ArtworkService.getArtworkById(this.state.id).then( (res) =>{
            let artwork = res.data;
            this.setState({title: artwork.title, url: artwork.url, notes : artwork.notes
            });
        });
    }

    updateArtwork = (e) => {
        e.preventDefault();
        let artwork = {title: this.state.title, url: this.state.url, notes: this.state.notes};
        console.log('artwork => ' + JSON.stringify(artwork));
        console.log('id => ' + JSON.stringify(this.state.id));
        ArtworkService.updateArtwork(artwork, this.state.id).then( res => {
            this.props.history.push('/artworks');
        });
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({title: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({url: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({notes: event.target.value});
    }

    cancel(){
        this.props.history.push('/artworks');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Artwork</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Title: </label>
                                            <input placeholder="Title" name="title" className="form-control" 
                                                value={this.state.title} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Url: </label>
                                            <input placeholder="Url" name="url" className="form-control" 
                                                value={this.state.url} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Notes: </label>
                                            <input placeholder="Notes" name="notes" className="form-control"
                                                value={this.state.notes} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateArtwork}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateArtworkComponent
