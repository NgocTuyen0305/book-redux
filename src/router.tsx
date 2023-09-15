import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProductDetail from "./pages/ProductDetail";
import LayoutClient from "./layouts/LayoutClient";
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="">
        <LayoutClient/>
      </div>
    ),
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {path:'shop', element:<Shop/>},
      {path:'products/:id/detail', element:<ProductDetail/>},
      {path:'blog', element:<Blog/>},
      {path:'login', element:<Login/>},
      {path:'register', element:<Register/>},
    ],
  },
]);
