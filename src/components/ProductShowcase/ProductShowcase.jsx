import React, { Suspense } from "react";
import SectionIntro from "./SectionIntro/SectionIntro";
import ProductCards from "./ProductCardsSection/ProductCards";

const productPromise = fetch("products.json").then((res) => res.json());

const ProductShowcase = () => {
  return (
    <div className="bg-white lg:py-24 py-6 2xl:px-60 lg:px-20 ">
      <div className=" flex justify-center items-center text-black ">
        {" "}
        <SectionIntro />
      </div>

      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <ProductCards productPromise={productPromise} />
      </Suspense>
    </div>
  );
};

export default ProductShowcase;
