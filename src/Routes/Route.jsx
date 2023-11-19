import { createBrowserRouter } from "react-router-dom";
import Error from "../Error/Error";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Components/Secret/Secret";
import PrivateRoute from "../Components/Private/PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:'/menu',
        element:<Menu></Menu>
      },
      {
        path:'/error',
        element:<Error></Error>
      },
      {
        path:'/order',
        element:<Order></Order>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path:'/privateRoute',
        element:<PrivateRoute></PrivateRoute>
      },
    
      {
        path:'/secret',
        element:<PrivateRoute><Secret></Secret></PrivateRoute>
      },
    ]
  },
]);



export default router;