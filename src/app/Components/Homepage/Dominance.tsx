"use client "
import React from "react";
import styles from "../../css/about.module.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
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
          <p className=" text-[24px] sm:text-[28px] md:text-[30px] lg:text-[33px] font-bold leading-normal mt-[5px] m-10 md:mb-[70px] text-center text-[#222] ">
            Our Impactful Presence in Various Industries
          </p>
        </div>
      </div>
      {/* <div className=`grid sm:grid-cols-2 lg:grid-cols-4 justify-center ${styles.customcols} gap-[88px] gap-y-[40px] mt-[69px]`> */}
      <div className={`grid sm:grid-cols-2 lg:grid-cols-4  ${styles.customcols} gap-[10px] sm:gap-[40px] gap-y-[40px] md:mt-[69px]`}>
         {cardData.map((card, index) => (
          <div key={index} className="shadow-lg border rounded-xl bg-[#fff] group transition duration-500 hover:bg-[#005CFF] mx-auto py-[50px] w-[259px] h-[176px]">
            <div className="grid justify-center gap-[15px]">
            <AddShoppingCartIcon className="w-[38px] h-[40px] group-hover:text-[#fff] mx-auto"/>
            <div className="text-[#414141] group-hover:text-[#fff] text-[14px] leading-normal font-normal">
              {card.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Dominance;