import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineAlignRight, AiOutlineUser } from "react-icons/ai";
import { BsCart3, BsFillPersonBadgeFill, BsPeopleFill } from "react-icons/bs";
const Menu = ({ onClickCat, closePopUpMenu }) => {
    return (
        <>
            <ul className="menu">

                <li onClick={closePopUpMenu}>
                    <Link to="/">
                        <AiOutlineHome />
                        <span className="txtNameMenu">خانه</span>
                    </Link>
                </li>
                <li onClick={onClickCat}>
                    <AiOutlineAlignRight />
                    <span className="txtNameMenu">دسته بندی</span>
                </li>
                <li onClick={closePopUpMenu}>
                    <Link to="/order">
                        <BsCart3 />
                        <span className="txtNameMenu">سفارشات</span>
                    </Link>

                </li>
                <li onClick={closePopUpMenu}>
                    <Link to="/about">
                        <BsPeopleFill />
                        <span className="txtNameMenu">درباره ما</span>
                    </Link>
                </li>
                <li onClick={closePopUpMenu}>
                    <Link to="/support">
                        <BsFillPersonBadgeFill />
                        <span className="txtNameMenu">پشتیبانی</span>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <AiOutlineUser />
                        <span className="txtNameMenu">پروفایل</span>
                    </Link>
                </li>
            </ul>
        </>

    );
}

export default Menu;