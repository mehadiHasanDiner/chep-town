import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AboutUs from "../pages/AboutUs";
import Blogs from "../pages/Blog";
import Chefs from "../pages/Chefs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://assignment-10-awesome-chefs-m-65-server.vercel.app/chefs"
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/chef/:id",
        element: <Chefs></Chefs>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);
