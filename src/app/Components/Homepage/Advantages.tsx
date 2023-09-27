import React from "react";
import AccountCard from "../Reusable/Accountcard";
import styles from "../../css/about.module.css";
const Advantages = () => {
  const cardData = [
    {
      title: "Faster Hiring",
      description: "Lorem Ipsum is simply dummy text of the printing.",
      icon: "/assets/svg/info.svg",
      className: `${styles.advGridgap} lg:mt-10 w-[243px] h-[243px] px-[27px] py-[36px] mx-auto`,
    },
    {
      title: "Lorem Ipsum",
      description: "Lorem Ipsum is simply dummy text of the printing.",
      icon: "/assets/svg/info.svg",
      className: "lg:mb-10 w-[243px] h-[243px] px-[27px] py-[36px] w-[228px] mx-auto lg:mx-0",
    },
    {
      title: "Faster Hiring",
      description: "Lorem Ipsum is simply dummy text of the printing.",
      icon: "/assets/svg/info.svg",
      className: `${styles.advGridgap} lg:mt-10 w-[243px] h-[243px] px-[27px] py-[36px] mx-auto`,
    },
    {
      title: "Faster Hiring",
      description: "Lorem Ipsum is simply dummy text of the printing.",
      icon: "/assets/svg/info.svg",
      className: "lg:mb-10 w-[243px] h-[243px] px-[27px] py-[36px]  w-[228px] mx-auto lg:mx-0",
    },
  ];
  return (
    <div className={`w-full ${styles.AdvGap} flex flex-wrap mt-[124px] lg:flex-nowrap items-center mb-10 lg:mb-[124px] px-[5px]`} >
      <div className={`w-full flex justify-center ${styles.AdvLeft} lg:w-1/2`}>
        <div>
          <p className="text-[14px] my-[5px] leading-normal text-center lg:text-start font-semibold text-text-color">
            Why Choose Us?
          </p>
          <p className={`text-[24px] md:text-[30px] lg:text-[33px] text-center lg:text-start font-bold leading-normal text-text-black ${styles.AdvPara} lg:max-w-[476px]`}>
            The Benefits of Choosing Us, A Positive Driven Approach
          </p>
          <p className={`text-[14px] mx-auto font-normal leading-[30px] text-[#414141] ${styles.AdvParagraph} max-w-[600px] mt-[26px] mb-[20px] `}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-default-primary flex justify-between items-center gap-[7px] text-[#fff] capitalize px-[25px] py-[13px] rounded-[4px] text-[14px] font-medium leading-normal">
              <span>About us</span>
              <img
                src="/assets/svg/keyArrow.svg"
                className="w-[12px] h-[8px]"
              ></img>
            </button>
          </div>
        </div>
      </div>
      <div className={`w-full ${styles.AdvRight} lg:w-1/2 grid justify-items-center gap-5 sm:gap-[6.75rem]  lg:gap-0 mt-8 lg:mt-0 mx-auto sm:grid-cols-2 `}>
        {cardData.map((card, index) => (
          <AccountCard
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
            className={card.className}
          />
        ))}
      </div>
    </div>
  );
};

export default Advantages;