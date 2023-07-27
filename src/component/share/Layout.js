import Footer from "./Footer";
import Header from "./Header";
import "./../../assets/styles/main.css";

const Layout = ({children}) => {
    return ( 
        <>
            <Header/>
                {children}
            <Footer/>
        </>
     );
}
 
export default Layout;