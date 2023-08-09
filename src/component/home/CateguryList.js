import coldDirink from './../../assets/icon/iconCategury/coldDirink.png'
import hotDirink from './../../assets/icon/iconCategury/hotDirink.png'
import coldSandwitch from './../../assets/icon/iconCategury/coldSandwitch.png'
import hotSandwitch from './../../assets/icon/iconCategury/hotSandWitch.png'
import pizza from './../../assets/icon/iconCategury/pizza.png'
import Salad from './../../assets/icon/iconCategury/salad.png'
import fried from './../../assets/icon/iconCategury/fried.png'
import { useState } from 'react'
import Categury from '../categury/Categury'
import Products from '../categury/Products'
const CateguryList = ({ nameClass, colorTitle }) => {
    const [categury] = useState([
        { name: "نوشیدنی سرد", img: coldDirink, id: 1 },
        { name: "نوشیدنی گرم", img: hotDirink, id: 2 },
        { name: "ساندویچ سرد", img: coldSandwitch, id: 3 },
        { name: "ساندویچ گرم", img: hotSandwitch, id: 4 },
        { name: "پیتزا", img: pizza, id: 5 },
        { name: "سالاد", img: Salad, id: 6 },
        { name: "سوخاری", img: fried, id: 7 },
    ])
    const [popUpProduct, setPopUpProduct] = useState(false);
   
    const clickCategury =(id)=>{
        setPopUpProduct(true)
    }
    return (
        <>

            <div className="groupCategury">
                <div className='w-100 mb-1'>
                    <p className={`w-100 text-center m-0 ${colorTitle}`}>دسته بندی ها</p>
                    <span className='lineShadow'></span>
                </div>
                <div className={`categury ${nameClass}`}>
                    {categury.map((cat) => {
                        return <Categury key={cat.id} img={cat.img} name={cat.name} onClick={() => clickCategury(cat.id)} />
                    })}
                </div>
            </div>
            {
                    popUpProduct
                    &&
                    <>
                         <span className="popUp" onClick={() => setPopUpProduct(false)}></span>
                         <Products closePopUp={() => setPopUpProduct(false)} />
                    </>
               }
            
        </>
    );
}

export default CateguryList;