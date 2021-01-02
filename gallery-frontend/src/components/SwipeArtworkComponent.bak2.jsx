import React, { Component } from 'react';
import ArtworkService from '../services/ArtworkService';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import 'swiper/swiper-bundle.css';

class SwipeArtworkComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                artworks: []
        }

    }

    componentDidMount(){
        ArtworkService.getArtworks().then((res) => {
            this.setState({ artworks: res.data});
        });
    }

    render() {
     //   SwiperCore.use([Navigation, Pagination]);

        return (
/*            <Swiper id="main" tag="section" wrapperTag="ul" navigation pagination>
                    {
                        this.state.artworks.map((artwork, index) =>
                             <SwiperSlide key={index} tag="li"><img alt="Artwork" src={artwork.url}/></SwiperSlide>
                        )
                    }
            </Swiper>*/
            <Swiper id="main" navigation>
                    {
                        this.state.artworks.map((artwork, index) =>
                             <SwiperSlide key={index}><img alt="Artwork" src={artwork.url}/></SwiperSlide>
                        )
                    }
            </Swiper>


        )
    }
}

export default SwipeArtworkComponent
