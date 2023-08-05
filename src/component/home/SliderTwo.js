
import foodSvg from './../../assets/icon/food-svg.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import offer from './../../assets/images/offer.png'
import { useState } from 'react';
import humberger from './../../assets/images/sliderTwo/humberger.png'
import lazania from './../../assets/images/sliderTwo/lazania.png'
import pizza from './../../assets/images/sliderTwo/pizza.png'
import slicePizza from './../../assets/images/sliderTwo/slicePizza.png'
import spageti from './../../assets/images/sliderTwo/spageti.png'
import steak from './../../assets/images/sliderTwo/steak.png'

const SliderTwo = () => {
    const [bestFood] = useState([
        { name: "همبرگر گوشت", price:900000,  img: humberger, to: "humberger" },
        { name: "لازانیا", price:75000,  img: lazania, to: "lazania" },
        { name: "پیتزا", price:160000,  img: pizza, to: "pizza" },
        { name: "پیتزا ۹۰", price:69000, img: slicePizza, to: "slicePizza" },
        { name: "ماکارونی", price:126000,  img: spageti, to: "spageti" },
        { name: "گوشت",  price:111000, img: steak, to: "steak" },
    ])
    const [offers] = useState([
        { divion:10, name: "گوشت",  price:10000, img: steak, to: "steak" },
        { divion:20, name: "پیتزا ۹۰", price:69000, img: slicePizza, to: "slicePizza" },
        { divion:3, name: "لازانیا", price:75000,  img: lazania, to: "lazania" },
        { divion:12, name: "همبرگر گوشت", price:900000,  img: humberger, to: "humberger" },
        { divion:10, name: "ماکارونی", price:126000,  img: spageti, to: "spageti" },
        { divion:50, name: "پیتزا", price:160000,  img: pizza, to: "pizza" },
    ])
    return (
        <>
            <div className=" d-flex">
                <div className='w-25 d-flex align-items-center justify-content-center flex-direction-col'>
                    <img src={foodSvg} />
                    <span className='titleSlider'>برترین غذاها</span>
                </div>

                <div className='w-75'>
                    <Swiper className='sliderCategury'
                        spaceBetween={5}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)} >
                        {bestFood.map((cat,index) => {
                            return (
                                <SwiperSlide className='d-flex flex-direction-col' key={index}>
                                    <div className='backMiror'>
                                        <img className='imgBest' src={cat.img} />
                                        <div className='boxBottom'>
                                            <span className="nameBest">{cat.name}</span>
                                            <span className='priceBest'>{cat.price}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
            <div className=" d-flex">
                <div className='w-25 d-flex align-items-center justify-content-center flex-direction-col'>
                    <img src={offer} width={50} />
                    <span className='titleSlider'>بیشترین تخفیف ها</span>
                </div>

                <div className='w-75'>
                    <Swiper className='sliderCategury'
                        spaceBetween={5}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)} >
                    

                        {offers.map((cat,index) => {
                            return (
                                <SwiperSlide className='d-flex flex-direction-col' key={index}>
                                <div className='backMiror'>
                                    <img className='imgBest' src={cat.img} />
                                    <div className='boxBottom'>
                                        <span className="nameBest">{cat.name}</span>
                                        <div className='unitPrice'>
                                            <span className='mainPrice'>{cat.price}</span>
                                            <span className='priceBest'>{cat.price-(cat.price*(cat.divion/100))} تومان</span>
                                        </div>
                                        <span className='offer'>{cat.divion}%</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default SliderTwo;