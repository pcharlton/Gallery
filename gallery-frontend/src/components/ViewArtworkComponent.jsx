import React, { Component } from 'react'
import ArtworkService from '../services/ArtworkService'

class ViewArtworkComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            artwork: {}
        }
    }

    componentDidMount(){
        ArtworkService.getArtworkById(this.state.id).then( res => {
            this.setState({artwork: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Artwork Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Artwork Title: </label>
                            <div> { this.state.artwork.title }</div>
                        </div>
                        <div className = "row">
                            <label> Artwork Url: </label>
                            <div> { this.state.artwork.url }</div>
                        </div>
                        <div className = "row">
                            <label> Artwork Notes: </label>
                            <div> { this.state.artwork.notes }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewArtworkComponent
