import React from "react";
export default function Aboutus() {
    return (
        <>
            <div className="w-full flex justify-center gap-3 lg:gap-0 flex-wrap md:flex-nowrap mt-[124px]">
                <div className=" grid md:w-1/2 m-auto">
                    <p className="text-[14px] text-text-color font-semibold leading-normal">About us</p>
                    <p className="text-[24px] md:text-[30px] lg:text-[35px] text-[#000] max-w-[567px] font-bold leading-normal">
                        A Canvas for Passionate Creators: Nurturing Enthusiasm & Creativity
                    </p>
                    <div className="py-[20px]">
                        <p className="text-[14px]  leading-[21px] font-normal max-w-[540px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry&#39s standard dummy text ever since the 1500s</p>
                    </div>
                    <button className="bg-default-primary flex justify-between items-center gap-[7px] text-[#fff] w-[131px] h-[49px] capitalize px-[25px] py-[13px] rounded-[4px] text-[14px] font-medium leading-normal">Get started</button>
                </div>
                <div className=" md:w-1/2">
                    <img className="mx-auto height" src="./assets/image/Group 2019.png" />
                </div>

            </div>
        </>
    )
}