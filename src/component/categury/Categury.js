import coldDirink from './../../assets/icon/iconCategury/coldDirink.png'
import hotDirink from './../../assets/icon/iconCategury/hotDirink.png'
import coldSandwitch from './../../assets/icon/iconCategury/coldSandwitch.png'
import hotSandwitch from './../../assets/icon/iconCategury/hotSandWitch.png'
import pizza from './../../assets/icon/iconCategury/pizza.png'
import Salad from './../../assets/icon/iconCategury/salad.png'
import fried from './../../assets/icon/iconCategury/fried.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Categury = ({ closePopUp }) => {
    const [categury] = useState([
        { name: "نوشیدنی سرد", img: coldDirink ,to:"coldDirink"},
        { name: "نوشیدنی گرم", img: hotDirink ,to:"hotDirink"},
        { name: "ساندویچ سرد", img: coldSandwitch ,to:"coldSandwitch"},
        { name: "ساندویچ گرم", img: hotSandwitch ,to:"hotSandwitch"},
        { name: "پیتزا", img: pizza ,to:"pizza"},
        { name: "سالاد", img: Salad ,to:"Salad"},
        { name: "سوخاری", img: fried ,to:"fried"},
    ])
    return (
        <>
            <span className="popUp" onClick={closePopUp}></span>
            <div className="categury">
                {
                    categury.map((cat) => {
                        return (
                            <Link className="itemCateguryParent">
                                <img className="imgCategury" src={cat.img} />
                                <span className="nameCategury">{cat.name}</span>
                            </Link>
                        )
                    })
                }


            </div>
        </>
    );
}

export default Categury;