import React from "react";
import Offline from "../Images/offline.png";

const UserOffline = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center pt-20 p-5">
      <h1 className="text-4xl font-bold text-red-600 mb-4">🔴 Offline!</h1>
      <img
        className="w-48 h-48 object-cover mb-4"
        src={Offline}
        alt="Offline"
      />
      <p className="text-lg text-gray-700">
        Sorry, it seems that you are currently offline.
      </p>
    </div>
  );
};

export default UserOffline;
