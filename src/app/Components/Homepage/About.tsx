"use client";

import { useState } from "react";
import styles from "../../css/about.module.css";

const About = () => {
  const [activeDot, setActiveDot] = useState(0);

  const handleDotClick = (index) => {
    setActiveDot(index);
  };
  return (
    <>
    <div className="w-full flex gap-[190px] ">
      <div className="grid w-1/2 m-auto">
        <p className="font-bold pt-[60px] text-[35px] max-w-[505px]">
          <span className="text-text-color">Website & Mobile Application </span>
          <span className="">Development Company </span>
        </p>
        <p className="max-w-[570px] text-[14px] mt-[27px] mb-[51px] leading-normal font-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <div className="flex gap-[11px]">
          <button className="bg-default-primary flex justify-between items-center gap-[7px] text-[#fff] capitalize px-[25px] py-[13px] rounded-[4px] text-[14px] font-medium leading-normal">
            <span>Explore our services</span>
            <img
              src="/assets/svg/keyArrow.svg"
              className="w-[12px] h-[8px]"
            ></img>
          </button>
          <div className="rounded-full border border-default-primary flex justify-between px-[21px] py-[14px] bg-default-primary">
            <img src="/assets/svg/arrow.svg" />
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="relative">
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
      </div>
    </div>
    <div className="mt-[165px] mb-[124px] flex justify-center">
        <ul className={`${styles.pagination}`}>
          {[...Array(5)].map((_, index) => (
            <li
              key={index}
              className={`${styles.dot} ${
                activeDot === index ? styles.active : ""
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
          <div
            className={`${styles.slider}`}
            style={{ transform: `translateX(${activeDot * 15}px)` }}
          />
        </ul>
      </div>
</>
  );
};

export default About;
