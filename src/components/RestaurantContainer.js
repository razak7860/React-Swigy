import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { resList } from "../utils/mockdata";

const RestaurantContainer = () => {
  let [textValue, setTextValue] = useState("");
  const [resData, setResData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.822309&lng=83.34268"
    );
    console.log(" res container use-effect loaded");
    data = await data.json();
    console.log("printing the data after API call");
    console.log(data);

    setResData(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterData(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return (
    <div>
      <div className="search">
        <input
          className="text"
          value={textValue}
          onChange={(event) => {
            textValue = event.target.value;
            setTextValue(textValue);
          }}
        />
        <button
          onClick={() => {
            let data = resData.filter((res) =>
              res.info.name
                .toLowerCase()
                .includes(textValue.toLocaleLowerCase())
            );
            // console.log(searchData);
            setFilterData(data);
          }}
        >
          search
        </button>
      </div>

      <button
        className="btn"
        onClick={() => {
          let filteredData = resData.filter((res) => res.info.avgRating > 4.1);
          console.log("button clicked");
          setFilterData(filteredData);
        }}
      >
        Top Restaurants
      </button>
      <div className="res-container ">
        {console.log("res data is: ", resData)}
        {filterData.map((data, i) => (
          <Link
            key={data.info.id}
            to={"/restaurant/" + data.info.id}
            className="link"
          >
            <RestaurantCard resData={data} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantContainer;
