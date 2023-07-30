import { Swiper, SwiperSlide } from 'swiper/react';
import foodbanner from './../../assets/images/foodbanner.jpg'
import salad from './../../assets/images/salad.png'
import salad2 from './../../assets/images/salad2.png'
import vicky from './../../assets/images/vicky.png'
import 'swiper/css';
import foodSvg from './../../assets/icon/food-svg.svg';
import offer from './../../assets/images/offer.png'
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
                    <span>نوشیدنی سرد</span>
                </div>
                <div className="itemCategury">
                    <span><BsFillCupHotFill /></span>
                    <span>نوشیدی گرم</span>
                </div>
                <div className="itemCategury">
                    <span><BiCake /></span>
                    <span>کیک</span>
                </div>
                <div className="itemCategury">
                    <span><BiCake /></span>
                    <span>بستنی</span>
                </div>
                <div className="itemCategury">
                    <span><BsFillCupHotFill /></span>
                    <span>ساندویچ</span>
                </div>
                <div className="itemCategury">
                    <span><BsFillCupFill /></span>
                    <span>پیتزا</span>
                </div>
            </div>
            {/* menu online */}
            <div className='d-flex justify-content-center align-items-center'>
                <button className='btnMenu'>مشاهده منو</button>
            </div>

            {/* slider best lunch categury component */}
            <div className=" d-flex">
                <div className='w-30 d-flex align-items-center justify-content-center flex-direction-col'>
                    <img src={foodSvg} />
                    <span className='titleSlider'>برترین غذاها</span>
                </div>

                <div className='w-70'>
                    <Swiper className='sliderCategury'
                        spaceBetween={5}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)} >
                        <SwiperSlide className='d-flex flex-direction-col'>
                            <div className='backMiror'>
                                <img className='imgBest' src={salad} />
                                <div className='boxBottom'>
                                    <span className="nameBest">کیک</span>
                                    <span className='categuryBest'>دسته بندی</span>
                                    <span className='priceBest'>15,000 تومان</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='d-flex flex-direction-col'>
                            <div className='backMiror'>
                                <img className='imgBest' src={salad2} />
                                <div className='boxBottom'>
                                    <span className="nameBest">نان</span>
                                    <span className='categuryBest'>دسته بندی</span>
                                    <span className='priceBest'>15,000 تومان</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='d-flex flex-direction-col'>
                            <div className='backMiror'>
                                <img className='imgBest' src={vicky} />
                                <div className='boxBottom'>
                                    <span className="nameBest">ماکارونی</span>
                                    <span className='categuryBest'>دسته بندی</span>
                                    <span className='priceBest'>15,000 تومان</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='d-flex flex-direction-col'>
                            <div className='backMiror'>
                                <img className='imgBest' src={vicky} />
                                <div className='boxBottom'>
                                    <span className="nameBest">غذا</span>
                                    <span className='categuryBest'>دسته بندی</span>
                                    <span className='priceBest'>15,000 تومان</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='d-flex flex-direction-col'>
                            <div className='backMiror'>
                                <img className='imgBest' src={salad} />
                                <div className='boxBottom'>
                                    <span className="nameBest">کیک</span>
                                    <span className='categuryBest'>دسته بندی</span>
                                    <span className='priceBest'>15,000 تومان</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            {/* slider offer categury component */}
            <div className=" d-flex">
                <div className='w-30 d-flex align-items-center justify-content-center flex-direction-col'>
                    <img src={offer} width={50}/>
                    <span className='titleSlider'>بیشترین تخفیف ها</span>
                </div>

                <div className='w-70'>
                    <Swiper className='sliderCategury'
                        spaceBetween={5}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)} >
                        <SwiperSlide className='d-flex flex-direction-col'>
                            <div className='backMiror'>
                                <img className='imgBest' src={salad} />
                                <div className='boxBottom'>
                                    <span className="nameBest">کیک</span>
                                    <span className='categuryBest'>دسته بندی</span>
                                    <div className='unitPrice'>
                                        <span className='mainPrice'>15,000 تومان</span>
                                        <span className='priceBest'>12,500 تومان</span>
                                    </div>
                                    <span className='offer'>8%</span>
                                </div>
                            </div>
                        </SwiperSlide>
                       
                        <SwiperSlide className='d-flex flex-direction-col'>
                            <div className='backMiror'>
                                <img className='imgBest' src={vicky} />
                                <div className='boxBottom'>
                                    <span className="nameBest">کیک</span>
                                    <span className='categuryBest'>دسته بندی</span>
                                    <div className='unitPrice'>
                                        <span className='mainPrice'>15,000 تومان</span>
                                        <span className='priceBest'>12,500 تومان</span>
                                    </div>
                                    <span className='offer'>5%</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='d-flex flex-direction-col'>
                            <div className='backMiror'>
                                <img className='imgBest' src={salad2} />
                                <div className='boxBottom'>
                                    <span className="nameBest">کیک</span>
                                    <span className='categuryBest'>دسته بندی</span>
                                    <div className='unitPrice'>
                                        <span className='mainPrice'>15,000 تومان</span>
                                        <span className='priceBest'>12,500 تومان</span>
                                    </div>
                                    <span className='offer'>15%</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='d-flex flex-direction-col'>
                            <div className='backMiror'>
                                <img className='imgBest' src={salad} />
                                <div className='boxBottom'>
                                    <span className="nameBest">کیک</span>
                                    <span className='categuryBest'>دسته بندی</span>
                                    <div className='unitPrice'>
                                        <span className='mainPrice'>15,000 تومان</span>
                                        <span className='priceBest'>12,500 تومان</span>
                                    </div>
                                    <span className='offer'>4%</span>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>



 


        </>
    );
}

export default Index;