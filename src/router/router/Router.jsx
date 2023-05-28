import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/main/Main";
import Home from "../../pages/home/Home";
import Login from "../../pages/registration/login/Login";
import Error from "../../pages/shared/error/Error";
import AllProductsCatagorys from "../../pages/AllProductsCatagorys/AllProductsCatagorys";
import AllProducts from "../../pages/allProducts/AllProducts";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      {path:"/products/catagorys",element:<AllProductsCatagorys></AllProductsCatagorys>},
      {path:"/products/catagorys/allProducts/:id",element:<AllProducts></AllProducts>},
      { path: "/login", element: <Login></Login> },
    ],
  },
  { path: "*", element: <Error></Error> },
]);
