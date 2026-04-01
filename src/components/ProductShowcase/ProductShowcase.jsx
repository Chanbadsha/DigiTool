import React, { Suspense, useState } from "react";
import SectionIntro from "./SectionIntro/SectionIntro";
import ProductCards from "./ProductCardsSection/ProductCards";
import CartSection from "../CartSection/CartSection";
import Loading from "../../utils/Loading";

const productPromise = fetch("products.json").then((res) => res.json());

const ProductShowcase = ({ cartValue, setCartValue }) => {
  const [showCart, setShowCart] = useState(false);
  const handleShowCart = () => {
    setShowCart(!showCart);
  };
  return (
    <div className="bg-white lg:py-24 py-6 2xl:px-60 lg:px-20 ">
      <div className=" flex justify-center items-center text-black mb-12 ">
        {" "}
        <SectionIntro handleShowCart={handleShowCart} />
      </div>

      <Suspense fallback={<Loading></Loading>}>
        {showCart ? (
          <CartSection
            cartValue={cartValue}
            setCartValue={setCartValue}
          ></CartSection>
        ) : (
          <ProductCards
            productPromise={productPromise}
            cartValue={cartValue}
            setCartValue={setCartValue}
          />
        )}
      </Suspense>
    </div>
  );
};

export default ProductShowcase;
