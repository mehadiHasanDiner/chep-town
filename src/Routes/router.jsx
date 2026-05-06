import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import HomeLayout from "../layouts/HomeLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
]);
