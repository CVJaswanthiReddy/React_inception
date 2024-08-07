import { useState } from "react";
import { Link } from "react-router-dom";
const loggedInUser = () => {
  //API CALL TO CHECK AUTHENTICATION
  return true;
};

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://foodvilla.delomon.com/assets/images/FoodVilla454/SHAyslider.jpg"
    ></img>
  </a>
);

//component

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            {" "}
            <Link to="/">Home </Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>login</button>
      )}
    </div>
  );
};

export default Header;
