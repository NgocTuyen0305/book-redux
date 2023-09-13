import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";
import Header from "./pages/components/Header";
import Footer from "./pages/components/Footer";
import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Login from "./pages/auth/Login";
import Logout from "./pages/auth/Logout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="">
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {path:'shop', element:<Shop/>},
      {path:'blog', element:<Blog/>},
      {path:'login', element:<Login/>},
      {path:'logout', element:<Logout/>},
    ],
  },
]);
