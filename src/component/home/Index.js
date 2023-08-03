import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import MainSlider from './MainSlider';
import CateguryList from './CateguryList';
import Menubtn from './MenuBtn';
import SliderTwo from './SliderTwo';
import Story from './Story';
const Index = () => {
    return (
        <>
            <Story/>
            <MainSlider />
            <CateguryList />
            {/* <Menubtn/> */}
            <SliderTwo/>
        </>
    );
}

export default Index;