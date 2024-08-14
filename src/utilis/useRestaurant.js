import { useEffect, useState } from "react";

const useResMenuData = (
  FOODFIRE_MENU_API_URL,
  resId,
  RESTAURANT_TYPE_KEY,
  MENU_ITEM_TYPE_KEY
) => {
  const [restaurant, setRestaurant] = useState(null); // State for restaurant data
  const [menuItems, setMenuItems] = useState([]); // State for menu items data

  useEffect(() => {
    getRestaurantInfo(); // Fetch restaurant and menu data when component mounts
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(FOODFIRE_MENU_API_URL + resId);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const json = await response.json();

      // Extract restaurant data
      const restaurantData =
        json?.data?.cards
          ?.map((x) => x.card)
          ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
          ?.info || null;
      setRestaurant(restaurantData);

      // Extract menu items data
      const menuItemsData =
        json?.data?.cards
          .find((x) => x.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
          ?.filter((x) => x["@type"] === MENU_ITEM_TYPE_KEY)
          ?.map((x) => x.itemCards)
          .flat()
          .map((x) => x.card?.info) || [];

      // Ensure unique menu items
      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find((x) => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      });

      setMenuItems(uniqueMenuItems); // Update state with menu items
    } catch (err) {
      setMenuItems([]); // Clear menu items on error
      setRestaurant(null); // Clear restaurant data on error
      console.error("Error fetching data:", err);
    }
  }

  return [restaurant, menuItems];
};

export default useResMenuData;
