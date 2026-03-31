import React from "react";

const StepSectionCard = ({ icon, cardTitle, cardDescription, steps }) => {
  return (
    <div className="card bg-white w-full lg:w-96 xl:h-full h-80 shadow-sm">
      <div className="card-body flex justify-center items-center mb-10  xl:mb-12 text-center">
        <span
          className={`badge badge-md capitalize border-none badge-warning  self-end  bg-linear-to-r text-white font-bold from-[#652ef7] to-[#8a1afb] px-3 py-4 rounded-full `}
        >
          {steps}
        </span>
        <span className=" mt-4  xl:mt-6   border  rounded-full  px-1.5 py-2 lg:px-3 lg:py-4 bg-[#f1e9fe] text-[#841cf9]">
          {icon}
        </span>

        <h2 className="lg:text-2xl text-xl  font-bold ">{cardTitle}</h2>

        <p className="text-sm text-gray-600 xl:max-w-10/12">
          {cardDescription}
        </p>
      </div>
    </div>
  );
};

export default StepSectionCard;
