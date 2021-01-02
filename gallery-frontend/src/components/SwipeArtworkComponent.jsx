import React, { Component } from 'react';
import ArtworkService from '../services/ArtworkService';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';

import 'swiper/swiper-bundle.css';

class SwipeArtworkComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
                artworks: []
        }

    }

    componentDidMount()
    {

       ArtworkService.getArtworks().then((res) => {
       console.log('here0:');
        this.setState( { artworks: res.data });
        });
            SwiperCore.use([Navigation, Autoplay]);

    }

    render() {
            console.log('here5a:', this.state.artworks.length);
        if (!this.state.artworks.length) {
            console.log('here5b:', this.state.artworks.length);
            return <></>
        }

            console.log('here6:', this.state.artworks.length);

        return (
        <Swiper id="main" navigation  loop autoplay={{ delay: 5000 }}

                                           onSlideChange={() => console.log('slide change')}
                                           onSwiper={(swiper) => console.log(swiper)}>
                    {
                        this.state.artworks.map((artwork, index) =>
                             <SwiperSlide key={index} tag="li"><img alt="Artwork" src={artwork.url}/></SwiperSlide>
                        )
                    }



    </Swiper>


        )
    }
}

export default SwipeArtworkComponent
