import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineAlignRight, AiFillAliwangwang } from "react-icons/ai";
import { BsCart3, BsFillPersonBadgeFill, BsPeopleFill } from "react-icons/bs";
import { useState } from "react";
import Categury from "../categury/Categury";
const Menu = ({ closePopUp, clickCategury }) => {
    return (
        <>
            <span className="popUp" onClick={closePopUp}></span>
            <ul className="menu">
                <li>
                    <Link to="/">
                        <AiOutlineHome />
                        <span className="txtNameMenu">خانه</span>
                    </Link>
                </li>
                <li onClick={clickCategury}>
                    <AiOutlineAlignRight />
                    <span className="txtNameMenu">دسته بندی</span>
                </li>
                <li>
                    <Link to="/order">
                        <BsCart3 />
                        <span className="txtNameMenu">سفارشات</span>
                    </Link>

                </li>
                <li>
                    <Link to="/about">
                        <BsPeopleFill />
                        <span className="txtNameMenu">درباره ما</span>
                    </Link>
                </li>
                <li>
                    <Link to="/support">
                        <BsFillPersonBadgeFill />
                        <span className="txtNameMenu">پشتیبانی</span>
                    </Link>
                </li>
            </ul>
        </>

    );
}

export default Menu;