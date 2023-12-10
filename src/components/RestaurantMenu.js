import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    console.log("resInfo is NULL");
    return <Shimmer />;
  } else {
    const { name, cuisines, costForTwoMessage } =
      resInfo.data.cards[0].card.card.info;
    const temp = resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
    const menu = temp.slice(2, temp.length - 2);
    console.log("menu is ", resInfo);
    return (
      <div>
        <h1>{name}</h1>
        <p>{cuisines.join(", ") + " - " + costForTwoMessage}</p>
        <h2>Menu</h2>
        <ul>
          {menu.map((data, idx) => {
            return (
              <div key={idx}>
                <h3>{data.card.card.title}</h3>
                {data?.card?.card?.categories != undefined ? (
                  <ul>
                    {data.card.card.categories.map((category, idx) => {
                      return (
                        <div key={idx}>
                          <h4>{category.title}</h4>
                          <ul>
                            {category.itemCards.map((item, idx) => {
                              return (
                                <li key={idx}>
                                  {item.card.info.name +
                                    " - Rs " +
                                    item.card.info.price / 100}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      );
                    })}
                  </ul>
                ) : (
                  <ul>
                    {data.card.card.itemCards.map((item, idx) => {
                      return (
                        <li key={idx}>
                          {item.card.info.name +
                            " - Rs " +
                            item.card.info.price / 100}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
};
export default RestaurantMenu;

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.822309&lng=83.34268&restaurantId=73579
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.822309&lng=83.34268&restaurantId=581810
