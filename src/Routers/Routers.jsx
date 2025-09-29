import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pageses/Home";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <div>404 page not found</div>,
    children: [
      {
        // path: "/",
        index: true,
        element: <Home></Home>,
      },

      {
        path: "/coffees",
        element: <div>Coffees</div>,
      },

      {},
      {
        path: "/dashboard",

        element: <div>Dashboard</div>,
      },
    ],
  },
]);

export default routers;
