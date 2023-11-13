import { createBrowserRouter } from "react-router-dom";
import Error from "../Error/Error";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";


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
    ]
  },
]);



export default router;