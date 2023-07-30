import { AiOutlineAlignRight } from "react-icons/ai";
import { CiShoppingBasket } from "react-icons/ci";
const Header = () => {
    return ( 
        <div className="header">
             <span className="menuIcon"><AiOutlineAlignRight/></span>
             <span className="basketIcon"><CiShoppingBasket/></span>
        </div>
     );
}
 
export default Header;