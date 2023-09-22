import React from "react";
import AccountCard from "../Reusable/Accountcard";

const Dominance = () => {
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
      
      <div className="flex flex-wrap gap-[10px] sm:gap-[40px]">
        <AccountCard
          title=""
          description="Retail, Ecommerce"
          icon="/assets/svg/cart.svg"
          className="w-[260px] text-center h-[176px]  mx-auto"
          imageClassName="mx-auto"
        />
        <AccountCard
          title=""
          description="Education & E-learning"
          icon="/assets/svg/cart.svg"
          className="w-[260px] text-center h-[176px]  mx-auto"
          imageClassName="mx-auto"
        />
        <AccountCard
          title=""
          description="Healthcare & Fitness"
          icon="/assets/svg/cart.svg"
          className="w-[260px] text-center h-[176px]  mx-auto"
          imageClassName="mx-auto"
        />
        <AccountCard
          title=""
          description="Logistics & Distribution"
          icon="/assets/svg/cart.svg"
          className="w-[260px] text-center h-[176px]  mx-auto"
          imageClassName="mx-auto"
        />
        <AccountCard
          title=""
          description="Social Networking"
          icon="/assets/svg/cart.svg"
          className="w-[260px] text-center h-[176px]  mx-auto"
          imageClassName="mx-auto"
        />
           <AccountCard
          title=""
          description="Real Estate"
          icon="/assets/svg/cart.svg"
          className="w-[260px] text-center h-[176px]  mx-auto"
          imageClassName="mx-auto"
        />
           <AccountCard
          title=""
          description="Travel & Hospitality"
          icon="/assets/svg/cart.svg"
          className="w-[260px] text-center h-[176px]  mx-auto"
          imageClassName="mx-auto"
        />
           <AccountCard
          title=""
          description="Food & Restaurant"
          icon="/assets/svg/cart.svg"
          className="w-[260px] text-center h-[176px]  mx-auto"
          imageClassName="mx-auto"
        />
      </div>
    </div>
  );
};

export default Dominance;
