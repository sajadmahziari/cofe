import { AiOutlineAlignRight } from "react-icons/ai";
import { CiShoppingBasket } from "react-icons/ci";
const Header = () => {
     return (
          <div className="header">
               <span className="backHead"></span>
               <span className="menuIcon z-1"><AiOutlineAlignRight /></span>
               <span className="z-1 circle"> کافه باز است </span>
               <span className="basketIcon z-1"><CiShoppingBasket /></span>
          </div>
     );
}

export default Header;