import { useState, useEffect } from 'react';
import Categury from '../categury/Categury';
import Products from '../categury/Products';
import axios from 'axios';

const CateguryList = ({ nameClass, colorTitle }) => {
    const [popUpProduct, setPopUpProduct] = useState(false);
    const [categury, setCategury] = useState([])

    const clickCategury = (id) => {
        setPopUpProduct(true);
        localStorage.setItem('id-categury',id )

    }

    useEffect(() => {
        axios.get("http://panel.saadcoffee.ir/api/categories?token=QSBiJF6Rk%26F5%262yLk1%qz^2*Up")
            .then((res) => {
                setCategury(res.data)
            })
            .catch(error => console.log(error));
    }, [])
    return (
        <>
            <div className="groupCategury">
                <div className='w-100 mb-1'>
                    <p className={`w-100 text-center m-0 ${colorTitle}`}>دسته بندی ها</p>
                    <span className='lineShadow'></span>
                </div>
                <div className={`categury ${nameClass}`}>
                    {categury.map((cat) => {
                        return <Categury id={cat.id} key={cat.id} image={cat.image} title={cat.title} onClick={() => clickCategury(cat.id)} />
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