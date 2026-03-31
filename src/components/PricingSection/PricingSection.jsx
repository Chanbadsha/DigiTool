import { use } from "react";
import PricingCard from "./PricingCard/PricingCard";

const PricingSection = ({ pricingInfoPromise }) => {
  const pricingInfos = use(pricingInfoPromise);
  //   (prisingInfo);
  return (
    <div className="bg-white lg:py-24 py-6 2xl:px-60 lg:px-20 text-black ">
      <div className="flex justify-center items-center flex-col gap-3">
        <h1 className="lg:text-5xl text-2xl md:text-4xl font-bold">
          Simple, Transparent Pricing
        </h1>
        <p className="text-center max-w-10/12 md:max-w-8/12 text-xs md:text-lg">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="flex justify-around items-center px-12 gap-5 md:flex-row flex-col">
        {pricingInfos.map((pricingInfo, index) => (
          <PricingCard key={index} pricingInfo={pricingInfo}></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
