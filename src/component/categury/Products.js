import { useState } from 'react';
import IceTee from './../../assets/images/drinkCold/IceTee.webp';
import appleJuse from './../../assets/images/drinkCold/appleJuse.jpg';
import drinkJuse from './../../assets/images/drinkCold/drinkJuse.webp';
import iceCofe from './../../assets/images/drinkCold/iceCofe.jpg';
import iceMoka from './../../assets/images/drinkCold/iceMoka.jpg';
import mohito from './../../assets/images/drinkCold/mohito.jpg';
import orangeJuse from './../../assets/images/drinkCold/orangeJuse.jpeg';
import { BiTrash } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Products = ({ closePopUp }) => {
    const [counter, setCounter] = useState(0)

    const [categury, setCategury] = useState([
        { quantity: 0, price: 1000, name: "چایی سرد", img: IceTee, id: 1 },
        { quantity: 0, price: 1000, name: "اب سیب", img: appleJuse, id: 2 },
        { quantity: 0, price: 1000, name: "آب هندوانه", img: drinkJuse, id: 3 },
        { quantity: 0, price: 1000, name: "آیس کافه", img: iceCofe, id: 4 },
        { quantity: 0, price: 1000, name: "آیس موکا", img: iceMoka, id: 5 },
        { quantity: 0, price: 1000, name: "موهیتو", img: mohito, id: 6 },
        { quantity: 0, price: 1000, name: "آب پرتقال", img: orangeJuse, id: 7 },
    ])
    const addquantity = (id) => {
        // setCounter(counter + 1)
        const index = categury.findIndex((p) => p.id == id);
        const select = { ...categury[index] }
        select.quantity++;
        const add = [...categury]
        add[index] = select;
        setCategury(add)


    }
    return (
        <>
            <span className="popUp" onClick={closePopUp}></span>
            <p className='groupProducts'>نوشیدنی سرد</p>
            <div className='boxCenter'>

                <div className="categury">
                    {
                        categury.map((cat, index) => {
                            return (
                                <Link to={`product/${cat.id}`} id={cat.id} key={index} className="itemProduct" onClick={() => console.log('ads')}>
                                    <img className="imgProduct" src={cat.img} />
                                    <span className="nameProduct">{cat.name}</span>
                                    <span className="PriceProduct"><span>{cat.price} </span><span>تومان</span></span>
                                    <div className='boxOperation borderOpration'>
                                        <div className='w-30 text-center' onClick={() => addquantity(cat.id)}>+</div>
                                        <div className='w-30 text-center borderRl'>{cat.quantity}</div>
                                        <div className={counter === 0 ? 'w-30 text-center notAction' : 'w-30 text-center'} onClick={() => setCounter(cat.quantity - 1)}>{cat.quantity > 0 ? "-" : <BiTrash />}</div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>

        </>
    );
}

export default Products;