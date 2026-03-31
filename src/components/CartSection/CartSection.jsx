import React, { useEffect, useState } from "react";
import CartTable from "./CartTable/CartTable";
const getCart = () => {
  let cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};
const CartSection = () => {
  const [price, setPrice] = useState(0);
  const [carts, setCarts] = useState(getCart());
  useEffect(() => {
    const total = carts.reduce((sum, cart) => sum + cart.price, 0);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPrice(total);
  }, [carts]);

  return (
    <div className="text-black border rounded-2xl min-h-60 px-12 py-10 flex flex-col gap-4 ">
      <h2>Your Carts</h2>
      <div className="flex flex-col gap-4">
        {carts.map((cart) => (
          <CartTable
            cartInfo={cart}
            key={cart.id}
            setCarts={setCarts}
          ></CartTable>
        ))}
      </div>
      <p className="flex justify-between">
        <span>Total:</span> <span>${price}</span>
      </p>
      <div className="flex justify-center items-center mx-20 ">
        <button className="bg-linear-to-r  from-[#652ef7] to-[#8a1afb] px-4 md:py-2 rounded-full text-xs  md:text-base hover:from-white hover:to-white btn   text-white hover:text-black font-bold hover:border-t-2  w-full">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSection;
