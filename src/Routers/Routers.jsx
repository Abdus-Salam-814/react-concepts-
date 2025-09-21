import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

const routers = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
    path: '/home',
    element: <h1>This is home</h1>
  },
  { path: '/about', 
    element: <h1>This is about</h1>
  },{
    path: '/contact',
    element: <h1>This is contact</h1>
  }
    ]
  },
  
])



export default routers;