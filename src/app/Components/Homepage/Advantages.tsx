import React from "react";
import AccountCard from "../Reusable/Accountcard";

const Advantages = () => {
  return (
    <div className="w-full flex items-center mb-[124px] gap-[101px]">
      <div className="w-1/2">
        <p className="text-[14px] my-[5px] leading-normal font-semibold text-text-color">
          Why Choose Us?
        </p>
        <p className="text-[33px] font-bold leading-normal text-text-black max-w-[476px]">
          The Benefits of Choosing Us, A Positive Driven Approach
        </p>
        <p className="text-[14px] font-normal leading-[30px] text-[#414141] max-w-[600px] mt-[26px] mb-[20px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s
        </p>
        <button className="bg-default-primary flex justify-between items-center gap-[7px] text-[#fff] capitalize px-[25px] py-[13px] rounded-[4px] text-[14px] font-medium leading-normal">
          <span>About us</span>
          <img
            src="/assets/svg/keyArrow.svg"
            className="w-[12px] h-[8px]"
          ></img>
        </button>
      </div>
      <div className="w-1/2 grid grid-cols-2 ">
      <AccountCard
            title="Faster Hiring"
            description="Lorem Ipsum is simply 
            dummy text of the printing."
            icon="/assets/svg/info.svg"
            className="mt-10 w-[240px] mx-auto"
          />
             <AccountCard
            title="Lorem Ipsum"
            description="Lorem Ipsum is simply 
            dummy text of the printing."
            icon="/assets/svg/info.svg"
            className="mb-10 w-[240px] "
          />
             <AccountCard
            title="Faster Hiring"
            description="Lorem Ipsum is simply 
            dummy text of the printing."
            icon="/assets/svg/info.svg"
            className="mt-10 w-[240px] mx-auto"
          />
             <AccountCard
            title="Faster Hiring"
            description="Lorem Ipsum is simply 
            dummy text of the printing."
            icon="/assets/svg/info.svg"
            className="mb-10 w-[240px]"
          />
      </div>
    </div>
  );
};

export default Advantages;
