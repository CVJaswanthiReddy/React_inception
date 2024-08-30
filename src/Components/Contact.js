import { useState } from "react";
import contactUs from "../Images/contactUs.png";

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 bg-gray-50">
      <div className="md:w-1/2 flex justify-center">
        <img
          src={contactUs}
          alt="Contact us"
          className="w-full h-auto max-w-md"
        />
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            placeholder="Type your Message here..."
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-500 transition duration-200"
          >
            Submit
          </button>
          {message && (
            <span className="text-green-600 block mt-4">
              Thanks for contacting FoodFire, We will reply ASAP.
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
