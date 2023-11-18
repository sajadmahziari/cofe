import axios from 'axios';
import { useEffect, useState } from 'react';

const MenuList = () => {
    const [categures, setCategures] = useState([])
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(`http://panel.saadcoffee.ir/api/categories?token=QSBiJF6Rk%26F5%262yLk1%qz^2*Up`)
            .then((res) => {
                setCategures(res.data)
            })
            .catch(error => console.log(error));
        axios.get(`http://panel.saadcoffee.ir/api/products?token=QSBiJF6Rk%26F5%262yLk1%qz^2*Up&category=2`)
            .then((res) => {
                setProducts(res.data)
            })
            .catch(error => console.log(error));
    }, [])


    return (
        <>
            {categures.map((cat) => {
                return (
                    <>
                        <div className='categores-name-menu'>
                            {cat.title}
                        </div>
                    </>
                )
            })}

            <div className='d-flex flex-wrap justify-content-around align-items-center '>
                {products.map((pros) => {
                    return (
                        <div className='products-menu'>
                            <div className='d-flex justify-content-between align-items-center pl-1'>
                                <div className='content-image-product'>
                                    <img src={`http://panel.saadcoffee.ir/img/products/${pros.image}`} />
                                </div>
                                <div className='content-detaile-product'>
                                    <div className='content-title'>{pros.title}</div>
                                    <div className='content-price'>{pros.price}</div>
                                </div>
                                <div className='content-btn-buy'>
                                    <button>
                                        خرید
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>


        </>
    );
}

export default MenuList;