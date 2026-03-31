import { Loader, Play } from "lucide-react";
import heroBanner from "../../assets/banner.png";

const HeroSection = () => {
  return (
    <div className="hero bg-white text-black py-6 lg:py-20 lg:px-10 text-center md:text-left">
      <div className="hero-content flex-col md:flex-row-reverse">
        <img
          src={heroBanner}
          className="w-full max-w-xs mb-6 md:mb-0 md:max-w-sm xl:max-w-lg rounded-lg shadow-xl lg:shadow-2xl "
        />
        <div>
          <p className="bg-[#e1e7ff] inline-block px-2 rounded-full text-[#622ff7] font-bold ">
            <span className="flex justify-center items-center text-xs md:text-base">
              {" "}
              <Loader className="h-4" />
              New: AI-Powered Tools Available
            </span>
          </p>
          <h1 className="xl:text-7xl lg:text-5xl md:text-4xl text-3xl font-extrabold xl:leading-20 pt-2">
            Supercharge Your Digital Workflow
          </h1>
          <p className="lg:py-6 md:py-4 py-2 text-xs md:text-base lg:text-lg text-[#627382] lg:max-w-10/12 ">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <div className="flex gap-2 justify-center md:justify-start">
            {" "}
            <button className="bg-linear-to-r  from-[#652ef7] to-[#8a1afb] px-4 md:py-2 rounded-full text-xs  md:text-base hover:from-white hover:to-white btn   text-white hover:text-black font-bold hover:border-t-2 ">
              Explore Products
            </button>
            <button className="hover:bg-linear-to-r  from-[#652ef7] to-[#8a1afb] px-4 md:py-2  rounded-full text-xs  md:text-base btn  text-black font-bold btn-outline hover:text-white hover:border-none duration-500  ">
              <Play /> Watch demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
