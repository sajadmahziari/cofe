import { Swiper, SwiperSlide } from 'swiper/react';
import offer from './../../assets/images/offer.png'
import { Link } from 'react-router-dom';

const SliderTwo = ({ sliderOffer }) => {
    return (
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
                    {sliderOffer.map((cat, index) => {
                        return (
                            <SwiperSlide className='d-flex flex-direction-col' key={index} >
                                <Link to={`product/${cat.id}`} className='backMiror'>
                                    <img className='imgBest' src={`http://panel.saadcoffee.ir/img/products/${cat.image}`} />
                                    <div className='boxBottom'>
                                        <span className="nameBest">{cat.title}</span>
                                        <div className='unitPrice'>
                                            <span className='mainPrice'>{cat.price}</span>
                                            <span className='priceBest'>{cat.discount_price} تومان</span>
                                        </div>
                                        <span className='offer'>{parseInt(((cat.price - cat.discount_price) * 100) / cat.price)}%</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                         )
                    })}
                </Swiper>
            </div>
        </div>
    );
}

export default SliderTwo;