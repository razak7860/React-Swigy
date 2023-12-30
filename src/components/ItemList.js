import { RES_URL } from "../utils/constant";
const ItemList = (props) => {
  console.log("items is ", props.items);
  const { items } = props;
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 text-left border-b-2  flex justify-between h-[200px] "
        >
          <div className=" w-9/12 ">
            <div className="py-2">
              <span>{item.card.info.name}</span>
            </div>
            <div>
              <p className="text-sm">{item.card.info.description}</p>
            </div>
          </div>
          <div className="w-3/12  relative  ">
            <div className="absolute   ">
              <button className="bg-black text-white rounded-lg mx-14 shadow-lg p-2">
                Add +
              </button>
            </div>
            {item.card.info.imageId && (
              <img
                src={RES_URL + item.card.info.imageId}
                className="w-[300px] h-[100px]"
                alt=""
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
