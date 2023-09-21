import React from "react";
import MyForm from "../Components/Reusable/form";
export default function Developer() {
    return (
        <>
            <div className="mt-[100px] grid grid-cols-1 lg:grid-cols-2 bg-[#1E1E1E]">
                <div className="my-auto px-[20px] lg:pl-[104px] pt-[20px] md:block">
                    <p className="font-semibold text-[14px] text-[#005CFF] leading-normal">Get In Touch With Us</p>
                    <p className="font-bold text-[#FFF] pt-5 text-[28px] md:text-[30px] lg:text-[33px] md:max-w-[530px] leading-normal">Do You Want To Know More
                        Dedicated Developer Services?</p>
                    <p className="text-[14px] text-[#fff] md:max-w-[590px] leading-[30px] pt-[20px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div className="py-[80px] px-[20px] xl:pr-[139px]">
                    <div className='bg-[#fff] max-w-[581px] max-h-[617px] rounded-[20px] px-[20px] mx-auto md:px-[58px] py-[58px]'>
                        <MyForm />
                    </div>
                </div>
            </div>
        </>
    )
}