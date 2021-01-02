import React, { Component } from 'react'
import ArtworkService from '../services/ArtworkService';

class CreateArtworkComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            title: '',
            url: '',
            notes: ''
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeUrlHandler = this.changeUrlHandler.bind(this);
        this.changeNotesHandler = this.changeNotesHandler.bind(this);
        this.saveOrUpdateArtwork = this.saveOrUpdateArtwork.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            ArtworkService.getArtworkById(this.state.id).then( (res) =>{
                let artwork = res.data;
                this.setState({title: artwork.title, url: artwork.url, notes : artwork.notes
                });
            });
        }        
    }
    saveOrUpdateArtwork = (e) => {
        e.preventDefault();
        let artwork = {title: this.state.title, url: this.state.url, notes: this.state.notes};
        console.log('artwork => ' + JSON.stringify(artwork));

        // step 5
        if(this.state.id === '_add'){
            ArtworkService.createArtwork(artwork).then(res =>{
                this.props.history.push('/admin/artworks');
            });
        }else{
            ArtworkService.updateArtwork(artwork, this.state.id).then( res => {
                this.props.history.push('/admin/artworks');
            });
        }
    }
    
    changeTitleHandler= (event) => {
        this.setState({title: event.target.value});
    }

    changeUrlHandler= (event) => {
        this.setState({url: event.target.value});
    }

    changeNotesHandler= (event) => {
        this.setState({notes: event.target.value});
    }

    cancel(){
        this.props.history.push('/admin/artworks');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Artwork</h3>
        }else{
            return <h3 className="text-center">Update Artwork</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Title: </label>
                                            <input placeholder="Title" name="title" className="form-control" 
                                                value={this.state.title} onChange={this.changeTitleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> URL: </label>
                                            <input placeholder="Url" name="url" className="form-control" 
                                                value={this.state.url} onChange={this.changeUrlHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Notes: </label>
                                            <input placeholder="Notes" name="notes" className="form-control" 
                                                value={this.state.notes} onChange={this.changeNotesHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateArtwork}>Save</button>
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

export default CreateArtworkComponent
