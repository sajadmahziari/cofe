import 'swiper/css';
import MainSlider from './MainSlider';
import CateguryList from './CateguryList';
import SliderTwo from './SliderTwo';
import Story from './Story';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Index = () => {
    // story component start
    const [imageStory, setImageStory] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setImageStory(res.data)
            })
            .catch(error => console.log(error));
    }, [])
    // story component end
    // __________________________________________
    // main slideer start
    const [slider, setSlider] = useState([])
    useEffect(() => {
        // http://panel.saadcoffee.ir/api/discount?token=QSBiJF6Rk%26F5%262yLk1%qz^2*Up
        axios.get("http://panel.saadcoffee.ir/api/slider?token=QSBiJF6Rk%26F5%262yLk1%qz^2*Up")
            .then((res) => {
                setSlider(res.data)
            })
            .catch(error => console.log(error) +"category");
    }, [])
    // main slideer end
    // __________________________________________
    // categury start
    const [categury, setCategury] = useState([])
    useEffect(() => {
        axios.get("http://panel.saadcoffee.ir/api/categories?token=QSBiJF6Rk%26F5%262yLk1%qz^2*Up")
            .then((res) => {
                setCategury(res.data)
            })
            .catch(error => console.log(error +"category"));
    }, [])
    // categury end
    // __________________________________________
    const [sliderOffer, setSliderOffer] = useState([])
    useEffect(() => {
        axios.get("http://panel.saadcoffee.ir/api/discount?token=QSBiJF6Rk%26F5%262yLk1%qz^2*Up")
            .then((res) => {
                setSliderOffer(res.data)
            })
            .catch(error => console.log(error));
    }, [])
    return (
        <>
            <Story imageStory={imageStory} />
            <MainSlider slider={slider} />
            <CateguryList categury={categury} />
            {/* <Menubtn/> */}
            <SliderTwo sliderOffer={sliderOffer}/>
        </>
    );
}

export default Index;