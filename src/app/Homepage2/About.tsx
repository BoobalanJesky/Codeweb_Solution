import React from "react";
export default function Aboutus() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 px-[15px] sm:px-[20px] md:px-[30px] lg:px-[70px] xl:pr-[135px]">
                <div className="bg-[#fff]">
                    <p className="text-[14px] text-[#005CFF] font-semibold leading-normal">About us</p>
                    <p className="text-[24px] md:text-[30px] lg:text-[35px] text-[#000] max-w-[567px] font-bold leading-normal">
                        A Canvas for Passionate Creators: Nurturing Enthusiasm & Creativity
                    </p>
                    <div className="py-[20px]">
                    <p className="text-[14px] leading-[21px] font-normal max-w-[540px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p></div>
                    <button className="bg-[#005CFF] w-[131px] h-[49px] rounded text-[#fff] font-medium text-[14px]">Get started</button>
                </div>
                
                    <div className="pt-[30px] sm:pl-[50px] lg:pl-[70px] xl:pl-[130px]">
                        <img className="" src="/assets/image/Group 2019.png" />

                    </div>
                
            </div>
        </>
    )
}
