import { useEffect, useState } from 'react';
import { AiFillStar } from "react-icons/ai";
import axios from 'axios';
const Product = () => {
    const [product, setProduct] = useState([])
    const [idProduct] = useState(localStorage.getItem('id-product'))
    const regex = /(<([^>]+)>)/gi;
    useEffect(() => {
        axios.get(`http://panel.saadcoffee.ir/api/products?token=QSBiJF6Rk%26F5%262yLk1%qz^2*Up&id=${idProduct}`)
            .then((res) => {
                setProduct([res.data])
            })
            .catch(error => console.log(error));
    }, [])
    return (
        <>
            {
                product.map((pro, index) => {
                    return (
                        <div className='productOrder' key={index}>
                            <img className='productImage' src={`http://panel.saadcoffee.ir/img/products/${pro.image}`} />
                            <div className='d-flex justify-content-between productName  mt-1 w-95 mb-1'>
                                <span className='f-bold nameProduct'>{pro.title}</span>
                                <span className=' d-flex justify-content-between align-items-center'>
                                    <span className='starRate pl-1'>4</span>
                                    <AiFillStar className='starRate' />
                                </span>
                            </div>
                            <span className='text-right w-95 detaileProduct'> {pro.description.replace(regex, "")} </span>
                            <div className='w-100 sumPrice mt-1 text-center'>
                                {/* <span> مجموع:</span> */}
                                {/* <span>{state.price * counter}</span> */}
                            </div>
                            <div className=' groupBuy mt-1'>

                                {/* <div className='boxOperation flex-row'>
                        <div className='w-30 text-center' onClick={() => setCounter(counter + 1)}>+</div>
                        <div className='w-30 text-center borderRl'>{counter}</div>
                        <div className={counter === 0 ? 'w-30 text-center notAction' : 'w-30 text-center'} onClick={() => setCounter(counter - 1)}>{counter > 0 ? "-" : <BiTrash />}</div>
                         </div> */}
                                {/* {state.quantity == 0 && <div className={`${state.quantity > 0 ? 'none' : 'addProduct ml-1'}`} onClick={() => setCounter(counter + 1)}>{'افزودن' + state.quantity}  </div>} */}

                                {/* {state.quantity >= 0 ? "sefr" : 'yek'} */}
                            </div>
                            <div className='productPrice'>
                                <div>
                                    <span> قیمت: </span>
                                    <span>{pro.price}</span>
                                    <span> تومان </span>
                                </div>
                                <div className='add-product-white'>
                                    سفارش
                                </div>
                            </div>
                        </div>
                    )
                })
            }


        </>
    );
}

export default Product;