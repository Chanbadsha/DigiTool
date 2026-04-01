import React from "react";

const StatsSection = () => {
  return (
    <div className="bg-linear-to-r  from-[#652ef7] to-[#8a1afb] flex   items-center  md:py-12 py-6 justify-center">
      <div className="flex flex-col justify-center items-center border-r-2 border-gray-400  xl:px-32 md:px-16 px-4 ">
        <h2 className="xl:text-6xl md:text-3xl font-extrabold text-white">
          50K+
        </h2>
        <p className="lg:text-xl md:text-base text-xs text-gray-300">
          Active Users
        </p>
      </div>

      <div className="flex flex-col justify-center items-center border-r-2 border-gray-400  xl:px-32 md:px-16 px-4 ">
        <h2 className="xl:text-6xl md:text-3xl font-extrabold text-white">
          200+
        </h2>
        <p className="lg:text-xl md:text-base text-xs text-gray-300">
          Premium Tools
        </p>
      </div>

      <div className="flex flex-col justify-center items-center   xl:px-32 md:px-16 pl-4 ">
        <h2 className="xl:text-6xl md:text-3xl font-extrabold text-white">
          4.9
        </h2>
        <p className="lg:text-xl md:text-base text-xs text-gray-300">Ratings</p>
      </div>
    </div>
  );
};

export default StatsSection;
