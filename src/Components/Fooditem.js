import { IMG_CDN_URL } from "../constants";

// Restaurant card component: Image, name, cuisine
const FoodItem = ({ cloudinaryImageId, name, description, price }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 w-64 flex flex-col">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt={name}
        className="w-full h-40 object-cover rounded-md"
      />
      <div className="flex-grow mt-2">
        <h3 className="text-lg font-semibold truncate">{name}</h3>
        <h5 className="text-gray-500 truncate">{description}</h5>
        <h5 className="text-gray-600 truncate">Rupess:{price / 100}</h5>
      </div>
    </div>
  );
};

export default FoodItem;
