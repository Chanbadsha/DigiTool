import React, { useEffect, useState } from "react";
import CartTable from "./CartTable/CartTable";
const getCart = () => {
  let cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};
const CartSection = ({ cartValue, setCartValue }) => {
  const [price, setPrice] = useState(0);
  const [carts, setCarts] = useState(getCart());
  useEffect(() => {
    const total = carts.reduce((sum, cart) => sum + cart.price, 0);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPrice(total);
  }, [carts]);

  const handleProceedCheckout = () => {
    localStorage.clear("cart");
    setCarts(getCart());
  };

  return (
    <div>
      {carts.length > 0 ? (
        <div className="text-black border rounded-2xl min-h-60 px-12 py-10 flex flex-col gap-4 ">
          <h2>Your Carts</h2>
          <div className="flex flex-col gap-4">
            {carts.map((cart) => (
              <CartTable
                cartInfo={cart}
                key={cart.id}
                setCarts={setCarts}
                cartValue={cartValue}
                setCartValue={setCartValue}
              ></CartTable>
            ))}
          </div>
          <p className="flex justify-between">
            <span>Total:</span> <span>${price}</span>
          </p>
          <div className="flex justify-center items-center mx-20 ">
            <button
              onClick={handleProceedCheckout}
              className="bg-linear-to-r  from-[#652ef7] to-[#8a1afb] px-4 md:py-2 rounded-full text-xs  md:text-base hover:from-white hover:to-white btn   text-white hover:text-black font-bold hover:border-t-2  w-full"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center justify-center py-20 bg-gray-50 border rounded-xl">
          {/* Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-gray-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13M7 13L5.4 5M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
            />
          </svg>

          {/* Title */}
          <h2 className="text-xl font-bold text-gray-700">
            Your Cart is Empty
          </h2>

          {/* Description */}
          <p className="text-gray-500 mt-2 text-center max-w-md px-2">
            Looks like you haven’t added anything yet. Start shopping to fill
            your cart with amazing products!
          </p>

          {/* Button */}
          <button
            onClick={() => (window.location.href = "/")}
            className="mt-6 px-6 py-2 rounded-full bg-linear-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:scale-105 transition"
          >
            Go Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default CartSection;
