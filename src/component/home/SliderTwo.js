
import foodSvg from './../../assets/icon/food-svg.svg';
import { Swiper, SwiperSlide } from 'swiper/react';

import salad from './../../assets/images/salad.png'
import salad2 from './../../assets/images/salad2.png'
import vicky from './../../assets/images/vicky.png'
import offer from './../../assets/images/offer.png'

const SliderTwo = () => {
    return (
        <>


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
            <div className=" d-flex">
                <div className='w-30 d-flex align-items-center justify-content-center flex-direction-col'>
                    <img src={offer} width={50} />
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

export default SliderTwo;