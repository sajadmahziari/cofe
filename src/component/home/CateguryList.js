import { useState,useEffect } from 'react';
import Categury from '../categury/Categury';
import Products from '../categury/Products';
import axios from 'axios';
const CateguryList = ({ nameClass, colorTitle, closeCategury }) => {
    // start get data categury main
    const [categury, setCategury] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setCategury(res.data)
            })
            .catch(error => console.log(error));
    }, [])
    // end get data categury main

    const [popUpProduct, setPopUpProduct] = useState(false);

    const clickCategury = (id) => {
        setPopUpProduct(true);
        closeCategury(id)
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
                        return <Categury key={cat.id} image={cat.image} category={cat.category} onClick={() => clickCategury(cat.id)} />
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