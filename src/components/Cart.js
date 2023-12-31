import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });
  //   console.log("cartItems");
  //   console.log(cartItems);
  return (
    <div className="my-4 p-4">
      <h1 className="font-bold text-2xl text-center">Cart Items</h1>
      <div className="w-6/12 bg-gray-100 mx-auto my-4 p-4 shadow-lg">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
