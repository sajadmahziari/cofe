import { useState } from 'react';
import IceTee from './../../assets/images/drinkCold/IceTee.webp';
import appleJuse from './../../assets/images/drinkCold/appleJuse.jpg';
import drinkJuse from './../../assets/images/drinkCold/drinkJuse.webp';
import iceCofe from './../../assets/images/drinkCold/iceCofe.jpg';
import iceMoka from './../../assets/images/drinkCold/iceMoka.jpg';
import mohito from './../../assets/images/drinkCold/mohito.jpg';
import orangeJuse from './../../assets/images/drinkCold/orangeJuse.jpeg';
import { Link } from 'react-router-dom';

const Products = ({ closePopUp }) => {
    const [categury] = useState([
        { price:1000, name: "چایی سرد", img: IceTee, id: 1 },
        { price:1000, name: "اب سیب", img: appleJuse, id: 2 },
        { price:1000, name: "آب هندوانه", img: drinkJuse, id: 3 },
        { price:1000, name: "آیس کافه", img: iceCofe, id: 4 },
        { price:1000, name: "آیس موکا", img: iceMoka, id: 5 },
        { price:1000, name: "موهیتو", img: mohito, id: 6 },
        { price:1000, name: "آب پرتقال", img: orangeJuse, id: 7 },
    ])
    return (
        <>
            <span className="popUp" onClick={closePopUp}></span>
            <p className='groupProducts'>نوشیدنی سرد</p>

            <div className="categury">
                {
                    categury.map((cat, index) => {
                        return (
                            <Link to={`product/${cat.id}`} id={cat.id} key={index} className="itemProduct" onClick={() => console.log('ads')}>
                                <img className="imgProduct" src={cat.img} />
                                <span className="nameProduct">{cat.name}</span>
                                <span className="PriceProduct"><span>{cat.price} </span><span>تومان</span></span>
                            </Link>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Products;