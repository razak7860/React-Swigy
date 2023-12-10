import { RES_URL } from "../utils/constant";
const RestaurantCard = (props) => {
  // console.log("props");
  let { resData } = props;
  let { name, cuisines, avgRating, deliveryTime } = resData;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={RES_URL + resData.info.cloudinaryImageId}
      />
      <h3>{resData?.info.name}</h3>
      <h4>{resData?.info.cuisines.join(", ")}</h4>
      <h4> {resData?.info.avgRating}*</h4>
      <h4>{resData?.info.sla.deliveryTime} Minutes</h4>
    </div>
  );
};

export default RestaurantCard;
