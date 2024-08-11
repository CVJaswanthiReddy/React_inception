import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import { Footer } from "./Components/Footer";
import Body from "./Components/Body";
import { restaurantList } from "./constants";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import Profile from "./Components/Profile";

const AppLayout = () => {
  return (
    <>
      <Header />
      {/**OUTLET */}
      <Outlet />
      <Footer />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about", //parentPath/{path} => localhost:1234/about
        element: <About />,
        children: [
          {
            path: "profile", //parentpath/{path} => //localhost:1234/about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
