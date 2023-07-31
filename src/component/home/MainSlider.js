import { Swiper, SwiperSlide } from 'swiper/react';
import foodbanner from './../../assets/images/foodbanner.jpg'

const MainSlider = () => {
    return (
        <Swiper className='sliderMain'
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)} >
            <SwiperSlide><img src={foodbanner} /></SwiperSlide>
            <SwiperSlide><img src={foodbanner} /></SwiperSlide>
            <SwiperSlide><img src={foodbanner} /></SwiperSlide>
        </Swiper>

    );
}

export default MainSlider;