import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/main/Main";
import Home from "../../pages/home/Home";
import Login from "../../pages/registration/login/Login";
import Error from "../../pages/shared/error/Error";
import AllProductsCatagorys from "../../pages/AllProductsCatagorys/AllProductsCatagorys";
import AllProducts from "../../pages/allProducts/AllProducts";
import ProductDetail from "../../pages/productDetail/ProductDetail";
import LoginLayout from "../../layouts/LoginLayout";
import Singup from "../../pages/registration/singup/Singup";
import ResetPassword from "../../pages/registration/resetPassword/ResetPassword";


export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      {path:"/products/catagorys",element:<AllProductsCatagorys></AllProductsCatagorys>},
      {path:"/products/catagorys/allProducts/:id",element:<AllProducts></AllProducts>},
      {path:"/products/detail/:id",element:<ProductDetail></ProductDetail>},
    ],
  },
  {
    path:"/registration",
    element:<LoginLayout></LoginLayout>,
    children:[
      {path:"/registration/login",element:<Login></Login>},
      {path:"/registration/singup",element:<Singup></Singup>},
      {path:"/registration/resetPassword",element:<ResetPassword></ResetPassword>}
    ]
  },
  { path: "*", element: <Error></Error> },
]);
