import { useParams } from "react-router-dom";
import {
  FOODFIRE_MENU_API_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../constants";
import { MenuShimmer } from "./Shimmer";
import useRestaurant from "../utilis/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, menuItems] = useRestaurant(
    FOODFIRE_MENU_API_URL,
    resId,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY
  );

  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div className="pt-20 p-5 flex flex-col items-center">
      {/* Restaurant Summary Section */}
      <div className="w-full max-w-4xl mb-8">
        <div className="flex flex-col md:flex-row items-center md:space-x-8 ">
          <img
            className="w-full md:w-1/3 rounded-lg shadow-md object-cover"
            src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
            alt={restaurant?.name}
          />
          <div className="mt-4 md:mt-0 flex-1">
            <h2 className="text-3xl font-bold mb-2 text-center md:text-left">
              {restaurant?.name}
            </h2>
            <p className="text-lg text-gray-600 text-center md:text-left">
              {restaurant?.cuisines?.join(", ")}
            </p>
            <div className="flex justify-center md:justify-start items-center mt-4 space-x-2 text-gray-500">
              <div
                className={`px-3 py-1 rounded-md ${
                  restaurant?.avgRating < 4
                    ? "bg-red-200 text-red-700"
                    : restaurant?.avgRating === "--"
                    ? "bg-gray-100 text-gray-700"
                    : "bg-green-500 text-white"
                }`}
              >
                <i className="fas fa-star"></i> {restaurant?.avgRating}
              </div>
              <span>|</span>
              <div>{restaurant?.sla?.slaString}</div>
              <span>|</span>
              <div>{restaurant?.costForTwoMessage}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items Section */}
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold">Recommended</h3>
          <p className="text-sm text-gray-500">{menuItems.length} ITEMS</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuItems.map((item) => (
            <div
              className="flex items-center justify-between p-4 border rounded-lg shadow-sm"
              key={item?.id}
            >
              <div className="flex-1">
                <h4 className="font-semibold text-lg">{item?.name}</h4>
                <p className="text-gray-600 text-md">
                  {item?.price > 0
                    ? new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                      }).format(item?.price / 100)
                    : ""}
                </p>
                <p className="text-sm text-gray-500">{item?.description}</p>
              </div>
              {item?.imageId && (
                <div className="ml-4 flex flex-col items-center">
                  <img
                    className="w-24 h-24 rounded-lg object-cover"
                    src={ITEM_IMG_CDN_URL + item?.imageId}
                    alt={item?.name}
                  />
                  <button className="mt-2 bg-orange-600 text-white text-sm py-1 px-2 rounded-md">
                    ADD +
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
