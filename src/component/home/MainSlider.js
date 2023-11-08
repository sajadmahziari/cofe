import { Swiper, SwiperSlide } from 'swiper/react';
import foodbanner from './../../assets/images/foodbanner.jpg'
import { useEffect, useState } from 'react';
import axios from 'axios';

const MainSlider = () => {

    // start get data categury main
    const [slider, setSlider] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setSlider(res.data)
            })
            .catch(error => console.log(error));
    }, [])
    // end get data categury main



    return (
        <Swiper className='sliderMain'
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)} >

            {slider.map((slid)=>{
                return <SwiperSlide><img src={slid.image} /></SwiperSlide>
            })}
        </Swiper>

    );
}

export default MainSlider;