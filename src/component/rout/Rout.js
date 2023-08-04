import Index from "./../home/Index";
import About from "./../about/About";
import Product from "../categury/Product";
const rout = [
    { path: "/", exact: "true", Component: Index },
    { path: "/about", Component: About },
    { path: "/product/:id", Component: Product },
]
export default rout;