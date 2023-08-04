import coldDirink from './../../assets/icon/iconCategury/coldDirink.png'
import hotDirink from './../../assets/icon/iconCategury/hotDirink.png'
import coldSandwitch from './../../assets/icon/iconCategury/coldSandwitch.png'
import hotSandwitch from './../../assets/icon/iconCategury/hotSandWitch.png'
import pizza from './../../assets/icon/iconCategury/pizza.png'
import Salad from './../../assets/icon/iconCategury/salad.png'
import fried from './../../assets/icon/iconCategury/fried.png'
import { useState } from 'react'
import Products from './Products'
const Categury = ({ closePopUp }) => {
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
    const closePopUps = () => {
        setProduct(false)
    }
    return (
        <>
            <span className="popUp" onClick={closePopUp}></span>
            <div className="categury">
                {
                    categury.map((cat, index) => {
                        return (
                            <div key={index} className="itemCategury" onClick={() => setProduct(true)}>
                                <img className="imgCategury" src={cat.img} />
                                <span className="nameCategury">{cat.name}</span>
                            </div>
                        )
                    })
                }
                {product && <Products closePopUp={closePopUps} />}
            </div>
        </>
    );
}

export default Categury;