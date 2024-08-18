import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import burgerImage from "../Images/burgerImage.png";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log("parent componentDidMount");
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-center">
      <div className="pt-20 p-5">
        {isVisible ? (
          <>
            <Link to="/about">
              <button
                className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 mb-5"
                onClick={() => setIsVisible(false)}
              >
                Hide My Profile
              </button>
            </Link>
            <Outlet />
          </>
        ) : (
          <Link to="profile">
            <button
              className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 mb-5"
              onClick={() => setIsVisible(true)}
            >
              Show My Profile
            </button>
          </Link>
        )}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center space-y-5 md:space-y-0 md:space-x-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold">
              Welcome to <br /> The world of <br />
              <span className="text-orange-500">Tasty & Fresh Food</span>
            </h1>
            <h4 className="text-xl mt-5">
              "Better you will feel if you eat a Food
              <span className="text-orange-500">Villa</span> healthy meal"
            </h4>
          </div>
          <div>
            <img
              src={burgerImage}
              alt="Food Image"
              className="w-2/3 md:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
