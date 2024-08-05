import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import { Footer } from "./Components/Footer";
import Body from "./Components/Body";
import { restaurantList } from "./constants";
/**
      Header
        -logo(title)
        -Nav items(right side) 
        -cart
      Body
        - search bar
        -restaurant card(many cards)
            -image
            -name
            -rating
            -cusins
      Footer 
        -links
        -copyright
    */

//JSX

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
