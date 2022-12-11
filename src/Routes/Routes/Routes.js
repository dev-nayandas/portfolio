import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import AboutMe from "../../Pages/Home/AboutMe/AboutMe";
import Home from "../../Pages/Home/Home/Home";
import DeltaDetails from "../../Pages/Home/Projects/DeltaDetails";
import LaptopDetails from "../../Pages/Home/Projects/LaptopDetails";
import SmithDetails from "../../Pages/Home/Projects/SmithDetails";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element:<Blog></Blog>,
      },
    
      {
        path: "/deltaDetails",
        element: <DeltaDetails></DeltaDetails>,
      },
      {
        path: "/smithDetails",
        element: <SmithDetails></SmithDetails>,
      },
      {
        path: "/laptopDetails",
        element: <LaptopDetails></LaptopDetails>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
