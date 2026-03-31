const buttonStyles = {
  primary: "bg-linear-to-r text-white from-[#652ef7] to-[#8a1afb] ",
  secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
};

const PricingCard = ({ pricingInfo }) => {
  const {
    name,
    description,
    tag,
    price,
    period,
    features,
    buttonText,
    buttonType,
  } = pricingInfo;
  console.log(pricingInfo);
  return (
    <div
      className={` card max-w-96 ${tag ? "bg-linear-to-r text-white from-[#652ef7] to-[#8a1afb] " : "bg-gray-50  text-black"}  mt-12  shadow-sm`}
    >
      <div className="card-body w-full   ">
        {tag && (
          <span
            className={`badge badge-md absolute -top-4  capitalize font-bold badge-warning  self-center  `}
          >
            {tag}
          </span>
        )}

        <h2 className="xl:text-4xl text-xl  font-bold ">{name}</h2>

        <p className="lg:text-sm text-xs  mb-0 pb-0">{description}</p>
        <div className="flex justify-between ">
          <span className="text-xl  capitalize  ">
            <span className="font-semibold xl:text-4xl text-xl lg:text-2xl">
              {" "}
              ${price}
            </span>
            /<small>{period}</small>
          </span>
        </div>
        <ul className="mt-2 flex flex-col gap-2 text-xs xl:text-base  font-semibold">
          {features.map((feature) => (
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 lg:size-6 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="capitalize">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-12 xl:w-8/12 mx-auto">
          <button
            className={`btn ${buttonStyles[buttonType]} btn-block mt-auto  font-bold px-2 py-2 rounded-full text-xs md:text-base `}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
