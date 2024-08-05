import { restaurantList } from "../constants"; // Make sure the path is correct
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

// Filter the restaurant data according to the input type
function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

// Body Component for the body section: It contains all restaurant cards
const Body = () => {
  // State variables
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // API call to fetch restaurant data
    async function getRestaurants() {
      try {
        const response = await fetch(
          "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await response.json();
        console.log(json);

        // Function to check and extract the restaurant data
        function checkJsonData(jsonData) {
          for (let i = 0; i < jsonData?.data?.cards.length; i++) {
            let checkData =
              jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants;
            if (checkData !== undefined) {
              return checkData;
            }
          }
          return [];
        }

        const resData = checkJsonData(json);
        setAllRestaurants(resData);
        setFilteredRestaurants(resData);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    }

    getRestaurants();
  }, []);

  //not render component(Early return)
  if (!allRestaurants) return null;

  // if (filteredRestaurants.length === 0)
  //   return <h1>No resaturant matched ur filter</h1>;
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            // Filter the data and update the state of the restaurants list
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {/**we have to write logic for no resaturant found */}
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard {...restaurant?.info} key={restaurant?.info?.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
