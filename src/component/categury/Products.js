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
    const [showBoxOp, setShowBoxOp] = useState(false)
    const [categury, setCategury] = useState([
        { showBox: false, quantity: 0, price: 1000, name: "چایی سرد", img: IceTee, id: 1 },
        { showBox: false, quantity: 0, price: 1000, name: "اب سیب", img: appleJuse, id: 2 },
        { showBox: false, quantity: 0, price: 1000, name: "آب هندوانه", img: drinkJuse, id: 3 },
        { showBox: false, quantity: 0, price: 1000, name: "آیس کافه", img: iceCofe, id: 4 },
        { showBox: false, quantity: 0, price: 1000, name: "آیس موکا", img: iceMoka, id: 5 },
        { showBox: false, quantity: 0, price: 1000, name: "موهیتو", img: mohito, id: 6 },
        { showBox: false, quantity: 0, price: 1000, name: "آب پرتقال", img: orangeJuse, id: 7 },
    ])
    const addquantity = (id) => {

        const index = categury.findIndex((p) => p.id == id);
        const select = { ...categury[index] }
        select.quantity++;
        const add = [...categury]
        add[index] = select;
        setCategury(add)


    }



    const addProduct = (id) => {

        const index = categury.findIndex((p) => p.id == id);
        const select = { ...categury[index] }
        select.quantity++;
        select.showBox = true
        const add = [...categury]
        add[index] = select;
        setCategury(add)
    }


    const removeQuantity = (id) => {

        const index = categury.findIndex((p) => p.id == id);
        const select = { ...categury[index] }
        select.quantity--;
        const add = [...categury]
        add[index] = select;
        setCategury(add)
    }
    // const ziruCount = (id) => {

    //     const index = categury.findIndex((p) => p.id == id);
    //     // const select = { ...categury[index] }
    //     // select.quantity==0;
    //     // const add = [...categury]
    //     // add[index] = select;
    //     // setCategury(add)
    //     console.log(index)
    // }

    return (
        <>
            
            <p className='groupProducts'>نوشیدنی سرد</p>
            <div className='boxCenter'>

                <div className="categury">
                    {
                        categury.map((cat, index) => {
                            return (
                                <div id={cat.id} key={index} className="itemProduct" onClick={() => console.log('ads')}>
                                    <Link to={`product/${cat.id}`} className='w-60 box-right text-decoration-none' onClick={closePopUp}>
                                        <span className="nameProduct">{cat.name}</span>
                                        <span className="nameProduct">{cat.name}</span>
                                        <span className="PriceProduct"><span>{cat.price} </span><span>تومان</span></span>
                                    </Link>

                                    <div className='w-40 box-left'>
                                        <img className="imgProduct" src={cat.img} />
                                        {cat.quantity==0&&<div className='addItemBasket' onClick={() => addProduct(cat.id)}>افزودن </div>}
                                        {/* {!cat.showBox && } */}
                                        {cat.quantity>0&& <div className='boxOperation borderOpration '>
                                            <div className='w-30 text-center' onClick={() => addquantity(cat.id)}>+</div>
                                            <div className='w-30 text-center borderRl'>{cat.quantity}</div>
                                            <div className='w-30 text-center' onClick={() => removeQuantity(cat.id)}>{cat.quantity === 1 ? <BiTrash /> : "-"}</div>
                                        </div>}
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
    );
}

export default Products;