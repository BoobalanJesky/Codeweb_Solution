import React from "react";
export default function Ourteam() {
    return (
        <>
            <div className="mt-[100px] px-[15px] sm:px-[20px] md:px-[30px] lg:px-[70px]">
                <p className="text-[14px] text-[#005CFF] font-semibold leading-normal text-center">Our Team Members</p>
                <p className="text-[24px] md:text-[28px] lg:text-[33px] text-[#000] font-bold leading-normal text-center">Introducing Our Talented Team Members</p>
            </div>
            <div className='mt-[71px] px-[70px] flex flex-wrap justify-around gap-7'>
                <div className="w-[295px] bg-[#fff] border-1 shadow-md rounded-xl">
                    <div className="">
                    <img className="rounded-xl" src="/assets/image/Ellipse 20.png"/>
                    {/* <img className="px-[63px] py-[57px]" src="/assets/image/Mask group(3).png"/> */}
                    </div>
                    <p className="text-[#000] leading-[33px] text-center font-medium text-[18px]">Brayden Tengan</p>
                    <p className="text-[#414141] text-[14px] text-center mb-[21px] leading-[33px] font-medium ">CEO & Founder</p>
                    </div>
                    <div className="w-[295px]  bg-[#fff] border-1 shadow-md rounded-xl">
                    <div className="">
                    <img className="rounded-xl" src="/assets/image/Ellipse 20.png"/>
                    {/* <img className="px-[63px] py-[57px]" src="/assets/image/Mask group(3).png"/> */}
                    </div>
                    <p className="text-[#000] leading-[33px] text-center font-medium text-[18px]">Erin Shantel</p>
                    <p className="text-[#414141] text-[14px] text-center mb-[21px] leading-[33px] font-medium ">COO & Founder</p>
                    </div>
                    <div className="w-[295px]  bg-[#fff] border-1 shadow-md rounded-xl">
                    <div className="">
                    <img className="rounded-xl" src="/assets/image/Ellipse 20.png"/>
                    {/* <img className="px-[63px] py-[57px]" src="/assets/image/Mask group(3).png"/> */}
                    </div>
                    <p className="text-[#000] leading-[33px] text-center font-medium text-[18px]">Antonio Gill</p>
                    <p className="text-[#414141] text-[14px] text-center mb-[21px] leading-[33px] font-medium ">CEO & Founder</p>
                    </div>
                    <div className="w-[295px]  bg-[#fff] border-1 shadow-md rounded-xl">
                    <div className="">
                    <img className="rounded-xl" src="/assets/image/Ellipse 20.png"/>
                    {/* <img className="px-[63px] py-[57px]" src="/assets/image/Mask group(3).png"/> */}
                    </div>
                    <p className="text-[#000] leading-[33px] text-center font-medium text-[18px]">Francesca</p>
                    <p className="text-[#414141] text-[14px] text-center mb-[21px] leading-[33px] font-medium ">Designer</p>
                    </div>
               
            </div>
        </>
    )
}