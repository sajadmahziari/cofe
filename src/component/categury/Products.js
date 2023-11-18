import { useEffect, useState } from 'react';
import IceTee from './../../assets/images/drinkCold/IceTee.webp';
import appleJuse from './../../assets/images/drinkCold/appleJuse.jpg';
import drinkJuse from './../../assets/images/drinkCold/drinkJuse.webp';
import iceCofe from './../../assets/images/drinkCold/iceCofe.jpg';
import iceMoka from './../../assets/images/drinkCold/iceMoka.jpg';
import mohito from './../../assets/images/drinkCold/mohito.jpg';
import orangeJuse from './../../assets/images/drinkCold/orangeJuse.jpeg';
import { BiTrash } from "react-icons/bi";
import { Link } from 'react-router-dom';
import {AiFillStar} from "react-icons/ai";
import axios from 'axios';

const Products = ({ closePopUp }) => {
    const [categury, setCategury] = useState([
        // { showBox: false, quantity: 0, price: 1000, name: "چایی سرد", img: IceTee, id: 1 },
        // { showBox: false, quantity: 0, price: 1000, name: "اب سیب", img: appleJuse, id: 2 },
        // { showBox: false, quantity: 0, price: 1000, name: "آب هندوانه", img: drinkJuse, id: 3 },
        // { showBox: false, quantity: 0, price: 1000, name: "آیس کافه", img: iceCofe, id: 4 },
        // { showBox: false, quantity: 0, price: 1000, name: "آیس موکا", img: iceMoka, id: 5 },
        // { showBox: false, quantity: 0, price: 1000, name: "موهیتو", img: mohito, id: 6 },
        // { showBox: false, quantity: 0, price: 1000, name: "آب پرتقال", img: orangeJuse, id: 7 },
    ])
    const [idCatgory]=useState( localStorage.getItem('id-categury'))
    
        useEffect(()=>{
            // setIdCategory(localStorage.getItem('id-categury'))
            axios.get(`http://panel.saadcoffee.ir/api/products?token=QSBiJF6Rk%26F5%262yLk1%qz^2*Up&category=${idCatgory}`)
            .then((res) => {
                setCategury(res.data)
            })
            .catch(error => console.log(error));
        },[])


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

    return (
        <>
            
            <div className='boxCenter'>
            <p className='groupProducts'>نوشیدنی سرد</p>

                <div className="categury">
                    {
                        categury.map((cat, index) => {
                            return (
                                <div id={cat.id} key={index} className="itemProduct" onClick={() => console.log('ads')}>
                                  
                                    <img className="imgProduct w-25" src={`http://panel.saadcoffee.ir/img/products/${cat.image}`} />
                                    <Link to={`product/${cat.id}`} className='w-50 box-right text-decoration-none' onClick={closePopUp}>
                                        <span className="nameProduct">{cat.title}</span>
                                        <span className="PriceProduct"><span>{cat.price} </span><span>تومان</span></span>
                                        <span className='w-25 d-flex w-15 justify-content-between align-items-center'>
                                            <span className='starRate'>4</span>
                                            <AiFillStar className='starRate'/>
                                        </span>
                                    </Link>

                                    <div className='w-25 box-left'>
                                        {<div className='addItemBasket ml-1' onClick={() => addProduct(cat.id)}>افزودن </div>}
                                        { <div className='boxOperation d-none'>
                                            <div className='text-center addBtn' onClick={() => addquantity(cat.id)}>+</div>
                                            <div className='text-center'>{1}</div>
                                            <div className='text-center minBtn' onClick={() => removeQuantity(cat.id)}>{cat.quantity === 1 ? <BiTrash /> : "-"}</div>
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