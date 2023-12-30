import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchData from "../utils/fetchData";
import { resList } from "../utils/mockdata";
import fetchData from "../utils/fetchData";
import { higherOrderFunction } from "./RestaurantCard";
import UserContext from "../utils/UserContext";
const RestaurantContainer = () => {
  let [textValue, setTextValue] = useState("");
  const [resData, setResData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const { loggedInUser, setUserName } = useContext(UserContext);
  console.log("resdata is ", resData);
  const PromotedRestaurant = higherOrderFunction(RestaurantCard);
  console.log("Promoted");
  console.log(PromotedRestaurant);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();

      fetchData(setResData, setFilterData);
      setResData(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilterData(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    };
    getData();
  }, []);

  return (
    <div>
      <div className="search flex my-8 mx-4">
        <input
          className="text border border-black m-2 rounded-lg"
          value={textValue}
          onChange={(event) => {
            textValue = event.target.value;
            setTextValue(textValue);
          }}
        />
        <button
          className="mx-4 bg-green-100 py-3 px-6 rounded-lg text-lg"
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

        <button
          className="btn mx-20 bg-red-50 py-3 px-6 rounded-lg"
          onClick={() => {
            let filteredData = resData.filter(
              (res) => res.info.avgRating > 4.1
            );
            console.log("button clicked");
            setFilterData(filteredData);
          }}
        >
          Top Restaurants
        </button>

        <input
          className="border border-black m-2  p-2 rounded-lg outline-none"
          value={loggedInUser}
          onChange={(event) => setUserName(event.target.value)}
        />
      </div>
      <div className="res-container flex flex-wrap my-5 ">
        {/* {console.log("res data is: ", resData)} */}
        {filterData.map((data, i) => (
          <Link
            key={data.info.id}
            to={"/restaurant/" + data.info.id}
            className="link"
          >
            {/* {data?.info?.loyaltyDiscoverPresentationInfo === "undefined" ? ( */}
            {/* {console.log(
              data.info.name,
              data?.info?.loyaltyDiscoverPresentationInfo
            )} */}
            <RestaurantCard resData={data} />
            {/* ) : (
              <PromotedRestaurant  resData={data}/>
            )} */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantContainer;
