import React, { useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../utilis/useLocalStorage";
import useAuth from "../utilis/useAuth";
import useOnline from "../utilis/useOnline";
import UserOffline from "./UserOffline";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
      "Password must contain at least one uppercase, one lowercase, one number, and one special character"
    ),
});

const Login = () => {
  const navigate = useNavigate();
  const [getLocalStorage, setLocalStorage] = useLocalStorage("user");
  const [isLoggedin, setIsLoggedin] = useAuth();
  const isOnline = useOnline();

  useEffect(() => {
    if (getLocalStorage?.token?.length === 100) {
      setIsLoggedin(true);
      navigate(-1);
    }
  }, [getLocalStorage, navigate, setIsLoggedin]);

  if (!isOnline) {
    return <UserOffline />;
  }

  if (getLocalStorage?.token?.length === 100) return null;

  const handleNavigate = (values) => {
    // Add your logic to handle form submission, authentication, and navigation
    console.log("Form values:", values);
  };

  return (
    <div className="pt-20 p-5 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
        <Formik
          validationSchema={schema}
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            handleNavigate(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form noValidate onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={`mt-1 p-2 w-full border rounded ${
                    errors.email && touched.email
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {errors.email && touched.email && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className={`mt-1 p-2 w-full border rounded ${
                    errors.password && touched.password
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {errors.password && touched.password && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.password}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full hover:bg-orange-500 m-2 text-black p-2 rounded mt-4"
              >
                Login
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
