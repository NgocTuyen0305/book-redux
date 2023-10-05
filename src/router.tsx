import {
  createBrowserRouter,

} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProductDetail from "./pages/ProductDetail";
import LayoutClient from "./layouts/LayoutClient";
import LayoutAdmin from "./layouts/LayoutAdmin";
import Dashboard from "./pages/admin/Dashboard";
import ProductManagement from "./pages/admin/products/ProductManagement";
import PrivateRouter from "./components/PrivateRouter";
import UpdateProduct from "./pages/admin/products/UpdateProduct";
import CategoriesManager from "./pages/admin/categories/CategoriesManager";
import UpdateCategory from "./pages/admin/categories/UpdateCategory";
import Account from "./pages/auth/Account";


export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="">
        <LayoutClient />
      </div>
    ),
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      { path: "shop", element: <Shop /> },
      { path: "products/:id/detail", element: <ProductDetail /> },
      { path: "blog", element: <Blog /> },
      { path: "account", element: <Account /> },
    ],
  },
  {
    path: "/admin",
    element: <PrivateRouter/>,
    children: [
      {
        element: <LayoutAdmin />,
        children: [
          { index: true, element: <Dashboard /> },
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "products",
            element: <ProductManagement />,
          },
          {
            path: "products/:id/edit",
            element: <UpdateProduct />,
          },
          {
            path: "categories",
            element: <CategoriesManager />,
          },
          {
            path: "categories/:id/edit",
            element: <UpdateCategory />,
          },
        ],
      },
    ],
  },
]);
