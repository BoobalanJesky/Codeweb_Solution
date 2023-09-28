import React from "react";
export default function Careers() {
    return (
        <>
            <div className="w-full flex justify-center gap-3 lg:gap-0 flex-wrap md:flex-nowrap mt-[124px]">
                <div className=" grid md:w-1/2 m-auto">
                    <p className="text-[14px] text-[#005CFF] font-semibold leading-normal">Careers</p>
                    <p className="text-[24px] md:text-[30px] lg:text-[35px] text-[#000] max-w-[567px] font-bold leading-normal">
                        We’re Re-defining Work at
                        Code Web Solutions                    
                        </p>
                    <div className="py-[20px]">
                        <p className="text-[14px] leading-[21px] font-normal max-w-[540px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p></div>
                    <button className="bg-[#005CFF] px-[25px] py-[13px] w-[179px] h-[49px] rounded text-[#fff] font-medium text-[14px]">Explore Vacancies</button>
                </div>

                <div className=" md:w-1/2">
                    <img className="" src="/assets/image/Group 2019.png" />

                </div>

            </div>
        </>
    )
}
