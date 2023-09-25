import React from "react";
export default function Aboutus() {
    return (
        <>
            <div className="w-full flex justify-center gap-3 lg:gap-0 flex-wrap md:flex-nowrap ">
                <div className=" grid md:w-1/2 m-auto">
                    <p className="text-[14px] text-text-color font-semibold leading-normal">About us</p>
                    <p className="text-[24px] md:text-[30px] lg:text-[35px] text-[#000] max-w-[567px] font-bold leading-normal">
                        A Canvas for Passionate Creators: Nurturing Enthusiasm & Creativity
                    </p>
                    <div className="py-[20px]">
                        <p className="text-[14px]  leading-[21px] font-normal max-w-[540px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <button className="bg-default-primary w-[131px] h-[49px] border-2 px-[21px] py-[14px] rounded-[4px] text-[#fff] font-medium text-[14px]">Get started</button>
                </div>
                <div className=" md:w-1/2">
                    <img className="mx-auto" src="/assets/image/Group 2019.png" />
                </div>

            </div>
        </>
    )
}