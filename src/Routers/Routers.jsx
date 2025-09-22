import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <div>404 page not found</div>,
    children: [
      {
        // path: "/",
        index: true,
        element: (
          <div>
            Home lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quisquam, quam. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, quam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, quam.
          </div>
        ),
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
