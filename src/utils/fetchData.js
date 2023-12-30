const fetchData = async () => {
  let data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.822309&lng=83.34268"
  );
  //   console.log(" res container use-effect loaded");
  data = await data.json();
  console.log("printing the data after API call");
  console.log(data.data);
  return data;
};

export default fetchData;
