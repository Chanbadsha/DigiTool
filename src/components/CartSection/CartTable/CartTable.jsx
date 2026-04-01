import { Trash } from "lucide-react";

const getCart = () => {
  let cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};
const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const CartTable = ({ cartInfo, setCarts, setCartValue }) => {
  const handleCartProductDelete = () => {
    const carts = getCart();
    const cart = carts.filter((cart) => cartInfo.id !== cart.id);
    saveCart(cart);
    setCartValue(cart.length);
    setCarts(cart);
  };

  return (
    <div className="bg-gray-200 h-20 md:px-12 px-4 rounded-2xl flex justify-between items-center">
      <div className="flex items-center gap-3">
        <span className="md:text-2xl text-xl border rounded-full  px-1.5 py-2  bg-white">
          {cartInfo.icon}
        </span>
        <div>
          <h4 className="font-semibold text-xs md:text-xl">{cartInfo.name}</h4>
          <p>${cartInfo.price}</p>
        </div>
      </div>
      <button
        onClick={handleCartProductDelete}
        className="btn btn-square btn-ghost"
      >
        <Trash />
      </button>
    </div>
  );
};

export default CartTable;
