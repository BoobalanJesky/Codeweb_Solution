import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCard from "../Reusable/Accountcard";

const Dominance = () => {
  const cardData = [
    { description: "Retail, Ecommerce" },
    { description: "Education & E-learning" },
    { description: "Healthcare & Fitness" },
    { description: "Logistics & Distribution" },
    { description: "Social Networking" },
    { description: "Real Estate" },
    { description: "Travel & Hospitality" },
    { description: "Food & Restaurant" },
  ];

  return (
    <div>
      <div className="flex justify-center">
        <div>
          <p className="text-[14px]  text-center leading-normal font-semibold text-text-color">
            Industries We Serve
          </p>
          <p className="text-[33px] font-bold leading-normal mt-[5px] m-10 md:mb-[70px] text-[#222] ">
            Our Impactful Presence in Various Industries
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-[10px] sm:gap-[40px]">
        {cardData.map((card, index) => (
          <AccountCard
            key={index}
            title=""
            description={card.description}
            icon={<AddShoppingCartIcon/>}
            className="w-[228px] h-[176px] mx-auto flex flex-col justify-center items-center hover:bg-[#005CFF]"
            imageClassName="mx-auto hover:text-[#fff]"
          />
        ))}
      </div>
    </div>
  );
};

export default Dominance;