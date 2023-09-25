import React from "react";
import MyForm from "../Components/Reusable/form";
export default function Business() {
    return (
        <>
            <div className="mt-[145px] w-full flex flex-wrap md:flex-nowrap items-center bg-[#1E1E1E]">
                <div className="md:w-1/2 flex p-2 justify-center mx-auto">
                    <div className="">
                        <p className="font-semibold text-[14px] text-[#005CFF] leading-normal">Get In Touch With Us</p>
                        <p className="font-bold text-[#FFF] pt-[5px] pb-[20px] text-[28px] md:text-[30px] lg:text-[33px] md:max-w-[530px] leading-normal">Do You Want To Know More About Our Business?</p>
                        <p className="text-[14px] text-[#fff] md:max-w-[590px] leading-[30px] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2  lg:p-[80px] mx-auto">
                    <div className='bg-[#fff] rounded-md md:rounded-[20px]   mx-auto px-[58px] py-[58px]'>
                        <MyForm />
                    </div>
                </div>
            </div>
        </>
    )
}