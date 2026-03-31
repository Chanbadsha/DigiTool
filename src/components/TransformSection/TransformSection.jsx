import React from "react";

const TransformSection = () => {
  return (
    <div className="bg-linear-to-r  from-[#652ef7] to-[#8a1afb] text-white lg:py-24 py-6 2xl:px-60 lg:px-20 ">
      <div className="flex justify-center items-center flex-col gap-3">
        <h1 className="lg:text-5xl text-2xl md:text-4xl font-bold text-center">
          Ready to Transform Your Workflow?
        </h1>
        <p className="text-center max-w-10/12 md:max-w-6/12 text-xs md:text-lg">
          Join thousands of professionals who are already using Digitools to
          work smarter.Start your free trial today.
        </p>

        <div className="flex gap-2 justify-center md:justify-start">
          {" "}
          <button className="bg-linear-to-r  hover:from-[#652ef7] hover:to-[#8a1afb] px-4 md:py-2 rounded-full text-xs  md:text-base bg-white btn   text-black hover:text-white font-bold hover:border-t-2 ">
            Explore Products
          </button>
          <button className="text-white px-4 md:py-2  rounded-full text-xs  md:text-base btn   font-bold btn-outline hover:text-white hover:border-none duration-500  ">
            View Pricing
          </button>
        </div>

        <small className="text-center">
          14-day free trial • No credit card required • Cancel anytime
        </small>
      </div>
    </div>
  );
};

export default TransformSection;
