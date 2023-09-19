import React from "react";
import styles from "../../css/about.module.css";
const Journey = () => {
  return (
    <>
      <div className="w-full bg-[#222] h-[520px] flex gap-[70px] items-start px-[72px]">
        <div className="rounded-full px-[19px] py-[15px] bg-default-primary my-auto">
            <img src="/assets/svg/leftArrow.svg"/>
        </div>
        <div className="relative w-1/2 my-[49px]">
          <div className=" flex  items-center gap-[22px]">
            <img src="/assets/image/sidePic2.png" className="rounded-[7px]" />
            <div
              className={`${styles.sideBox} w-[90px] h-[104px] bg-[#D4D9E9] rounded-[5px] shadow-md mb-[22px]`}
            ></div>
          </div>
          <div className="absolute gap-[22px]  left-[70px] bottom-[-150px] flex items-center">
            <div
              className={`${styles.sidebox1} w-[90px] h-[116px] bg-default-primary rounded-[5px] mt-[55px]`}
            ></div>
            <img src="/assets/image/sidePic1.png" className="rounded-[7px]" />
          </div>
        </div>
        <div className="w-1/2 my-auto">
          <p className="text-[14px] my-[5px] leading-normal font-semibold text-text-color">
            Case Studies
          </p>
          <p className="text-[33px] font-bold leading-normal text-[#fff] max-w-[500px]">
            Unlocking Success Story Of AloApp, From Scratch to Finish
          </p>
          <p className="text-[14px] font-normal leading-[30px] text-[#fff] max-w-[600px] mt-[26px] mb-[20px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy text of the
            printing.
          </p>
          <button className="bg-default-primary flex justify-between items-center gap-[7px] text-[#fff] capitalize px-[25px] py-[13px] rounded-[4px] text-[14px] font-medium leading-normal">
            <span>Explore AloApp Case Study</span>
            <img
              src="/assets/svg/keyArrow.svg"
              className="w-[12px] h-[8px]"
            ></img>
          </button>
        </div>
        <div className="rounded-full px-[19px] py-[15px] bg-default-primary my-auto">
            <img src="/assets/svg/rightArrow.svg"/>
        </div>
      </div>
    </>
  );
};

export default Journey;
