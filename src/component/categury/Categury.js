import coldDirink from './../../assets/icon/iconCategury/coldDirink.png'
import hotDirink from './../../assets/icon/iconCategury/hotDirink.png'
import coldSandwitch from './../../assets/icon/iconCategury/coldSandwitch.png'
import hotSandwitch from './../../assets/icon/iconCategury/hotSandWitch.png'
import pizza from './../../assets/icon/iconCategury/pizza.png'
import Salad from './../../assets/icon/iconCategury/salad.png'
import fried from './../../assets/icon/iconCategury/fried.png'
import { useState } from 'react'
const Categury = ({ closePopUp }) => {
    const [categury] = useState([
        { name: "نوشیدنی سرد", img: coldDirink },
        { name: "نوشیدنی گرم", img: hotDirink },
        { name: "ساندویچ سرد", img: coldSandwitch },
        { name: "ساندویچ گرم", img: hotSandwitch },
        { name: "پیتزا", img: pizza },
        { name: "سالاد", img: Salad },
        { name: "سوخاری", img: fried },
    ])
    return (
        <>
            <span className="popUp" onClick={closePopUp}></span>
            <div className="categury">
                {
                    categury.map((cat) => {
                        return (
                            <div className="itemCateguryParent">
                                <img className="imgCategury" src={cat.img} />
                                <span className="nameCategury">{cat.name}</span>
                            </div>
                        )
                    })
                }


            </div>
        </>
    );
}

export default Categury;