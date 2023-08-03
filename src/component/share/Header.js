import { useState } from "react";
import { AiOutlineAlignRight } from "react-icons/ai";
import { CiShoppingBasket } from "react-icons/ci";
import Menu from "../menu/Menu";
import Categurys from '../categury/Categury'

const Header = () => {
     const [show, setShow] = useState(false);
     const [Categury, setCategury] = useState(false);
     const clickCategury = () => {
          setCategury(true)
          setShow(false)
     }
     const closePopUp=()=>{
          setCategury(false)
          
     }
     return (
          <div className="header">
               <span className="backHead"></span>
               <span className="menuIcon z-1" onClick={() => setShow(!show)}><AiOutlineAlignRight /></span>
               <span className="z-1 circle"> کافه باز است </span>
               <span className="basketIcon z-1"><CiShoppingBasket /></span>
               {show && <Menu clickCategury={clickCategury} closePopUp={() => setShow(false)} />}
               {Categury && <Categurys closePopUp={closePopUp} />}

          </div>
     );
}

export default Header;