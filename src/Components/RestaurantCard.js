import { IMG_CDN_URL } from "../constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 w-64 flex flex-col">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt={name}
        className="w-full h-40 object-cover rounded-md"
      />
      <div className="flex-grow mt-2">
        <h3 className="text-lg font-semibold truncate">{name}</h3>
        <h5 className="text-gray-500 truncate">{cuisines.join(", ")}</h5>
        <h5 className="text-gray-600 truncate">{areaName}</h5>
      </div>
      <div className="flex items-center justify-between mt-2">
        <h4
          className={`px-2 py-1 rounded-lg text-sm ${
            avgRatingString < 4
              ? "bg-red-200 text-red-700"
              : avgRatingString === "--"
              ? "bg-gray-200 text-gray-700"
              : "bg-green-500 text-white"
          }`}
        >
          <i className="fa-solid fa-star"></i> {avgRatingString}
        </h4>
        <h4 className="text-gray-600">
          {sla?.lastMileTravelString ?? "2.0 km"}
        </h4>
        <h4 className="text-gray-600">{costForTwo ?? "₹200 for two"}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
