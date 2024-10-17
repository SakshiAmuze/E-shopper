import {
    createBrowserRouter
  } from "react-router-dom";
import App from "./components/App";
import Login from "./components/Login";
import Register from "./components/Error404";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Error404 from "./components/Error404";
import Form from "./components/Form";
import Add_category from "./components/Add_category";
import Add_product from "./components/Add_product";
import Fakestore from "./components/Fakestore";
import Fakestore1 from "./components/Fakestore1";
import Singleproductpage from "./components/Singleproductpage";

  const customRouter = createBrowserRouter([
    {
        path:"/",
        element:<App></App>,
        children:[
            {
                path:"/loginpage",
                element:<Login></Login>
            },
            {
                path:"/registerpage",
                element:<Register></Register>
            },
            {
                path:"/cart",
                element:<Cart></Cart>
            },
            {
                path:"",
                element:<Home></Home>
            },
            {
                path:"/404",
                element:<Error404></Error404>
            },
            {
                path:"/form",
                element:<Form username="sakshi"userage="20"/>
            }, {
                path:"/add-category",
                element:<Add_category/>
            }
            , {
                path:"/add-product",
                element:<Add_product></Add_product>
            }, {
                path:"/fakestore",
                element:<Fakestore/>
            }, {
                path:"/statelift",
                element:<Fakestore1/>
            }, {
                path:"/single-page/:proid",
                element:<Singleproductpage></Singleproductpage>
            },
        ]
    }
  ])

  export default customRouter;