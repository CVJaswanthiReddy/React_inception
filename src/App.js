import React, { lazy, Suspense } from "react";
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
import useOnline from "./utilis/useOnline";
import Shimmer from "./Components/Shimmer";
import { Provider } from "react-redux";
import store from "./utilis/store";
import Cart from "./Components/Cart";
import ProfileClass from "./Components/ProfileClass";
import Login from "./Components/Login";
import UserOffline from "./Components/UserOffline";

const Instamart = lazy(() => import("./Components/Instamart"));
const AppLayout = () => {
  const isOnline = useOnline();
  return (
    <>
      <Provider store={store}>
        <Header />
        {/**OUTLET */}
        {isOnline ? <Outlet /> : null}
        <Footer />
      </Provider>
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
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },

      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />,
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/offline",
        element: <UserOffline />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
