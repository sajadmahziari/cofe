import coldDirink from './../../assets/icon/iconCategury/coldDirink.png'
import hotDirink from './../../assets/icon/iconCategury/hotDirink.png'
import coldSandwitch from './../../assets/icon/iconCategury/coldSandwitch.png'
import hotSandwitch from './../../assets/icon/iconCategury/hotSandWitch.png'
import pizza from './../../assets/icon/iconCategury/pizza.png'
import Salad from './../../assets/icon/iconCategury/salad.png'
import fried from './../../assets/icon/iconCategury/fried.png'
import { useState } from 'react'
import Products from '../categury/Products'
const CateguryList = () => {
    const [categury] = useState([
        { name: "نوشیدنی سرد", img: coldDirink, id: 1 },
        { name: "نوشیدنی گرم", img: hotDirink, id: 2 },
        { name: "ساندویچ سرد", img: coldSandwitch, id: 3 },
        { name: "ساندویچ گرم", img: hotSandwitch, id: 4 },
        { name: "پیتزا", img: pizza, id: 5 },
        { name: "سالاد", img: Salad, id: 6 },
        { name: "سوخاری", img: fried, id: 7 },
    ])
    const [product, setProduct] = useState(false)
    const closePopUp=()=>{
        setProduct(false)
    }
    return (
        <div className="groupCategury">
            <div className='w-100 mb-1'>
                <p className='w-100 text-center m-0'>دسته بندی ها</p>
                <span className='lineShadow'></span>
            </div>
            {categury.map((cat, index) => {
                return (
                    <div className="itemCategury" key={index} onClick={() => setProduct(true)}>
                        <img className='imgCategury' src={cat.img} />
                        <span className='nameCategury'>{cat.name}</span>
                    </div>
                )
            })}
                {product&&<Products closePopUp={closePopUp}/>}


        </div>
    );
}

export default CateguryList;