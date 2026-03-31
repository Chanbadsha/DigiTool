import React from "react";
const tagColors = {
  popular: "bg-blue-100 text-blue-600",
  bestSeller: "bg-green-100 text-green-600",
  new: "bg-purple-100 text-purple-600",
};
const ProductCard = ({ product }) => {
  console.log(product);
  const { name, description, tag, price, period, features, icon } = product;
  return (
    <div className="card w-full bg-gray-50 text-black h-full shadow-sm">
      <div className="card-body w-full   ">
        <span
          className={`badge badge-md capitalize font-bold badge-warning  self-end  ${tagColors[tag]} `}
        >
          {tag}
        </span>

        <span className="text-2xl lg:text-4xl border rounded-full self-start px-1.5 py-2 lg:px-3 lg:py-4 bg-white">
          {icon}
        </span>

        <h2 className="lg:text-2xl text-xl  font-bold ">{name}</h2>

        <p className="text-sm text-gray-600">{description}</p>
        <div className="flex justify-between ">
          <span className="text-xl capitalize  ">
            <span className="font-semibold"> ${price}</span>/
            <small>{period}</small>
          </span>
        </div>
        <ul className="mt-2 flex flex-col gap-2 text-xs lg:text-base  font-semibold">
          {features.map((feature) => (
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 lg:size-6 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="capitalize">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <button className="btn btn-primary btn-block mt-auto bg-linear-to-r text-white font-bold from-[#652ef7] to-[#8a1afb] px-2 py-2 rounded-full text-xs xs:hidden md:text-base ">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
