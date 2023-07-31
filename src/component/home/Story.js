import { Swiper, SwiperSlide } from 'swiper/react';
import foodbanner from './../../assets/images/foodbanner.jpg'

const Story = () => {
    return (
        <>
            <Swiper className='sliderStory'
                spaceBetween={5}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)} >
                <SwiperSlide><img className='storyImage' src={foodbanner} /></SwiperSlide>
                <SwiperSlide><img className='storyImage' src={foodbanner} /></SwiperSlide>
                <SwiperSlide><img className='storyImage' src={foodbanner} /></SwiperSlide>
                <SwiperSlide><img className='storyImage' src={foodbanner} /></SwiperSlide>
                <SwiperSlide><img className='storyImage' src={foodbanner} /></SwiperSlide>
                <SwiperSlide><img className='storyImage' src={foodbanner} /></SwiperSlide>
                <SwiperSlide><img className='storyImage' src={foodbanner} /></SwiperSlide>
                <SwiperSlide><img className='storyImage' src={foodbanner} /></SwiperSlide>
            </Swiper>
        </>
    );
}

export default Story;