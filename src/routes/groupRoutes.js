import Home from "../page/Home/Home";
import Shop from "../page/Shop/Shop";
import path from "./path";
import Blog from "../page/Blog/Blog";
import Introduce from "../page/Introduce/Introduce";
import Contact from "../page/Contact/Contact";

const groupRoutes = [
    {path:path.HOME,component:<Home/>},
    {path:path.SHOP,component:<Shop/>},
    {path:path.BLOG,component:<Blog/>},
    {path:path.INTRODUCE,component:<Introduce/>},
    {path:path.CONTACT,component:<Contact/>}
]
export default groupRoutes