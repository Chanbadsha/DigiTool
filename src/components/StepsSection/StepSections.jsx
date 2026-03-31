import React from "react";
import StepSectionCard from "./StepSectionCard/StepSectionCard";
import { Rocket, ShoppingBasket, UserPen } from "lucide-react";

const StepSections = () => {
  return (
    <div className="bg-gray-50 lg:py-24 py-6 2xl:px-60 lg:px-20 text-black  ">
      <div className="flex justify-center items-center flex-col gap-3">
        <h1 className="lg:text-5xl text-2xl md:text-4xl font-bold">
          Get Started in 3 Steps
        </h1>
        <p className="text-center max-w-10/12 md:max-w-8/12 text-xs md:text-lg">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="flex flex-col md:flex-row mt-12 px-12 gap-4 justify-around items-center">
        <StepSectionCard
          icon={<UserPen className="xl:w-20 w-16 h-full" />}
          cardTitle={"Create Account"}
          cardDescription={
            "Sign up for free in seconds. No credit card required to get started."
          }
          steps={"1"}
        ></StepSectionCard>
        <StepSectionCard
          icon={<ShoppingBasket className="xl:w-20 w-16 h-full" />}
          cardTitle={"Choose Product"}
          cardDescription={
            "Browse our catalog and select the tools that fit your needs."
          }
          steps={"2"}
        ></StepSectionCard>
        <StepSectionCard
          icon={<Rocket className="xl:w-20 w-16 h-full" />}
          cardTitle={"Start Creating"}
          cardDescription={
            "Download and start using your premium  tools immediately."
          }
          steps={"3"}
        ></StepSectionCard>
      </div>
    </div>
  );
};

export default StepSections;
