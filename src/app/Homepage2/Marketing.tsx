import React from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export default function Marketing() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 px-[15px] sm:px-[20px] md:px-[30px] lg:px-[70px]">
                <div className=" bg-[#fff] mt-[100px]">
                    <p className="text-[14px] text-[#005CFF] font-semibold leading-normal">Who We Are</p>
                    <p className="text-[28px] md:text-[30px] lg:text-[35px] text-[#000] max-w-[567px] font-bold leading-normal">
                        Company Founded When You Need Marketing Results
                    </p>
                    <div className="">
                        <img className="" src="/assets/image/Group 2024.png"/>
                        </div>
                </div>
                <div className="sm:pl-[30px] lg:pl-[50px] xl:pl-[70px] mt-[20px] md:mt-[100px]">
                    <p className="text-[#414141] text-[14px] font-normal leading-[33px] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="mt-[20px] flex">
                        <p className="text-[18px] text-[#005CFF] font-semibold leading-normal ">contact us<KeyboardArrowRightIcon /></p>

                    </div>
                   
            </div>
            </div>
        </>
    )
}