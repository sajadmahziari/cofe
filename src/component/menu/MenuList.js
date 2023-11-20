import axios from 'axios';
import { useEffect, useState } from 'react';

const MenuList = () => {
    const [categures, setCategures] = useState([])
    useEffect(() => {
        axios.get(`http://panel.saadcoffee.ir/api/menu?token=QSBiJF6Rk%26F5%262yLk1%qz^2*Up`)
            .then((res) => {
                setCategures(res.data)
            })
            .catch(error => console.log(error));
    }, [])

    const get_product = (cat) => {
        return (
            <>
                {cat.product.map((pros, index) => {
                    return (
                        <div className='d-flex flex-wrap justify-content-around align-items-center' key={index}>

                            <div className='products-menu'>
                                <div className='d-flex justify-content-between align-items-center pl-1'>
                                    <div className='content-image-product'>
                                        <img alt="" src={`http://panel.saadcoffee.ir/img/products/${pros.image}`} />
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
                        </div>

                    )
                })}
            </>
        )
    }



    return (
        <>
            {categures.map((cat, index) => {
                return (
                    <div key={index}>
                        <div className='categores-name-menu' >
                            {cat.name}
                        </div>
                        {get_product(cat)}
                    </div>
                )
            })}




        </>
    );
}

export default MenuList;