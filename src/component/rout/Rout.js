import Index from "./../home/Index";
import About from "./../about/About";
import Product from "../categury/Product";
import Order from "../order/Order";
const rout = [
    { path: "/", exact: "true", Component: Index },
    { path: "/about", Component: About },
    { path: "/order", Component: Order },
    { path: "/product/:id", Component: Product },
]
export default rout;