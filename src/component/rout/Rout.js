import Index from "./../home/Index";
import About from "./../about/About";
import Product from "../categury/Product";
import Order from "../order/Order";
import Menu from "../menu/Menu";
import MenuList from "../menu/MenuList";
const rout = [
    { path: "/", exact: "true", Component: Index },
    { path: "/about", Component: About },
    { path: "/order", Component: Order },
    { path: "/menu", Component: MenuList },
    { path: "/product/:id", Component: Product },
]
export default rout;