import { Suspense, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/Hero/HeroSection";
import PricingSection from "./components/PricingSection/PricingSection";
import ProductShowcase from "./components/ProductShowcase/ProductShowcase";
import StatsSection from "./components/StatsSection/StatsSection";
import StepSections from "./components/StepsSection/StepSections";
import TransformSection from "./components/TransformSection/TransformSection";
import Footer from "./components/Footer/Footer";
const pricingInfoPromise = fetch("pricing.json").then((res) => res.json());

const getCart = () => {
  let cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};
function App() {
  const [cartValue, setCartValue] = useState(getCart().length);
  return (
    <>
      <Header cartValue={cartValue} setCartValue={setCartValue} />
      <div className="mt-16">
        <HeroSection />
      </div>
      <StatsSection />
      <ProductShowcase cartValue={cartValue} setCartValue={setCartValue} />
      <StepSections />
      <Suspense>
        <PricingSection pricingInfoPromise={pricingInfoPromise} />
      </Suspense>
      <TransformSection />
      <Footer />
    </>
  );
}

export default App;
