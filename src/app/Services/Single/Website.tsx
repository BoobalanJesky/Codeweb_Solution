import React from "react";
export default function Website() {
    return (
        <>
            <div className="w-full flex flex-wrap md:flex-nowrap items-center mt-[124px]">
                <div className="md:w-1/2  mx-auto md:mx-0">
                    <p className="text-[14px] text-[#005CFF] font-semibold leading-normal">Website Development Services</p>
                    <p className="text-[24px] md:text-[30px] lg:text-[35px] text-[#000] max-w-[567px] font-bold leading-normal">
                        The Best Website Development
                        Services for Your Business
                    </p>
                    <div className="py-[20px]">
                        <p className="text-[14px] leading-[21px] font-normal max-w-[540px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry&#39s standard dummy text ever since the 1500s</p></div>
                    <button className="bg-[#005CFF] w-[131px] h-[49px] rounded text-[#fff] font-medium text-[14px]">Get started</button>
                </div>

                <div className=" md:w-1/2 mt-10 md:mt-0 mx-auto md:mx-0">
                    <img className="mx-auto" src="./assets/image/Group 2019.png" />

                </div>

            </div>
        </>
    )
}