import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { FOOD_FIRE_API_URL } from "../constants";
import { Link } from "react-router-dom";
import { filterData } from "../utilis/helper";
import useResData from "../utilis/useResData";
import useOnline from "../utilis/useOnline";

// Body Component for body section: It contains all restaurant cards
const Body = () => {
  // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, FilterRes] = useResData(FOOD_FIRE_API_URL);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const isOnline = useOnline();

  // if user is not Online then return UserOffline component
  // if (!isOnline) {
  //   return <UserOffline />;
  // }

  // use searchData function
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
    } else {
      setFilteredRestaurants(restaurants);
    }
  };

  // if allRestaurants are empty don't render restaurant cards
  if (!allRestaurants) return null;

  return (
    <div className="body-container">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          // update the state variable searchText when typing in input box
          onChange={(e) => {
            setSearchText(e.target.value);
            // automatically call searchData function when user enters data
            searchData(e.target.value, allRestaurants);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // call searchData function when user clicks the search button
            searchData(searchText, allRestaurants);
          }}
        >
          Search
        </button>
      </div>

      {/* if restaurants data is fetched then display restaurant cards, otherwise display Shimmer UI */}
      {allRestaurants?.length === 0 && FilterRes?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {/* Mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
          {(filteredRestaurants === null ? FilterRes : filteredRestaurants).map(
            (restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant?.info?.id}
                  key={restaurant?.info?.id}
                >
                  {/* Redirect to that restaurant menu page on click */}
                  <RestaurantCard {...restaurant?.info} />
                </Link>
              );
            }
          )}
        </div>
      )}
    </div>
  );
};

export default Body;
