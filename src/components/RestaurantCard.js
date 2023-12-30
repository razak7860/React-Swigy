import { RES_URL } from "../utils/constant";
const RestaurantCard = (props) => {
  // console.log("props");
  let { resData } = props;
  let { name, cuisines, avgRating, deliveryTime } = resData;
  return (
    <div className="res-card w-[250px] h-[350px] border border-orange-200 m-5 text-sm pb-6 flex flex-col items-start">
      <img
        className="res-logo w-[300px] h-[200px] object-fill rounded-2xl"
        src={RES_URL + resData.info.cloudinaryImageId}
      />
      <h2 className="font-bold">{resData?.info.name}</h2>
      <h4>{resData?.info.cuisines.join(", ")}</h4>
      <h4> {resData?.info.avgRating}*</h4>
      <h4>{resData?.info.sla.deliveryTime} Minutes</h4>
    </div>
  );
};
export const higherOrderFunction = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        {/* <label>Promoted</label>
        <img
          src="https://media-assets.swiggy.com/Swiggy%20One%20Lite/One_lite_vertical_logo.png"
          alt=""
        /> */}
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
