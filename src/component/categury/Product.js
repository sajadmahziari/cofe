import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IceTee from './../../assets/images/drinkCold/IceTee.webp';
import appleJuse from './../../assets/images/drinkCold/appleJuse.jpg';
import drinkJuse from './../../assets/images/drinkCold/drinkJuse.webp';
import iceCofe from './../../assets/images/drinkCold/iceCofe.jpg';
import iceMoka from './../../assets/images/drinkCold/iceMoka.jpg';
import mohito from './../../assets/images/drinkCold/mohito.jpg';
import orangeJuse from './../../assets/images/drinkCold/orangeJuse.jpeg';
import { BiTrash } from "react-icons/bi";
import {AiFillStar} from "react-icons/ai";


const Product = () => {
    const params = useParams();

    const [product, setProduct] = useState([
        {quantity: 0, price: 9500, name: "چایی سرد", img: IceTee, id: 1 },
        {quantity: 0, price: 1000, name: "اب سیب", img: appleJuse, id: 2 },
        {quantity: 0, price: 1000, name: "آب هندوانه", img: drinkJuse, id: 3 },
        {quantity: 0, price: 1000, name: "آیس کافه", img: iceCofe, id: 4 },
        {quantity: 0, price: 1000, name: "آیس موکا", img: iceMoka, id: 5 },
        {quantity: 0, price: 1000, name: "موهیتو", img: mohito, id: 6 },
        {quantity: 0, price: 1000, name: "آب پرتقال", img: orangeJuse, id: 7 },
    ])
    const idS = params.id;
    const [state, setState] = useState([]);

    useEffect(() => {
        const index = product.find((p) => p.id == idS);
        setState(index)
    })
    const [counter, setCounter] = useState(0)

    return (
        <>
            <div className='productOrder'>
                <img className='productImage' src={state.img} />
                <div className='d-flex justify-content-between productName  mt-1 w-95 mb-1'>
                    <span className='f-bold nameProduct'>{state.name}</span>
                    <span className='w-25 d-flex w-15 justify-content-between align-items-center'>
                        <span className='starRate'>4</span>
                        <AiFillStar className='starRate'/>
                    </span>
                </div>
                <span className='text-right w-95 detaileProduct'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و </span>
                <div className=' groupBuy mt-1'>
                    <div className='productPrice'>
                        <span> قیمت: </span>
                        <span>{state.price}</span>
                        <span> تومان </span>
                    </div>
                    {/* <div className='boxOperation flex-row'>
                        <div className='w-30 text-center' onClick={() => setCounter(counter + 1)}>+</div>
                        <div className='w-30 text-center borderRl'>{counter}</div>
                        <div className={counter === 0 ? 'w-30 text-center notAction' : 'w-30 text-center'} onClick={() => setCounter(counter - 1)}>{counter > 0 ? "-" : <BiTrash />}</div>
                    </div> */}
                    {state.quantity==0&&<div className={`${state.quantity>0?'none':'addProduct ml-1'}`} onClick={() => setCounter(counter + 1)}>{'افزودن'  + state.quantity }  </div>}
                    
                    {state.quantity>=0?"sefr":'yek'}
                </div>
                <div className='w-100 sumPrice mt-1 text-center'>
                   <span> مجموع:</span>
                    <span>{state.price*counter}</span>
                </div>
            </div>

        </>
    );
}

export default Product;