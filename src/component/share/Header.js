

import { useState } from "react";
import { AiOutlineAlignRight } from "react-icons/ai";
import { CiShoppingBasket } from "react-icons/ci";
import Menu from "../menu/Menu";
import CateguryList from './../home/CateguryList';
import Products from "../categury/Products";
const Header = () => {

     const [popUpMenu, setPopUpMenu] = useState(false);
     const [popUpCategury, setPopUpCategury] = useState(false);
     const [popUpProduct, setPopUpProduct] = useState(false);

     const showCategury = () => {
          setPopUpMenu(false)
          setPopUpCategury(true)
     }
     const clickCategury = (id) => {
          setPopUpCategury(false)
          setPopUpProduct(true)
          console.log(id)
     }
     const closeCategury = () => {
          setPopUpCategury(false)
          setPopUpProduct(true)
     }
     return (
          <div className="header">
               <span className="backHead"></span>
               {/* background shadow */}
               <span className="menuIcon z-1" onClick={() => setPopUpMenu(true)}><AiOutlineAlignRight /></span>
               {/* icon menu */}
               <span className="z-1 circle"> کافه باز است </span>
               <span className="basketIcon z-1"><CiShoppingBasket /></span>
               {/* status cofe */}
               {
                    popUpMenu
                    &&
                    <>
                         <span onClick={() => setPopUpMenu(false)} className="popUp"></span>
                         <Menu onClickCat={showCategury} closePopUpMenu={() => setPopUpMenu(false)} />
                    </>
               }
               {/* showPopUp menu */}
               {popUpCategury
                    &&
                    <>
                         <span onClick={() => setPopUpCategury(false)} className="popUp "> </span>
                         <span className="d-flex justify-content-center align-items-center centerCenter">
                              <CateguryList closeCategury={closeCategury} nameClass="openCatPopUp" colorTitle="titleCategury" />
                         </span>
                    </>
               }
               {/* showPopUp categury */}
               {
                    popUpProduct
                    &&
                    <>
                         <span onClick={() => setPopUpProduct(false)} className="popUp "> </span>
                         <span className="d-flex justify-content-center align-items-center centerCenter">
                              <Products closePopUp={() => setPopUpProduct(false)}/>
                         </span>
                    </>
               }
                {/* showPopUp Products */}
          </div>
     );
}

export default Header;