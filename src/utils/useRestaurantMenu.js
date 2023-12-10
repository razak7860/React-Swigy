import { useState, useEffect } from "react";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    console.log("Menu use effect loaded");
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.822309&lng=83.34268&restaurantId=" +
        resId
    );
    const json = await data.json();
    // console.log("data is", json);
    setResInfo(json);
  };

  return resInfo;
};
export default useRestaurantMenu;
