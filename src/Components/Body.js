import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { FOOD_FIRE_API_URL } from "../constants";
import { Link } from "react-router-dom";
import { filterData } from "../utilis/helper";
import useResData from "../utilis/useResData";
import useOnline from "../utilis/useOnline";
import UserOffline from "./UserOffline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, FilterRes] = useResData(FOOD_FIRE_API_URL);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const isOnline = useOnline();

  if (!isOnline) {
    return <UserOffline />;
  }

  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
    } else {
      setFilteredRestaurants(restaurants);
    }
  };

  if (!allRestaurants) return null;

  return (
    <div className="pt-20 p-5 bg-gray-50">
      <div className="flex justify-center items-center mb-5">
        <input
          type="text"
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            searchData(e.target.value, allRestaurants);
          }}
        />
        <button
          className="ml-2 p-2 bg-orange-600 text-white rounded-lg shadow hover:bg-orange-500 focus:ring focus:ring-orange-300"
          onClick={() => searchData(searchText, allRestaurants)}
        >
          Search
        </button>
      </div>
      {allRestaurants?.length === 0 && FilterRes?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap justify-center gap-4">
          {(filteredRestaurants === null ? FilterRes : filteredRestaurants).map(
            (restaurant) => (
              <Link
                to={"/restaurant/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                <RestaurantCard {...restaurant?.info} />
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Body;
