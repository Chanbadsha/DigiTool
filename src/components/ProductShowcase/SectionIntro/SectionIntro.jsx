const SectionIntro = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <h1 className="lg:text-5xl text-2xl md:text-4xl font-bold">
        Premium Digital Tools
      </h1>
      <p className="text-center max-w-10/12 md:max-w-8/12 text-xs md:text-lg">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>
      {/* <div className="flex justify-center md:justify-start border rounded-full overflow-hidden">
        <button
          onClick={handleCartToggle}
          className={`px-4 md:py-2 rounded-full text-xs md:text-base font-bold
  transition-all duration-3000
  ${cartToggle ? "bg-purple-600 text-white" : "bg-transparent text-black"}`}
        >
          Products
        </button>
        <button
          onClick={handleCartToggle}
          className={`px-8 md:py-2 rounded-full text-xs md:text-base font-bold border-none transition-all duration-300 ease-in-out
      ${
        !cartToggle
          ? "bg-linear-to-r from-[#652ef7] to-[#8a1afb] text-white "
          : "btn btn-outline"
      }`}
        >
          Cart
        </button>
      </div> */}

      <div className="tabs text-black tabs-box bg-white rounded-full border gap-0  p-0  w-48 md:w-60  flex duration-7500">
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab text-black checked:text-white rounded-l-full rounded-r-full  checked:bg-linear-to-r  from-[#652ef7] to-[#8a1afb] flex-1 duration-75`}
          aria-label="Products"
        />
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab text-black checked:text-white  rounded-r-full rounded-l-full checked:bg-linear-to-r  from-[#652ef7] to-[#8a1afb] flex-1 duration-75 `}
          aria-label="Cart"
          defaultChecked
        />
      </div>
    </div>
  );
};

export default SectionIntro;
