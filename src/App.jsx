import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/Hero/HeroSection";
import ProductShowcase from "./components/ProductShowcase/ProductShowcase";
import StatsSection from "./components/StatsSection/StatsSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <StatsSection />
      <ProductShowcase />
    </>
  );
}

export default App;
