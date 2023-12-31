import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const { title, itemCards } = props.data;
  const [showItems, setShowItems] = useState(false);

  //   console.log("items cards is ", props.data);
  const clickHandler = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="w-6/12 bg-gray-100 mx-auto my-4 p-4 shadow-lg">
      <div
        className="flex justify-between cursor-pointer"
        onClick={clickHandler}
      >
        <h1 className="text-lg font-bold">{title}</h1>
        <div> ⬇️</div>
      </div>
      <div>{showItems && <ItemList items={itemCards} />}</div>
    </div>
  );
};
export default RestaurantCategory;
