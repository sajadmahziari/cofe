import { Swiper, SwiperSlide } from 'swiper/react';
import foodbanner from './../../assets/images/foodbanner.jpg'
import cake from './../../assets/images/cack.jpg'
import baget from './../../assets/images/baget.jpg'
import makaroni from './../../assets/images/makaroni.jpg'
import vicky from './../../assets/images/vicky.jpg'
import 'swiper/css';
import foodSvg from './../../assets/icon/food-svg.svg'
import { BsFillCupHotFill, BsFillCupFill } from "react-icons/bs";

import { BiCake } from "react-icons/bi";
const Index = () => {
    return (
        <>
            {/* slider main component */}
                <Swiper className='sliderMain'
                    spaceBetween={10}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)} >
                    <SwiperSlide><img src={foodbanner} /></SwiperSlide>
                    <SwiperSlide><img src={foodbanner} /></SwiperSlide>
                    <SwiperSlide><img src={foodbanner} /></SwiperSlide>
                </Swiper>
            {/* itemCategury */}
            <div className="groupCategury">
                <div className="itemCategury">
                    <span><BsFillCupFill /></span>
                    <span>text</span>
                </div>
                <div className="itemCategury">
                    <span><BsFillCupHotFill /></span>
                    <span>text</span>
                </div>
                <div className="itemCategury">
                    <span><BiCake /></span>
                    <span>text</span>
                </div>
                <div className="itemCategury">
                    <span><BiCake /></span>
                    <span>text</span>
                </div>
                <div className="itemCategury">
                    <span><BsFillCupHotFill /></span>
                    <span>text</span>
                </div>
                <div className="itemCategury">
                    <span><BsFillCupFill /></span>
                    <span>text</span>
                </div>


            </div>


            {/* slider categury component */}
            <div className=" d-flex">
                <div className='w-30 d-flex align-items-center justify-content-center flex-direction-col'>
                    <img src={foodSvg}/>
                    <span>پر تقاضاها</span>
                </div>

                <div className='w-70'>
                    <Swiper className='sliderCategury'
                        spaceBetween={5}
                        slidesPerView={4}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)} >
                        <SwiperSlide className='d-flex flex-direction-col'>
                            <img src={cake} />
                            <span>کیک</span>
                        </SwiperSlide>
                        <SwiperSlide className='d-flex flex-direction-col'>
                            <img src={baget} />
                            <span>نان</span>
                        </SwiperSlide>
                        <SwiperSlide className='d-flex flex-direction-col'>
                            <img src={makaroni} />
                            <span>ماکارونی</span>
                        </SwiperSlide>
                        <SwiperSlide className='d-flex flex-direction-col'>
                            <img src={vicky} />
                            <span>غذا</span>
                        </SwiperSlide>
                        <SwiperSlide className='d-flex flex-direction-col'>
                            <img src={cake} />
                            <span>کیک</span>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </>
    );
}

export default Index;