import { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "../utilis/useLocalStorage";
import useOnline from "../utilis/useOnline";
import useAuth from "../utilis/useAuth";
import foodVillaLogo from "../Images/foodvilla.png";
import UserContext from "../utilis/UserContext";
import { useSelector } from "react-redux";
import UserOffline from "./UserOffline";
// Title component for display logo
const Title = () => (
  <Link to="/">
    <img
      data-testid="logo"
      className="pl-2 py-2 w-32"
      src={foodVillaLogo}
      alt="logo"
      title="Food Villa"
    />
  </Link>
);

const Header = () => {
  const navigate = useNavigate();
  const [getLocalStorage, , clearLocalStorage] = useLocalStorage("user");
  const [isLoggedin, setIsLoggedin] = useAuth();
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  useEffect(() => {
    if (getLocalStorage === null) {
      setIsLoggedin(false);
    }
  }, [getLocalStorage]);
  // Display the UserOffline component if the user is offline
  // if (!isOnline) {
  //   return <UserOffline />;
  // }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 shadow-xl bg-white h-16">
      <Title />

      {isLoggedin && (
        <div className="text-lg font-semibold">
          Hi {getLocalStorage?.userName}!
        </div>
      )}

      <div className="flex items-center space-x-4">
        <ul className="flex space-x-4">
          <li>
            <Link className="ml-2 p-2 rounded-lg hover:bg-orange-500" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="ml-2 p-2 rounded-lg hover:bg-orange-500"
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="ml-2 p-2 rounded-lg  hover:bg-orange-500 "
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              className="text-black-600 hover:text-black-800"
              data-testid="cart"
              to="/cart"
            >
              <i className="fa-solid fa-cart-shopping text-gray-800 text-2xl">
                {cartItems.length}
              </i>
            </Link>
          </li>

          {/* <li>
            <Link
              className="text-black-600 hover:text-black-800"
              to="/instamart"
            >
              Instamart
            </Link>
          </li> */}
        </ul>
        {/* {user.name} */}
        {isLoggedin ? (
          <button
            className="flex items-center text-red-600 hover:text-red-800"
            onClick={() => {
              clearLocalStorage();
              setIsLoggedin(false);
            }}
          >
            Logout
            <span
              data-testid="online-status"
              className={`ml-2 w-2.5 h-2.5 rounded-full ${
                isOnline ? "bg-green-500" : "bg-red-500"
              }`}
            ></span>
          </button>
        ) : (
          <button
            className="flex items-center text-black-600 hover:text-black-800"
            onClick={() => navigate("/login")}
          >
            Login
            <span
              data-testid="online-status"
              className={`ml-2 w-2.5 h-2.5 rounded-full ${
                isOnline ? "bg-green-500" : "bg-red-500"
              }`}
            ></span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
