import { Swiper, SwiperSlide } from 'swiper/react';
import {useState } from 'react';

const Story = ({imageStory}) => {
    const [story, setStory] = useState([])
    const [show, setShow] = useState(false)
    const showStory = (data) => {
        setStory(data);
        setShow(true);
    }
    const closePopUp = () => {
       setShow(false)
    }
    return (
        <>
            {show&&<div><span className='popUp' onClick={closePopUp}></span><img className='centerCenter' src={`${story.image}`}/></div>}
            <Swiper className='sliderStory'
                spaceBetween={5}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)} >
                {
                    imageStory.map((st, index) => {
                        return (
                            <SwiperSlide key={index} >
                                <img className='storyImage' src={st.image} onClick={() => showStory(st)} />
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </>
    );
}

export default Story;