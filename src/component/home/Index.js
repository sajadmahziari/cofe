import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import MainSlider from './MainSlider';
import CateguryList from './CateguryList';
import Menubtn from './MenuBtn';
import SliderTwo from './SliderTwo';
import Story from './Story';
const Index = () => {
    const closeCategury=(id)=>{
        // console.log (id)
    }
    return (
        <>
            <Story/>
            <MainSlider />
            <CateguryList closeCategury={()=>closeCategury()} />
            {/* <Menubtn/> */}
            <SliderTwo/>
        </>
    );
}

export default Index;