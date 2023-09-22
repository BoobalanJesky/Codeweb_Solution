import React from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Stepper from "../Components/Stepper/stepper";
export default function Marketing() {
    return (
        <>
            <div className=" w-full flex flex-wrap px-[10px] md:px-[20px] lg:pl-[70px] md:flex-nowrap">
                <div className="lg:w-1/2 bg-[#fff] mt-[100px]">
                    <p className="text-[14px] text-[#005CFF] font-semibold leading-normal">Who We Are</p>
                    <p className="text-[28px] md:text-[30px] lg:text-[35px]  text-[#000] max-w-[567px] font-bold leading-normal">
                        Company Founded When You Need Marketing Results
                    </p>
                    <div className="">
                        <img className="" src="/assets/image/Group 2024.png" />
                    </div>
                </div>
                <div className="lg:w-1/2 mx-auto  mt-[20px] md:mt-[100px]">
                    <div className="max-w-[583px] mx-auto">
                    <p className="text-[#414141] text-[14px]  font-normal leading-[33px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="mt-[20px] mb-[30px] flex">
                        <p className="text-[18px] text-[#005CFF] font-semibold leading-normal ">contact us<KeyboardArrowRightIcon /></p>

                    </div>
                    
                    <Stepper />
                    </div>
                </div>
            </div>
        </>
    )
}