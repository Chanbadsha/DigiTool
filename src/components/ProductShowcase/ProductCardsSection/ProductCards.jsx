import React, { use } from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductCards = ({ productPromise, cartValue, setCartValue }) => {
  const products = use(productPromise);

  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 mt-12 gap-12 md:px-12 px-6">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          cartValue={cartValue}
          setCartValue={setCartValue}
        />
      ))}
    </div>
  );
};

export default ProductCards;
