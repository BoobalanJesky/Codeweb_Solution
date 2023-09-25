import React from "react";
export default function Hire() {
    return (
        <>
            <div className="w-full md:flex items-center  gap-3 lg:gap-0 flex-wrap md:flex-nowrap">
                <div className="md:w-1/2">
                    <p className="text-[14px] text-[#005CFF] font-semibold leading-normal">Hire Developers</p>
                    <p className="text-[24px] md:text-[30px] lg:text-[35px] text-[#000] md:max-w-[567px] font-bold leading-normal">
                        Hire Our Expert Developers For
                        Your Projects                    </p>
                    <div className="py-[20px]">
                        <p className="text-[14px] leading-[21px] font-normal max-w-[540px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p></div>
                    <button className="bg-[#005CFF] w-[131px] h-[49px] rounded text-[#fff] font-medium text-[14px]">Get started</button>
                </div>

                <div className=" md:w-1/2 mt-5 lg:mt-0">
                    <img className="mx-auto" src="/assets/image/Group 2019.png" />

                </div>

            </div>
        </>
    )
}
