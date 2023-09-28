import React from "react";
export default function Achievements() {
    const data = [
        { value: '1.2K', text: 'Project completed' },
        { value: '4+', text: 'Years Of Experience' },
        { value: '1K+', text: 'Trusted Clients' },
        { value: '100+', text: 'Team Members' }
    ];
    return (
        <div className="grid  gap-y-10 sm:grid-cols-2 text-center  lg:grid-cols-4 mt-[40px] sm:mt-[90px] lg:mt-[144px] ">
            {data.map((item, index) => (
                <div key={index} className="">
                    <p className="text-text-color font-bold text-[35px]">{item.value}</p>
                    <p className="font-medium text-[18px] leading-[27px] text-[#000000]">{item.text}</p>
                </div>
            ))}
        </div>
    )
}