import Footer from "./Footer";
import Header from "./Header";
import "./../../assets/styles/main.css";
import { BrowserRouter } from "react-router-dom";

const Layout = ({ children }) => {
    return (
        <>
            <BrowserRouter>
                <Header />
                {children}
                {/* <Footer/> */}
            </BrowserRouter>

        </>
    );
}

export default Layout;