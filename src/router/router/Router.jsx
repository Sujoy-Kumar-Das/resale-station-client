import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/main/Main";
import Home from "../../pages/home/Home";
import Login from "../../pages/registration/login/Login";

export const route = createBrowserRouter([
  { path: "/", element: <Main></Main>, children: [
    {path:"/",element:<Home></Home>},
    {path:"/login",element:<Login></Login>}
  ] },
]);
