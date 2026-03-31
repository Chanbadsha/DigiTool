import { Suspense } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/Hero/HeroSection";
import PricingSection from "./components/PricingSection/PricingSection";
import ProductShowcase from "./components/ProductShowcase/ProductShowcase";
import StatsSection from "./components/StatsSection/StatsSection";
import StepSections from "./components/StepsSection/StepSections";
import TransformSection from "./components/TransformSection/TransformSection";
const pricingInfoPromise = fetch("pricing.json").then((res) => res.json());
function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <StatsSection />
      <ProductShowcase />
      <StepSections />
      <Suspense>
        <PricingSection pricingInfoPromise={pricingInfoPromise} />
      </Suspense>
      <TransformSection />
    </>
  );
}

export default App;
