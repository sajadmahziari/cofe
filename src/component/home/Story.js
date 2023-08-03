import { Swiper, SwiperSlide } from 'swiper/react';
import cofe from './../../assets/images/story/cofe.png'
import drink from './../../assets/images/story/drink.avif'
import freid from './../../assets/images/story/freid.jpg'
import gpFrends from './../../assets/images/story/gpFrends.jpg'
import hamber from './../../assets/images/story/hamber.jpg'
import milk from './../../assets/images/story/milk.webp'
import pizza from './../../assets/images/story/pizza.avif'
import spageti from './../../assets/images/story/spageti.jpg'
import { useState } from 'react';

const Story = () => {


    const [story, setStory] = useState([])
    const [show, setShow] = useState(false)

    const [imgStory] = useState([
        { src: cofe, id: 1 },
        { src: drink, id: 2 },
        { src: freid, id: 3 },
        { src: gpFrends, id: 4 },
        { src: hamber, id: 5 },
        { src: milk, id: 6 },
        { src: pizza, id: 7 },
        { src: spageti, id: 8 },
    ])


    const showStory = (data) => {
        setStory(data);
        setShow(true);
    }
    const closePopUp = () => {
       setShow(false)
    }

    return (
        <>
            {show&&<div><span className='popUp' onClick={closePopUp}></span><img className='centerCenter' src={`${story.src}`}/></div>}
            <Swiper className='sliderStory'
                spaceBetween={5}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)} >
                {
                    imgStory.map((img, index) => {
                        return (
                            <SwiperSlide key={index} >
                                <img className='storyImage' src={img.src} onClick={() => showStory(img)} />
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </>
    );
}

export default Story;