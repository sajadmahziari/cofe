import { Swiper, SwiperSlide } from 'swiper/react';

const MainSlider = ({slider}) => {
    return (
        <Swiper className='sliderMain'
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)} >
            {slider.map((slid,index)=>{
                return <SwiperSlide key={index}><img src={`http://panel.saadcoffee.ir/img/sliders/${slid.image}`} /></SwiperSlide>
            })}
        </Swiper>

    );
}

export default MainSlider;