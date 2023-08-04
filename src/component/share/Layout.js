import Header from "./Header";
import "./../../assets/styles/main.css";
import { BrowserRouter } from "react-router-dom";
import AnimationRout from "../rout/AnimationRout";

const Layout = ({ children }) => {
    return (
        <>
            <BrowserRouter>
                <Header />
               
                <AnimationRout/>
            </BrowserRouter>

        </>
    );
}

export default Layout;