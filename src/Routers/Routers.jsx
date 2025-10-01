import { createBrowserRouter, Link } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pageses/Home";
import Error from "../component/Error/Error";
import CoffeeCard from "../component/Coffee-card/CoffeeCard";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: (
      <div className="text-center mt-32 space-y-6">
        <h2>Sorry! Page Not Found</h2>
        <Link className="btn btn-warning" to={"/"}>
          Go to Home
        </Link>
      </div>
    ),
    children: [
      {
        path: "/",
        // index: true,
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <CoffeeCard></CoffeeCard>,
            loader: () => fetch("../coffees.json"),

          },
          {
            path: "/category/:category",
            element: <CoffeeCard></CoffeeCard>,
            loader: () => fetch("../coffees.json"),

          }
        ]
      },

      {
        path: "/coffees",
        element: <div>Coffees</div>,
      },

      {
        path: "/dashboard",

        element: <div>Dashboard</div>,
      },
    ],
  },
]);

export default routers;
