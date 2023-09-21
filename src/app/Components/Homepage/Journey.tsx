import React from "react";
import styles from "../../css/about.module.css";
const Journey = () => {
  return (
    <>
      <div className={`w-full relative p-2 h-full bg-[#222] lg:h-[520px] flex items-start justify-center  lg:flex-nowrap lg:gap-[70px]  ${styles.journeyPad} lg:px-[72px]`}>
        <div className={`rounded-full absolute ${styles.leftAbs}    border border-[#0F5DC4] h-[50px] w-[50px] flex justify-center items-center  bg-default-primary my-auto`}>
            <img src="/assets/svg/leftArrow.svg"/>
        </div>
        <div className="flex justify-center items-center flex-wrap">
        <div className="md:w-1/2">
<img src="/assets/image/banner.png" className="mx-auto w-[318px] md:w-auto lg:mx-0"/>
        </div>
        <div className="md:w-1/2  lg:mt-[49px] my-auto mt-[70px]">
          <p className="text-[14px] my-[5px] text-center lg:text-start  leading-normal font-semibold text-text-color">
            Case Studies
          </p>
          <p className="text-[33px] text-center lg:text-start font-bold leading-normal text-[#fff] lg:max-w-[500px]">
            Unlocking Success Story Of AloApp, From Scratch to Finish
          </p>
          <p className="text-[14px] font-normal leading-[30px] text-[#fff]  mx-auto max-w-[645px] mt-[26px] mb-[20px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy text of the
            printing.
          </p>
          <div className="flex justify-center lg:justify-start">
          <button className="bg-default-primary flex justify-between items-center gap-[7px] text-[#fff] capitalize px-[25px] py-[13px] rounded-[4px] text-[14px] font-medium leading-normal">
            <span>Explore AloApp Case Study</span>
            <img
              src="/assets/svg/keyArrow.svg"
              className="w-[12px] h-[8px]"
            ></img>
          </button></div>
        </div>
        </div>
        <div className={`rounded-full absolute ${styles.rightAbs}    border border-[#0F5DC4] h-[50px] w-[50px] flex justify-center items-center  bg-default-primary my-auto`}>
            <img src="/assets/svg/rightArrow.svg"/>
        </div>
      </div>
    </>
  );
};

export default Journey;
