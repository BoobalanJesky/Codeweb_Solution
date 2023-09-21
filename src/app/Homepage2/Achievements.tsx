import React from "react";
export default function Achievements() {
    return (
        <><div className="grid grid-cols-1 gap-[175px] gap-y-10 sm:grid-cols-2  lg:grid-cols-4 mt-[40px] sm:mt-[90px] lg:mt-[144px] px-[72px]">
            <div className="">
                <p className="text-[#005CFF] font-bold text-[35px] leading-[52.5px] text-center">1.2K</p>
                <p className="font-medium text-[18px] leading-[27px] text-[#000000] text-center">Project completed</p>
            </div>
            <div className="">
                <p className="text-[#005CFF] font-bold text-[35px] leading-[52.5px] text-center">4+</p>
                <p className="font-medium text-[18px] leading-[27px] text-[#000000] text-center">Years Of Experience</p>
            </div>
            <div className="">
                <p className="text-[#005CFF] font-bold text-[35px] leading-[52.5px] text-center">1K+</p>
                <p className="font-medium text-[18px] leading-[27px] text-[#000000] text-center">Trusted Clients</p>
            </div>
            <div className="">
                <p className="text-[#005CFF] font-bold text-[35px] leading-[52.5px] text-center">100+</p>
                <p className="font-medium text-[18px] leading-[27px] text-[#000000] text-center">Team Members</p>
            </div>
        </div></>
    )
}