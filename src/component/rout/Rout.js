import Index from "./../home/Index";
import About from "./../about/About";
const rout = [
    { path: "/", exact: "true", Component: Index },
    { path: "/about", Component: About },
    // { path: "/categury/product/:id", Component: Product },
]
export default rout;