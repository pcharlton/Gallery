import React, { Component } from 'react';
import ArtworkService from '../services/ArtworkService';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import 'swiper/swiper-bundle.css';

class SwipeArtworkComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
                artworks: [],
                slides: []
        }

    }

    componentDidMount()
    {
       console.log('here0:');

       ArtworkService.getArtworks().then((res) => {
        var slides1 = new Array();
        res.data.map((artwork, index) => {
            slides1.push(<SwiperSlide key={index}><img alt="Artwork" src={artwork.url}/></SwiperSlide>)
        });
        this.setState( { artworks: res.data, slides: slides1 });
            console.log('here1:', this.state.artworks);
            console.log('here2:', this.state.slides);

        });
            console.log('here3:', this.state.artworks);
            console.log('here4:', this.state.slides);
            SwiperCore.use([Navigation, Pagination]);
    }

    render() {
        if (!this.state.artworks.length) {
            return <></>
        }

            console.log('here5:', this.state.slides);
            console.log('here6:', this.state.artworks);

        return (
        <Swiper id="main" navigation       spaceBetween={50}
                                           slidesPerView={'auto'}
                                           onSlideChange={() => console.log('slide change')}
                                           onSwiper={(swiper) => console.log(swiper)}>
                    {
                        this.state.artworks.map((artwork, index) =>
                             <SwiperSlide key={index} tag="li"><img alt="Artwork" src={artwork.url}/></SwiperSlide>
                        )
                    }


      <SwiperSlide>Slide 2</SwiperSlide>
     {/*} <SwiperSlide>Slide 2</SwiperSlide>
     <SwiperSlide>Slide 3</SwiperSlide>{*/}

    </Swiper>


        )
    }
}

export default SwipeArtworkComponent
